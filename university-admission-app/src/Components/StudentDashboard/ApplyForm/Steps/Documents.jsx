import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {InputField,Select,Input,InputLabel,InputError,Button} from '../utilities/styles'
import { useFormStateContext } from '../utilities/Hooks'
import { Constants, FIELDS, defaultFields } from '../utilities/Constants'

const Documents = () => {
  const {fields,setStep,updateFields}=useFormStateContext();
  const {register,handleSubmit,formState:{errors}}=useForm({defaultValues:{...fields.documents}});

  const [selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit=(data)=>{
    console.log(data)
    updateFields(FIELDS.DOCUMENTS,data);
    setStep(Constants.AdditionalInfo);
  }
  const onError=(errors,error)=>{
       console.log(errors);
       console.log(error);
  }
 
  const goBack=()=>{
    setStep(Constants.Academic)

   }
  return (
   <>
   <h1 className="text-center text-2xl font-semibold text-[#1B4E69] mb-5">Upload Documents</h1>
   <form onSubmit={handleSubmit(onSubmit,onError)} className='relative'>

    <div className='mb-5 lg:p-0 p-2 lg:ms-4'>
    <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.martial}>
          <InputLabel htmlFor="criteria" children="Criteria" className='font-semibold'/>
          <Select id='criteria' type='select' {...register("criteria",{
          required:"Martial Status is Required!"})} value={selectedOption} onChange={handleSelectChange}>
            <option value="">Select</option>
            <option value="bachelor">Bachelor</option>
            <option value="masters">Masters</option>
            <option value="phd">PHD</option>
          </Select>
       </InputField>
       {errors.criteria && (
              <InputError children={errors.criteria.message} />
            )}
   </div>
    </div>
    
      <div className='p-2 flex justify-center lg:gap-[3rem] lg:flex-nowrap flex-wrap mb-3'>
      <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.cnicpic}>
          <InputLabel htmlFor="cnicpic" children="Upload CNIC" className='font-semibold'/>
          <Input id='cnicpic' type='file' {...register("cnicpic",{required:"Full Name is Required!"})}/>
       </InputField>
       {errors.cnicpic && (
              <InputError children={errors.cnicpic.message} />
            )}
   </div>
      <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.domicilepic}>
          <InputLabel htmlFor="domicilepic" children="Upload Domicile" className='font-semibold'/>
          <Input id='domicilepic' type='file' {...register("domicilepic",{required:"Full Name is Required!"})}/>
       </InputField>
       {errors.domicilepic && (
              <InputError children={errors.domicilepic.message} />
            )}
   </div>
      <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.fcnicnic}>
          <InputLabel htmlFor="fcnicpic" children="Upload F/CNIC" className='font-semibold'/>
          <Input id='fcnicpic' type='file' {...register("fcnicpic",{required:"Full Name is Required!"})}/>
       </InputField>
       {errors.fcnicpic && (
              <InputError children={errors.fcnicpic.message} />
            )}
   </div>
      </div>
      <div>
      {selectedOption=='bachelor' && (
        <div>Bachelor Feilds</div>
      )}
      {selectedOption=='masters' && (
        <div>Masters Feilds</div>
      )}
      {selectedOption=='phd' && (
        <div>PHD Feilds</div>
      )}
    </div>
    <Button type='button' onClick={goBack}>Back</Button>
    <Button>Next</Button>
   </form>

   </>
  )
}

export default Documents;