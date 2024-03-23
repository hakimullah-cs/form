import { createContext } from "react";
import { Constants } from "../Constants";
export const FormStepContext=createContext({
    step:Constants.PersonalInfo,
    setStep:()=>{},
})