from app.models.Loan_apps_Model import Loan_app
from flask import request, jsonify
import json
from app import app
from app.controllers.auth_controller import admin_required


@app.route('/admin/loanapp/update/<loanid>',methods=['PUT'])
#@admin_required
def update_loan(loanid):
    app_data=json.loads(request.data)
    loan_app = Loan_app.objects(id=loanid).first()
    if (not app):
        return ("application not found",404)
    else:
        loan_app.update(
        loan_interest_rate=app_data["loan_interest_rate"],
        emp_id=app_data["emp_id"],
        dof=app_data["dof"],
        status=app_data["status"],
        grade=app_data["grade"],
        loan_status=app_data["loan_status"],
        mail_status=app_data["mail_status"])
    return ("application is updated",200)

# modify loan app via the loanid


@app.route('/admin/loanapp/apps/<loanid>',methods=['GET'])
#@admin_required
def get_loan_byid(loanid):
    apps= Loan_app.objects(id=loanid)
    return jsonify(apps)

#Get one loan app via loanID


@app.route('/admin/loanapp/apps',methods=['GET'])
#@admin_required
def get_all_loanapps():
   apps= Loan_app.objects()
   return jsonify(apps)

# Get all the loan apps 