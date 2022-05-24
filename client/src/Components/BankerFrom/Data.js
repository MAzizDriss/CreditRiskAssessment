export const loan_intent= {
    'PERSONAL': 'Personal',
    'EDUCATION': 'Education',
    'MEDICAL': 'Medical',
    'VENTURE':'Venture',
    'HOMEIMPROVEMENT':'Home improvement',
    'DEBTCONSILIDATION':'Debt Consilidation'
}

export const home_ownership={
    'OWN':'Own',
    'RENT':'Rent',
    'MORTGAGE':'Mortgage',
    'OTHER':'other'
}
export const grade ={
    'A':'A',
    'B':'B',
    'C':'C',
    'D':'D',
    'E':'E',
    'F':'F',
    'G':'G'
}
var ages=Object()
for (var i=18;i<90;i++){
    ages[i]=i
}
export var ages