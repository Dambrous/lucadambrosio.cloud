import sqlite3

connection = sqlite3.connect('lucadambrosio.db')

with open('db.sql') as script_sql:
    connection.executescript(script_sql.read())

connection.close()
