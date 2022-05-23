import mongoengine as me
from app import bcrypt
from flask import jsonify
import datetime

class User(me.Document):

    firstname = me.StringField(required=True)
    lastname = me.StringField(required=True)
    cin=me.LongField(required=True)
    rib=me.LongField(required=True)
    age=me.IntField(required=True)
    adress=me.StringField(required=True)
    role=me.StringField(required=True)
    email = me.EmailField(required=True, unique=True)
    password = me.StringField(required=True)
    phone=me.LongField(required=True)
   
    def user_to_json(self):
        return jsonify({
                        "email": self.email,
                        "role":self.role})
    def valid_login(given_email,given_password):
        users=User.objects(email=given_email)
        if(not users):
            return False
        else:
            for user in users:
                return bcrypt.check_password_hash(user.password.encode('utf-8'),given_password.encode('utf-8'))
    def getRole(given_email):
        users=User.objects(email=given_email)
        for user in users:
            return user.role
    def getEmail(given_email):
        users=User.objects(email=given_email)
        for user in users:
            return user.email
    