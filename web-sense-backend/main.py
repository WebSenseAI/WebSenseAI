from flask import (Flask, g)
from database.connection import db, Vector
from database.functions import (getAllDbVectors)
from lang_chain.lang_chain import LangChainResponse
from os import path

app = Flask(__name__)

# Connect to the database
db.connect()


@app.route("/")
def main():
    return "<p>Hello, World!</p>"


@app.route("/api/<jsdata>")
def api_route(jsdata):
    db.create_tables([Vector])
    return LangChainResponse(jsdata)

@app.route("/api/db")
def api_route_all():
    return  getAllDbVectors("vector", db)