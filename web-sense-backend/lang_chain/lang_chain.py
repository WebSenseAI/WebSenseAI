from langchain_openai import ChatOpenAI
from langchain.prompts.chat import (
    HumanMessagePromptTemplate,
    ChatPromptTemplate
)
from lang_chain.VectorEmbedding import (
    EmbbedShortText,
    GetSimilarVectorsFromDatabase,        
)

import os

# The template prompt that will be used to generate the prompt
PROMPT = """
    Use the following pieces of context to answer the question at the end. Only If you don't know the answer, just say that you don't know and that the user can check on the website, don't try to make up an answer.
    never mention the context in the answer, just use it to generate the answer.
    be friendly and a bit funny.

    CONTEXT:
    {CONTEXT}

    Question: {QUESTION}
    Helpful Answer: """


def LangChainResponse(question: str): 
    llm = ChatOpenAI(openai_api_key="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")
    
    similarContextSum = GetSimilarVectorsFromDatabase(
        {
            "text": question,
            "textEmbedded": EmbbedShortText(question)["textEmbedded"]
        }
    )
        
    message = HumanMessagePromptTemplate.from_template(template=PROMPT)
    chat_propmt = ChatPromptTemplate.from_messages(
        messages=[message]
    )
    chat_propmt_with_values = chat_propmt.format_prompt(CONTEXT=similarContextSum, QUESTION=question)
    response = llm.invoke(chat_propmt_with_values.to_messages())
    
    return response.content
