from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://qdwxjggdyiaxrt:2b4bb4661730a3b1cdf8b63841a4a02621cd25d95e30ddced79f6b1d7b7b4d73@ec2-54-225-97-112.compute-1.amazonaws.com:5432/d38nag5avum780'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

from website import routes