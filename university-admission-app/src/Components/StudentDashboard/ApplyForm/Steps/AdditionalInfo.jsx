import {useForm} from 'react-hook-form'
import {InputField,InputLabel,InputError,Button,Select} from '../utilities/styles'
import { useFormStateContext } from '../utilities/Hooks';
import { Constants, FIELDS, defaultFields } from '../utilities/Constants';
const AdditionalInfo = () => {
  const {fields,setStep,updateFields}= useFormStateContext();
  const {register,handleSubmit,formState:{errors}}=useForm({defaultValues:{...fields.additionalinfo}})
  const onSubmit=(data)=>{
    console.log(data)
    updateFields(FIELDS.ADDITIONALINFO,data);
    setStep(Constants.ApplyInfo); 
  }
  const onError=(errors,error)=>{
       console.log(errors);
       console.log(error);
  }
  const goBack=()=>{
    setStep(Constants.DocumentsInfo);
  }
  return (
   <>
    <h1 className="text-center text-2xl font-semibold text-[#1B4E69] mb-5">Additional Information</h1>
   
    <div className='p-2 flex justify-between lg:flex-nowrap flex-wrap'>
    <div className='xl:w-[500px] lg:w-[400px] w-[340px] ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.siblings}>
          <InputLabel htmlFor="siblings" children="Have any Sibling Currently Studing at University?" className='font-semibold'/>
          <Select id='siblings' type='select' {...register("siblings",{
          required:"is Required!"})}>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
       </InputField>
       {errors.siblings && (
              <InputError children={errors.siblings.message} />
            )}
   </div>
    <div className='xl:w-[500px] lg:w-[400px] w-[340px] ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.study}>
          <InputLabel htmlFor="study" children="Have You Studied at University Before?" className='font-semibold'/>
          <Select id='study' type='select' {...register("study",{
          required:"is Required!"})}>
            <option value="">Select</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </Select>
       </InputField>
       {errors.study && (
              <InputError children={errors.study.message} />
            )}
   </div>

  </div>
    <div className='p-2 flex justify-between lg:flex-nowrap flex-wrap'>
    <div className='xl:w-[500px] lg:w-[400px] w-[340px] ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.employee}>
          <InputLabel htmlFor="employee" children="Are You Currently Employed?" className='font-semibold'/>
          <Select id='employee' type='select' {...register("employee",{
          required:"Required!"})}>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
       </InputField>
       {errors.employee && (
              <InputError children={errors.employee.message} />
            )}
   </div>
    <div className='xl:w-[500px] lg:w-[400px] w-[340px] ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.dropped}>
          <InputLabel htmlFor="dropped" children="Have You ever been dropped out from any program?" className='font-semibold'/>
          <Select id='dropped' type='select' {...register("dropped",{
          required:"Required!"})}>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
       </InputField>
       {errors.dropped && (
              <InputError children={errors.dropped.message} />
            )}
   </div>

  </div>
    <div className='p-2 flex justify-between lg:flex-nowrap flex-wrap'>
    <div className='xl:w-[500px] lg:w-[400px] w-[340px] ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.expelled}>
          <InputLabel htmlFor="expelled" children="Have you ever been expelled from any institute?" className='font-semibold'/>
          <Select id='expelled' type='select' {...register("expelled",{
          required:"Required!"})}>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
       </InputField>
       {errors.expelled && (
              <InputError children={errors.expelled.message} />
            )}
   </div>
    <div className='xl:w-[500px] lg:w-[400px] w-[340px] ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.hostel}>
          <InputLabel htmlFor="hostel" children="Will you require on campus hostel facility?" className='font-semibold'/>
          <Select id='hostel' type='select' {...register("hostel",{
          required:"Required!"})}>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
       </InputField>
       {errors.hostel && (
              <InputError children={errors.hostel.message} />
            )}
   </div>

  </div>
    <div className='p-2 flex justify-between lg:flex-nowrap flex-wrap'>
    <div className='xl:w-[500px] lg:w-[400px] w-[340px] ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.transport}>
          <InputLabel htmlFor="transport" children="Will You require University Transport?" className='font-semibold'/>
          <Select id='transport' type='select' {...register("transport",{
          required:"Required!"})}>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
       </InputField>
       {errors.transport && (
              <InputError children={errors.transport.message} />
            )}
   </div>
  

  </div>
  <Button type='button' onClick={goBack}>Back</Button>
  <Button onClick={handleSubmit(onSubmit,onError)}>Next</Button>
    
   </>
  )
}

export default AdditionalInfo