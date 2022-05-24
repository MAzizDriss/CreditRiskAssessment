import mongoengine as me
from flask import jsonify


class Loan_app(me.Document):
    user_id= me.ObjectIdField(required=True)
    age=me.IntField(required=True)
    annual_income=me.LongField(required=True)
    person_emp_length=me.IntField(required=True)
    loan_amnt=me.LongField(required=True)
    home_ownership=me.StringField(required=True)
    loan_intent=me.StringField(required=True)
    lnk=me.StringField(required=True)
    loan_interest_rate=me.StringField()
    emp_id=me.ObjectIdField()
    dof=me.IntField()
    status=me.StringField()
    loan_status=me.IntField()
    mail_status=me.IntField()
    file_status=me.IntField()
    rib=me.StringField(Required=True)
