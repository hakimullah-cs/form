import {useForm} from 'react-hook-form'
import {InputField,Input,InputLabel,InputError,Button} from '../utilities/styles'
import PDF from '../../../../../public/PDF.pdf';
import { useFormStateContext } from '../utilities/Hooks';
import { Constants, FIELDS} from '../utilities/Constants';

const BankSlip = () => {
  const {fields,setStep,updateFields}= useFormStateContext();
  const {register,handleSubmit,formState:{errors}}=useForm({defaultValues:{...fields.bankslip}})
  const onSubmit=(data)=>{
    console.log(data)
    updateFields(FIELDS.BANKSLIP,data);
    setStep(Constants.Submit)
    
  }
  const onError=(errors,error)=>{
       console.log(errors);
       console.log(error);
  }
  const goBack=()=>{
    setStep(Constants.ApplyInfo)
   }
  return (
    <>
     <h1 className="text-center text-2xl font-semibold text-[#1B4E69] mb-5">Bank Slip</h1>
     <form onSubmit={handleSubmit(onSubmit,onError)}>
     <div className='p-2 flex justify-center lg:gap-[3rem] lg:flex-nowrap flex-wrap mb-[5rem]'>
     <div className='xl:w-[500px] h-[50px] lg:w-[350px] w-full ld:mb-0 mb-3'>
      <a href={PDF} target='_blank' download className='block  text-center bg-[#1B4E69] text-white font-semibold w-full h-full py-2 rounded'>Application Fee Vocher</a>
     </div>

     <div className='xl:w-[500px] lg:w-[350px] w-full ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.feeupload}>
          <InputLabel htmlFor="feeupload" children="Upload File" className='font-semibold'/>
          <Input id='feeupload' type='file' {...register("feeupload",{required:"Full Name is Required!"})}/>
       </InputField>
       {errors.feeupload && (
              <InputError children={errors.feeupload.message} />
            )}
   </div>
     </div>
     <div className='ml-5'>
     <Button type='button' onClick={goBack}>Back</Button>
     <Button>Next</Button>
     </div>
     </form>
    </>
  )
}

export default BankSlip