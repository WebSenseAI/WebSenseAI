from peewee import Model, SqliteDatabase, CharField

db = SqliteDatabase('./database/vector.db')

class User(Model):
    username = CharField(unique=True)
    email = CharField(unique=True)

    class Meta:
        database = db

class Vector(Model):
    text = CharField(unique=True)
    vector = CharField(unique=True)

    class Meta:
        database = db