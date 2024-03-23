export const Constants={
    PersonalInfo:"PerosnalInfo_Step",
    Academic:"Academic_Step",
    DocumentsInfo:"DocumentsInfo_Step",
    AdditionalInfo:"AdditionalInfo_Step",
    ApplyInfo:"ApplyInfo_Step",
    BankSlipInfo:"BankSlipInfo_Step",
    Submit:"Submit_Step",
}

export const FIELDS = {
    PERSONALINFO: 'personalinfo',
    ACADEMICINFO: 'academicinfo',
    DOCUMENTS: 'documents',
    ADDITIONALINFO: 'additionalinfo',
    APPLYINFO: 'applyinfo',
    BANKSLIP: 'bankslip',
  };

  export const defaultFields = {
    personalinfo: {
        fullname:'',
        address:'',
        fname:'',
        profile:'',
        district:'',
        domicile:'',
        gender:'',
        email:'',
        mobile:'',
        ermobile:'',
        DOB:'',
        martial:'',
        cnic:'',
        nationality:'',
        bloodgroup:'',
        religion:'',
    },
    academicinfo:{
        degree:'',
        rollno:'',
        regno:'',
        resultdate:'',
        board:'',
        obtMarks:'',
        totalMarks:'',
    },
    documents:{
        criteria:'',
    },
    additionalinfo:{
        siblings:'',
        study:'',
        employee:'',
        dropped:'',
        expelled:'',
        hostel:'',
        transport:'',
    },
    applyinfo:{
        campus:'',
        displine:'',
        department:'',
        category:'',
        programme:'',
    },
    bankslip:{
        feeupload:'',
    }
  };