import mongoengine as me
from app import bcrypt
from flask import jsonify

class User(me.Document):
    name = me.StringField(required=True)
    role=me.StringField(required=True)
    email = me.EmailField(required=True, unique=True)
    password = me.StringField(required=True)
    def user_to_json(self):
        return jsonify({"name": self.name,
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
    def getName(given_email):
        users=User.objects(email=given_email)
        for user in users:
            return user.name