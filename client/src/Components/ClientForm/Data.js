
export  function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}
export const loan_intent= {
    'PERSONAL': 'Personal',
    'EDUCATION': 'Education',
    'MEDICAL': 'Medical',
    'VENTURE':'Venture',
    'HOMEIMPROVEMENT':'Home improvement',
    'DEBTCONSILIDATION':'Debt Consilidation'
}

export const home_ownership={
    'OWN':'own',
    'RENT':'Rent',
    'MORTGAGE':'Mortgage',
    'OTHER':'other'
}
var ages=Object()
for (var i=18;i<90;i++){
    ages[i]=i
}
export var ages