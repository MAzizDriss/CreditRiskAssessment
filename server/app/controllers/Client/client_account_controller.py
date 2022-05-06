from app.controllers.auth_controller import *
from flask_mongoengine.wtf import model_form


@app.route('/client/update/<user_id>', methods=['PUT'])
#@client_required
def update_clientaccount(user_id):
    user_data = json.loads(request.data)
    user = User.objects(id=user_id).first()
    if (not user):
        return ("User Not Found", 404)
    else:
        user.update(email=user_data["email"],
        adress=user_data["adress"],
        phone=user_data["phone"],
       )
    return("user is updated", 200)