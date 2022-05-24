
from app.models.Loan_apps_Model import Loan_app
from app.models.User_Model import User
from flask import request, jsonify
import json
from app import app
from app.controllers.auth_controller import client_required

@app.route("/loanapp/add",methods=['POST'])
#@client_required
def add_app():
    app_data=json.loads(request.data)
    print(User.objects(id=app_data["user_id"]).first().id)
    new_app=Loan_app(
    user_id=User.objects(id=app_data["user_id"]).first().id,
    age=app_data['age'],
    annual_income=app_data["annual_income"],
    person_emp_length=app_data["person_emp_length"],
    loan_amnt=app_data["loan_amnt"],
    home_ownership=app_data["home_ownership"],
    loan_intent=app_data["loan_intent"],
    lnk=app_data["lnk"],
    rib=app_data["rib"])
    new_app.save()
    return (new_app.to_json())

@app.route('/loanapp/apps/<userid>',methods=['GET'])
#@client_required
def get_apps_byid(userid):
    apps= Loan_app.objects(user_id=userid)
    return jsonify(apps)

# @app.route('/loanapp/apps',methods=['GET'])
# #@client_required
# def get_all_apps():
#     apps= Loan_app.objects()
#     return jsonify(apps)

# @app.route('/loanapp/update/<userid>',methods=['PUT'])
# def update_app(userid):
#     app_data=json.loads(request.data)
#     app = Loan_app.objects(user_id=userid).first()
#     if (not app):
#         return ("application not found",404)
#     else:
#         app.update(annual_income=app_data["annual_income"],
#         age=app_data['age'],
#         person_emp_length=app_data["person_emp_length"],
#         loan_amnt=app_data["loan_amnt"],
#         home_ownership=app_data["home_ownership"],
#         loan_intent=app_data["loan_intent"],
#         lnk=app_data["lnk"],
#         loan_interest_rate=app_data["loan_interest_rate"],
#         emp_id=app_data["emp_id"],
#         dof=app_data["dof"],
#         status=app_data["status"],
#         loan_status=app_data["loan_status"],
#         mail_status=app_data["mail_status"])
#         return ("application is updated",200)

@app.route('/loanapp/delete/<userid>',methods=['DELETE'])
#@client_required
def delete_app(userid):
    app=Loan_app.objects(user_id=userid).first()
    if (not app):
        return ("application Not Found", 404)
    else:
        app.delete()
        return ("Successfuly deleted", 200)
