import { Button } from "../utilities/styles";
import { useFormStateContext } from "../utilities/Hooks"
import { Constants } from "../utilities/Constants";

const Submit = () => {
  const {setStep}=useFormStateContext();
  const goBack=()=>{
    setStep(Constants.BankSlipInfo)
   }
  return (
    <>
    <div className="p-5 w-full grid place-items-center mt-[5rem]">
     <h2 className="text-2xl font-bold mb-5">Submission Successful</h2>
     <h4 className="text-xl font-semibold">Thank You for Submitting Your Application</h4>
    </div>
    <Button type="button" onClick={goBack}>Back</Button>
    </>
  )
}

export default Submit