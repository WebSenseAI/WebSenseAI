import sqlite3
from peewee import Model, SqliteDatabase, CharField

db = SqliteDatabase('./database/database.db')

class User(Model):
    username = CharField(unique=True)
    email = CharField(unique=True)

    class Meta:
        database = db
