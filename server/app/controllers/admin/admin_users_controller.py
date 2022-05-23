from app.controllers.auth_controller import *
from flask_mongoengine.wtf import model_form


post_user = model_form(User)


@app.route('/user/add', methods=['POST'])
# @admin_required
def add_user():
    user_data = json.loads(request.data)
    hashed_password = bcrypt.generate_password_hash(user_data["password"]).decode('utf-8')
    new_user = User(email=user_data["email"],
    role=user_data["role"],
    password=hashed_password,
    firstname = user_data["firstname"],
    lastname = user_data["lastname"],
    cin=user_data["cin"],
    age=user_data["age"],
    rib=user_data["rib"],
    adress=user_data["adress"],
    phone=user_data["phone"])
    new_user.save()
    return(new_user.to_json())

# Get all users


@app.route('/user/users', methods=['GET'])
# @admin_required
def get_users():
    users = User.objects()
    return jsonify(users)

# Get One user via the id

@app.route('/user/<user_id>')
# @admin_required
def get_user(user_id):
    user = User.objects(id=user_id).first()
    if (not user):
        return ("User Not Found", 404)
    else:
        return (user.to_json(), 200)

# Update a user

@app.route('/user/update/<user_id>', methods=['PUT'])
# @admin_required
def update_user(user_id):
    user_data = json.loads(request.data)
    user = User.objects(id=user_id).first()
    if (not user):
        return ("User Not Found", 404)
    else:
        user.update(email=user_data["email"],
        adress=user_data["adress"],
        phone=user_data["phone"],
        age=user_data["age"],
        )
        return("user is updated", 200)
# Delete a user


@app.route('/user/delete/<user_id>', methods=['DELETE'])
# @admin_required
def delete_user(user_id):
    
    user = User.objects(id=user_id).first()
    if (not user):
        return ("User Not Found", 404)
    else:
        user.delete()
        return("Successfuly deleted", 200)

