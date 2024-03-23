import AcademicInfo from "../Steps/AcademicInfo"
import AdditionalInfo from "../Steps/AdditionalInfo"
import ApplyInfo from "../Steps/ApplyInfo"
import BankSlip from "../Steps/BankSlip"
import Documents from "../Steps/Documents"
import PersonalInfo from "../Steps/PersonalInfo"
import Submit from "../Steps/Submit"
import { Constants } from "./Constants"
export const getCurrentForm=(step)=>{
    switch(step){
        case Constants.PersonalInfo:
            return <PersonalInfo/>
        case Constants.Academic:
            return <AcademicInfo/>
        case Constants.DocumentsInfo:
            return <Documents/>
        case Constants.AdditionalInfo:
            return <AdditionalInfo/>
        case Constants.ApplyInfo:
            return <ApplyInfo/>
        case Constants.BankSlipInfo:
            return <BankSlip/>
        case Constants.Submit:
            return <Submit/>
        default:
            return null
    }
}