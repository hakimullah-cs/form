import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {InputField,InputLabel,InputError,Button,Select} from '../utilities/styles'
import { useFormStateContext } from '../utilities/Hooks'
import { Constants, FIELDS, defaultFields } from '../utilities/Constants'

const ApplyInfo = () => {
  const {fields,setStep,updateFields}= useFormStateContext();
  const {register,handleSubmit,formState:{errors}}=useForm({defaultValues:{...fields.applyinfo}})
  const FormTemplate={degree:"",rollno:"",regno:"",resultdate:"",obtMarks:"",totalMarks:"",board:""}
  const [addState,setAddState]=useState([FormTemplate])
  const onSubmit=(data)=>{
    console.log(data)
    updateFields(FIELDS.APPLYINFO,data);
    setStep(Constants.BankSlipInfo);
    
  }
  const onError=(errors,error)=>{
       console.log(errors);
       console.log(error);
  }
  const addForm=()=>{
    setAddState([...addState,FormTemplate]);
  }
  const goBack=()=>{
    setStep(Constants.AdditionalInfo)
   }
  return (
   <>
   <h1 className="text-center text-2xl font-semibold text-[#1B4E69] mb-5">Apply Information</h1>
   <form onSubmit={handleSubmit(onSubmit,onError)} className='relative'>
    <Button className='absolute right-0 top-[-3rem]' type='button' onClick={addForm}>ADD</Button>

  {  addState.map((ind)=>{
      return (
        <div key={ind} className='pt-5'>
      <div className='p-2 flex justify-start lg:gap-[3rem] lg:flex-nowrap flex-wrap'>
      <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
       <InputField className='w-full' error={errors.campus}>
              <InputLabel htmlFor="board" children="Select Campus" className='font-semibold'/>
              <Select id='campus' placeholder='e-g Main Campus' {...register("campus",{
               required: 'Campus is required'})}>
                <option value="">Select</option>
                <option value="main campus">Main Campus</option> 
              </Select>
           </InputField>
           {errors.campus && (
                  <InputError children={errors.campus.message} />
                )}
       </div>
      <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
       <InputField className='w-full' error={errors.displine}>
              <InputLabel htmlFor="displine" children="Select Displine" className='font-semibold'/>
              <Select id='displine' placeholder='e-g BS,MS,PHD,MSC' {...register("displine",{
               required: 'Displine is required'})}>
                <option value="">Select</option>
                <option value="bs">BS</option>
                <option value="msc">Msc</option>
                <option value="ms">MS</option>
                <option value="phd">PHD</option>
              </Select>
           </InputField>
           {errors.displine && (
                  <InputError children={errors.displine.message} />
                )}
       </div>
      <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
       <InputField className='w-full' error={errors.department}>
              <InputLabel htmlFor="department" children="Select Department" className='font-semibold'/>
              <Select id='department' placeholder='e-g Computer Sc etc' {...register("department",{
               required: 'Department is required'})}>
                <option value="">Select</option>
                <option value="computer science">Computer Science</option>
                <option value="physics">Physics</option>
                <option value="pharmacy">Pharmacy</option>
                <option value="mathematics">Mathematics</option>
              </Select>
           </InputField>
           {errors.department && (
                  <InputError children={errors.department.message} />
                )}
       </div>
      </div>
      <div className='p-2 flex justify-start lg:gap-[3rem] lg:flex-nowrap flex-wrap'>
      
      <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
       <InputField className='w-full' error={errors.programme}>
              <InputLabel htmlFor="programme" children="Select Displine" className='font-semibold'/>
              <Select id='programme' placeholder='e-g BS,MS,PHD,MSC' {...register("programme",{
               required: 'Displine is required'})}>
                <option value="">Select</option>
                <option value="BSCS">BSCS</option>
                <option value="BSAI">BSAI</option>
                <option value="BSDS">BSDS</option>
              </Select>
           </InputField>
           {errors.programme && (
                  <InputError children={errors.programme.message} />
                )}
       </div>
       <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
       <InputField className='w-full' error={errors.category}>
              <InputLabel htmlFor="category" children="Select Category" className='font-semibold'/>
              <Select id='category' placeholder='e-g Open,Self' {...register("category",{
               required: 'Category is required'})}>
                <option value="">Select</option>
                <option value="open">Open</option> 
                <option value="Sport">Sport</option> 
                <option value="Self">Self</option> 
                <option value="fata">Fata</option> 
                <option value="disable">Disable</option> 
                <option value="hafiz">Hafiz</option> 
              </Select>
           </InputField>
           {errors.category && (
                  <InputError children={errors.category.message} />
                )}
       </div>
      
      </div>
    
    
        </div>
      )
    })}
    <Button type='button' onClick={goBack}>Back</Button>
    <Button>Next</Button>
   </form>

   </>
  )
}

export default ApplyInfo