import { createContext } from "react";
import {defaultFields} from '../Constants'
export const FormFieldsContext=createContext({
    fields:defaultFields,
    updateFields: () => {},
})