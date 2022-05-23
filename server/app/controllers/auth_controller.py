from flask import request, jsonify
from functools import wraps
from app import app
import datetime
from datetime import timedelta
from app.models.User_Model import User
from app import bcrypt
import json
import mongoengine as me
import jwt

def token_required(f):
    @wraps(f)
    def decorated(*args,**kwargs):
        token = request.headers.get('token')
        if not token:
            return jsonify({'message':'Token is missing!'}),403
        try:
            data=jwt.decode(token, app.config['SECRET_KEY'],algorithms=["HS256"])
        except:
            return jsonify({'message':'Token is invalid!'}),403
        return f(*args, **kwargs)
    return decorated

def admin_required(f):
    @wraps(f)
    def decorated(*args,**kwargs):
        token = request.headers.get('token')
        if not token:
            return jsonify({'message':'Token is missing!'}),403
        try:
            data=jwt.decode(token, app.config['SECRET_KEY'],algorithms=["HS256"])
            if data['role']!='admin':
                return jsonify ({'message':'Denied Access!'}),403
        except:
            return jsonify({'message':'Token is invalid!!'}),403
        return f(*args, **kwargs)
    return decorated
def client_required(f):
    @wraps(f)
    def decorated(*args,**kwargs):
        token = request.headers.get('token')
        if not token:
            return jsonify({'message':'Token is missing!'}),403
        try:
            data=jwt.decode(token, app.config['SECRET_KEY'],algorithms=["HS256"])
            if data['role']!='client':
                return jsonify ({'message':'Denied Access!'}),403
        except:
            return jsonify({'message':'Token is invalid!!'}),403
        return f(*args, **kwargs)
    return decorated

                    

# Routes


@app.route('/')
def home():
    return "Hello world !"

@app.route('/api/auth')
@token_required
def auth():
    token = request.headers.get('token')
    data=jwt.decode(token, app.config['SECRET_KEY'],algorithms=["HS256"])
    return jsonify(data)

@app.route('/api/protected')

def protected():
    token = request.headers.get('token')
    data=jwt.decode(token, app.config['SECRET_KEY'],algorithms=["HS256"])
    user = User.objects(email=data['email'])[0]
    return jsonify(user)

@app.route("/api/login", methods=["POST"])
def post_token():
    user_login=json.loads(request.data)
    email = user_login["email"]
    password = user_login["password"]
    if not User.valid_login(email, password):
        return {"error": "Invalid login credentials"}, 401
    user_role= User.getRole(email)
    user_name=User.getEmail(email)
    token = jwt.encode(dict(
        name=user_name,
        email = user_login['email'],
        role = user_role,
        exp= datetime.datetime.utcnow() + timedelta(minutes=60)
    
    ),app.config['SECRET_KEY'],algorithm='HS256')
    return jsonify({'token': token})


