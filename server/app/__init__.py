from flask import Flask
from flask_bcrypt import Bcrypt
import dns.resolver
from flask_mongoengine import MongoEngine
from flask_cors import CORS

app = Flask(__name__)
bcrypt=Bcrypt(app)
app.config['SECRET_KEY']="testinggggggggggggggggg"
CORS(app)



dns.resolver.default_resolver = dns.resolver.Resolver(configure=False)
dns.resolver.default_resolver.nameservers = ['8.8.8.8']

app.config['MONGODB_SETTINGS'] = {
    'db': 'Credit_Risk',
    'host': 'mongodb+srv://admin:pass1234@cluster0.fthx2.mongodb.net/OTB?retryWrites=true&w=majority'
}

db = MongoEngine()
db.init_app(app)

from app.controllers.Client import Loan_apps_controller
from app.controllers.admin import admin_users_controller
from app.controllers import auth_controller

