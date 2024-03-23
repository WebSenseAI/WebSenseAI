from flask import Flask
from openai_api.functions import generate_chat_completion
app = Flask(__name__)


@app.route("/")
def main():
    return "<p>Hello, World!</p>"


@app.route("/api")
def api_route():
    answer = generate_chat_completion("Who was the MVP of the 2020 World Series?")
    print(answer.content)
    return answer.content