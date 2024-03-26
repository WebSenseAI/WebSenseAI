from openai_api.setup import client


chat_history = [
        {"role": "system", "content": "You are a helpful assistant designed to help users."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "system", "content": "The Los Angeles Dodgers won the World Series in 2020. They defeated the Tampa Bay Rays in six games to claim the title."},
        {"role": "user", "content": "Where was it played?"},
        {"role": "system", "content": "The 2020 World Series in Major League Baseball was played at Globe Life Field in Arlington, Texas. This was due to the COVID-19 pandemic, which prompted MLB to create a bubble environment for the postseason, with neutral sites being used for playoff games to minimize travel and exposure risks."}
    ]

def generate_chat_completion(question: str):
    chat_history.append({"role": "user", "content": question})
    
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=chat_history,
        max_tokens=50
    )
    chat_completion = response.choices[0].message.content
    
    # Add chat completion to chat history
    chat_history.append({"role": "system", "content": chat_completion})
    return response.choices[0].message
