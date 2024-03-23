import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {InputField,Input,InputLabel,InputError,Button,Select} from '../utilities/styles'
import { useFormStateContext } from '../utilities/Hooks'
import { Constants,FIELDS, defaultFields } from '../utilities/Constants'

const AcedemivInfo = () => {
  const {fields,setStep,updateFields}= useFormStateContext();
  const {register,handleSubmit,formState:{errors}}=useForm({defaultValues:{...fields.academicinfo}})
  const FormTemplate={degree:"",rollno:"",regno:"",resultdate:"",obtMarks:"",totalMarks:"",board:""}
  const [addState,setAddState]=useState([FormTemplate])
  const onSubmit=(data)=>{
    console.log(data);
    updateFields(FIELDS.ACADEMICINFO,data);
    setStep(Constants.DocumentsInfo);
    
  }
  const onError=(errors,error)=>{
       console.log(errors);
       console.log(error);
  }
  const addForm=()=>{
    setAddState([...addState,FormTemplate]);
  }
 const goBack=()=>{
  setStep(Constants.PersonalInfo)
 }
  return (
   <>
   <h1 className="text-center text-2xl font-semibold text-[#1B4E69] mb-5">Acedemic Information</h1>
   <form onSubmit={handleSubmit(onSubmit,onError)} className='relative'>
    <Button className='absolute right-0 top-[-3rem]' type='button' onClick={addForm}>ADD</Button>

  {  addState.map((ele,ind)=>{
      return (
        <div key={ind}>
        <div className='p-2 flex justify-between lg:flex-nowrap flex-wrap'>
       <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
       <InputField className='w-full' error={errors.degree}>
              <InputLabel htmlFor="degree" children="Degree or Certificate" className='font-semibold'/>
              <Input id='degree' placeholder='E-g:Matric,Fsc' {...register("degree",{
              required:"Degree Name is Required!",minLength:3, maxLength:20, pattern: {value: /^[A-Za-z\s]+$/,message: 'Enter Only Apha+Spaces)',},})}/>
           </InputField>
           {errors.degree && (
                  <InputError children={errors.degree.message} />
                )}
       </div>
    
       <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
       <InputField className='w-full' error={errors.rollno}>
              <InputLabel htmlFor="rollno" children="Rollno" className='font-semibold'/>
              <Input id='rollno' placeholder='e-g:140759' {...register("rollno",{
              required:"Rollno is Required!", pattern: {value: /^[0-9]{6}$/, message: 'Invalid Roll No format',
              },})}/>
           </InputField>
           {errors.rollno && (
                  <InputError children={errors.rollno.message} />
                )}
       </div>
       <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
       <InputField className='w-full' error={errors.regno}>
              <InputLabel htmlFor="regno" children="Reg-No" className='font-semibold'/>
              <Input id='regno' placeholder='e-g:140759' {...register("regno",{
              required:"Reg-No is Required!", pattern: {value: /^[A-Z0-9]{7}$/,message: 'Invalid reg-no(e.g., ABC1234)',},})}/>
           </InputField>
           {errors.regno && (
                  <InputError children={errors.regno.message} />
                )}
       </div>
      </div>
    
      <div className='p-2 flex justify-between lg:flex-nowrap flex-wrap'>
       <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
       <InputField className='w-full' error={errors.resultdate}>
              <InputLabel htmlFor="resultdate" children="Result Date" className='font-semibold'/>
              <Input id='resultdate' type='date'  {...register("resultdate",{
              required:"Passing Date is Required!",minLength:3, maxLength:20,})}/>
           </InputField>
           {errors.resultdate && (
                  <InputError children={errors.resultdate.message} />
                )}
       </div>
    
       <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
       <InputField className='w-full' error={errors.obtMarks}>
              <InputLabel htmlFor="obtMarks" children="Obtain Marks" className='font-semibold'/>
              <Input id='obtMarks' placeholder='e-g:800' {...register("obtMarks",{
              required:"Total Marks is Required!", })}/>
           </InputField>
           {errors.obtMarks && (
                  <InputError children={errors.obtMarks.message} />
                )}
       </div>
       <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
       <InputField className='w-full' error={errors.totalMarks}>
              <InputLabel htmlFor="totalMarks" children="Total Marks" className='font-semibold'/>
              <Input id='totalMarks' placeholder='e-g:1200' {...register("totalMarks",{
              required:"Rollno is Required!",})}/>
           </InputField>
           {errors.totalMarks && (
                  <InputError children={errors.totalMarks.message} />
                )}
       </div>
      
      </div>
    
      <div className='p-2 flex justify-between lg:flex-nowrap flex-wrap'>
      <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
       <InputField className='w-full' error={errors.board}>
              <InputLabel htmlFor="board" children="Board or Univerty" className='font-semibold'/>
              <Select id='board' placeholder='e-g BISE Peshawar' {...register("board",{
               required: 'Board is required'})}>
                <option value="">Select</option>
                <option value="single">BISE Peshawar</option>
                <option value="married">BISE Mardan</option>
                <option value="divorced">BISE Malakand</option>
                <option value="divorced">BISE Swat</option>
                <option value="divorced">BISE Abbottabad</option>
                
              </Select>
           </InputField>
           {errors.board && (
                  <InputError children={errors.board.message} />
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

export default AcedemivInfo