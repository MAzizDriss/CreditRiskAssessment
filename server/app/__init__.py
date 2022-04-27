from flask import Flask
from flask_bcrypt import Bcrypt
import dns.resolver
from flask_mongoengine import MongoEngine

app = Flask(__name__)
bcrypt=Bcrypt(app)
app.config['SECRET_KEY']="testinggggggggggggggggg"



dns.resolver.default_resolver = dns.resolver.Resolver(configure=False)
dns.resolver.default_resolver.nameservers = ['8.8.8.8']

app.config['MONGODB_SETTINGS'] = {
    'db': 'Credit_Risk',
    'host': 'mongodb+srv://admin:pass1234@cluster0.hbtkj.mongodb.net/Credit_Risk?retryWrites=true&w=majority'
}

db = MongoEngine()
db.init_app(app)

from app.controllers.admin import admin_users_controller
from app.controllers import auth_controller
