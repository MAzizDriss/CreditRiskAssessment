import mongoengine as me
from flask import jsonify


class Loan_app(me.Document):
    user_id= me.ObjectIdField(required=True)
    age=me.IntField(required=True)
    annual_income=me.IntField(required=True)
    person_emp_length=me.IntField(required=True)
    loan_amnt=me.IntField(required=True)
    home_ownership=me.StringField(required=True)
    loan_intent=me.StringField(required=True)
    lnk=me.StringField(required=True)
    loan_interest_rate=me.StringField()
     # emp_id=me.ObjectIdField()
    dof=me.StringField()
    status=me.StringField()
    grade=me.StringField()
    loan_status=me.IntField()
    mail_status=me.StringField()
    file_status=me.IntField()
    rib=me.StringField(Required=True)
    loan_term=me.IntField()
