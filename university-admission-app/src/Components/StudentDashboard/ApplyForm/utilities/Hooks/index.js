import { useContext } from "react";
import { FormStepContext } from "../contexts/FormStepContext";
import { FormFieldsContext } from "../contexts/FormFieldContext";

export const useFormStateContext=()=>({
    ...useContext(FormStepContext),
    ...useContext(FormFieldsContext)
})