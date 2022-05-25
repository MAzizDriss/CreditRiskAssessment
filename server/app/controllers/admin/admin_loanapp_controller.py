from cgi import test
from app.models.Loan_apps_Model import Loan_app
from flask import request, jsonify
import json
from app.controllers.admin.functions import *
import pandas as pd
from app import app
from app.controllers.auth_controller import admin_required
import pickle
import numpy as np
import math as m    
filename='xgbmodal.pkl'
mod=pickle.load(open(filename,'rb'))


@app.route('/admin/checkmodel',methods=['POST'])
def checkmodal():
    loandata=json.loads(request.data)
    
    X_test=[0,
    int(loandata['age']),
    float(loandata['person_emp_length']),
    float(loandata['loan_interest_rate']),
    int(getMORTGAGE(loandata['home_ownership'])),
    int(getOTHERS(loandata['home_ownership'])),
    int(getOWN(loandata['home_ownership'])),
    int(getRENT(loandata['home_ownership'])),
    int(getLoanintentDEBTCONSOLIDATION(loandata['loan_intent'])),
    int(getLoanintentEDUCATION(loandata['loan_intent'])),
    int(getLoanintentHOMEIMPROVEMENT(loandata['loan_intent'])),
    int(getLoanintentMEDICAL(loandata['loan_intent'])),
    int(getLoanintentPERSONAL(loandata['loan_intent'])),
    int(getLoanintentVENTURE(loandata['loan_intent'])),
    int(getGradeA(loandata['grade'])),
    int(getGradeB(loandata['grade'])),
    int(getGradeC(loandata['grade'])),
    int(getGradeD(loandata['grade'])),
    int(getGradeE(loandata['grade'])),
    int(getGradeF(loandata['grade'])),
    int(getGradeG(loandata['grade'])),
    int(loandata['dof']),
    float(np.log(float(loandata['annual_income']))),
    float(np.log(float(loandata['loan_amnt']))),
    ]
    df2 = pd.DataFrame(data={'Unnamed: 0':X_test[0], 'person_age':X_test[1], 'person_emp_length':X_test[2], 'loan_int_rate':X_test[3],
       'person_home_ownership_MORTGAGE':X_test[4], 'person_home_ownership_OTHER':X_test[5],
       'person_home_ownership_OWN':X_test[6], 'person_home_ownership_RENT':X_test[7],
       'loan_intent_DEBTCONSOLIDATION':X_test[8], 'loan_intent_EDUCATION':X_test[9],
       'loan_intent_HOMEIMPROVEMENT':X_test[10], 'loan_intent_MEDICAL':X_test[11],
       'loan_intent_PERSONAL':X_test[12], 'loan_intent_VENTURE':X_test[13], 'loan_grade_A':X_test[14],
       'loan_grade_B':X_test[15], 'loan_grade_C':X_test[16], 'loan_grade_D':X_test[17], 'loan_grade_E':X_test[18],
       'loan_grade_F':X_test[19], 'loan_grade_G':X_test[20], 'cb_person_default_on_file_Y':X_test[21],
       'log_person_inc':X_test[22], 'log_loan_amnt':X_test[23]},index=[0])
    print(X_test)
    #fv = xgb.DMatrix([X_test])
    Y_pred_proba=mod.predict_proba(df2)
    if (Y_pred_proba[0,1] >0.15):
        loan_status=1
    else: loan_status=0
    return ({"proba":str(Y_pred_proba[0,1]),"loan_status":str(loan_status)})


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
        # emp_id=app_data["emp_id"],
        dof=app_data["dof"],
        status=app_data["status"],
        grade=app_data["grade"],
        annual_income=app_data["annual_income"],
        loan_amnt=app_data["loan_amnt"],
        home_ownership=app_data["home_ownership"],
        loan_intent=app_data["loan_intent"],
        # loan_status=app_data["loan_status"],
        mail_status=app_data["mail_status"],
        loan_term=app_data["loan_term"]
        )
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