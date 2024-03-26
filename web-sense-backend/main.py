from flask import (Flask, g)
from openai_api.functions import generate_chat_completion
from openai_api.functions import embedding
from database.connection import db, User

app = Flask(__name__)

# Connect to the database
db.connect()

@app.route("/")
def main():
    return "<p>Hello, World!</p>"


@app.route("/api/<jsdata>")
def api_route(jsdata):
    answer = generate_chat_completion(jsdata)
    return answer.content


@app.route("/api/embedding/<jsdata>")
def embedding_route(jsdata):
    answer = embedding(jsdata)
    return answer