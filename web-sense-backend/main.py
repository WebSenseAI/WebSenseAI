from flask import Flask
from openai_api.functions import generate_chat_completion
app = Flask(__name__)


@app.route("/")
def main():
    return "<p>Hello, World!</p>"


@app.route("/api/<jsdata>")
def api_route(jsdata):
    answer = generate_chat_completion(jsdata)
    print(answer.content)
    return answer.content