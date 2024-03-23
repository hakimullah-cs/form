import { useState } from "react"
import { FormStepContext } from "./utilities/contexts/FormStepContext"
import { Constants, defaultFields} from "./utilities/Constants"
import { getCurrentForm } from "./utilities/Helpers"
import { FormFieldsContext } from "./utilities/contexts/FormFieldContext"





const ApplyForm = () => {
  const [step,setStep]=useState(Constants.DocumentsInfo);
  const [fields,setFields]=useState(defaultFields)

  const updateFields = (field, value) => {
    const newFields = { ...fields };
    newFields[field] = value;
    setFields(newFields);
  };

  return (
    <>
    <div className="px-2 py-3">
      <h3 className="text-[#1B4E69] font-semibold text-2xl mb-5">Online Admission Application</h3>
      <div className="sm:px-2 pb-3 border-[1px] border-[#1B4E69]  rounded over">
        <FormStepContext.Provider value={{step,setStep}}>
        
         <FormFieldsContext.Provider value={{fields,updateFields}}>
         <div>{getCurrentForm(step)}</div>
         </FormFieldsContext.Provider>
        </FormStepContext.Provider>
      </div>
    </div>
    </>
  )
}

export default ApplyForm



/**  
 * 
 * form
 * step 1
 * step 2 onClick
 * step 3
 * step 4 onSubmit
 * end form
  */