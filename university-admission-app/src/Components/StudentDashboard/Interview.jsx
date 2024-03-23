import {useForm} from 'react-hook-form';
import {InputField,InputLabel,InputError,Button,Select} from '../StudentDashboard/ApplyForm/utilities/styles'

const Interview = () => {
  const {register,handleSubmit,formState:{errors}}=useForm()
  const onSubmit=(data)=>{
    console.log(data)
  }
  const onError=(errors,error)=>{
    console.log(errors);
    console.log(error);
}
  return (
    <>
    <h2 className="text-center text-[#1B4E69] text-xl font-semibold mb-5">Interview Checkpoints</h2>
     <form onSubmit={handleSubmit(onSubmit,onError)}>
     <div className='p-2 flex justify-between lg:flex-nowrap flex-wrap mb-5'>
     <div className='xl:w-[500px] lg:w-[400px] w-[340px] ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.siblings}>
          <InputLabel htmlFor="interviewdata" children="Select Date?" className='font-semibold'/>
          <Select id='interviewdata' type='select' {...register("interviewdata",{
          required:"is Required!"})}>
            <option value="">Select</option>
            <option value="15-11-2023">15-11-2023</option>
            <option value="16-11-2023">15-11-2023</option>
            <option value="17-11-2023">17-11-2023</option>
            <option value="18-11-2023">18-11-2023</option>
          </Select>
       </InputField>
       {errors.interviewdata && (
              <InputError children={errors.interviewdata.message} />
            )}
   </div>
     <div className='xl:w-[500px] lg:w-[400px] w-[340px] ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.siblings}>
          <InputLabel htmlFor="interviewtime" children="Select Time?" className='font-semibold'/>
          <Select id='interviewtime' type='select' {...register("interviewtime",{
          required:"is Required!"})}>
            <option value="">Select</option>
            <option value="9:00AM - 9:10AM">9:00AM - 9:10AM</option>
            <option value="9:10AM - 9:20AM">9:10AM - 9:20AM</option>
            <option value="9:20AM - 9:30AM">9:20AM - 9:30AM</option>
          </Select>
       </InputField>
       {errors.interviewtime && (
              <InputError children={errors.interviewtime.message} />
            )}
   </div>
     </div>
     <Button>Process</Button>
     </form>
    </>
  )
}

export default Interview