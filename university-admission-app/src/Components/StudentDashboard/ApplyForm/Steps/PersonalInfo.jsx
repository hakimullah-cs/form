import {useForm} from 'react-hook-form'
import {InputField,Input,InputLabel,InputError,Button,Select} from '../utilities/styles'
import { useFormStateContext } from '../utilities/Hooks'
import { Constants, FIELDS} from '../utilities/Constants'



const PerosnalInfo = () => {
  const {fields,setStep,updateFields}=useFormStateContext()
  const {register,handleSubmit,formState:{errors}}=useForm({defaultValues:{...fields.personalinfo}})
  const onSubmit=(data)=>{
    console.log(data);
    updateFields(FIELDS.PERSONALINFO,data)
    setStep(Constants.Academic);
    
  }
  const onError=(errors,error)=>{
       console.log(errors);
       console.log(error);
  }
 
 
  console.log(useForm())
  return (
    <>
    <h1 className="text-center text-2xl font-semibold text-[#1B4E69] mb-5">Personal Information</h1>
     <form onSubmit={handleSubmit(onSubmit,onError)}>
    <div className='p-2 flex justify-between lg:flex-nowrap flex-wrap'>
   <div className='xl:w-[300px] lg:w-[250px] w-full lg:mb-0 mb-3'>
   <InputField className='w-full' error={errors.fullname}>
          <InputLabel htmlFor="fullname" children="Full Name" className='font-semibold'/>
          <Input id='fullname' placeholder='Hakim Ullah' {...register("fullname",{
          required:"Full Name is Required!",minLength:3, maxLength:20, pattern: {value: /^[A-Za-z\s]+$/,message: 'Enter Only Apha+Spaces)',},})}/>
       </InputField>
       {errors.fullname && (
              <InputError children={errors.fullname.message} />
            )}
   </div>

   <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.email}>
          <InputLabel htmlFor="email" children="Email" className='font-semibold'/>
          <Input id='email' type='email' placeholder='abc123@gmail.com' {...register("email",{
          required:"Email is Required!",pattern: {value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,message: 'Enter a valid email address',},})}/>
       </InputField>
       {errors.email && (
              <InputError children={errors.email.message} />
            )}
   </div>

   <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.mobile}>
          <InputLabel htmlFor="email" children="Mobile" className='font-semibold'/>
          <Input id='mobile' placeholder='03xx-xxxxxxx' maxLength={11} {...register("mobile",{
          required:"Mobile is Required!",pattern: {value: /^\d{11}$/,message: 'Enter a valid 11-digit mobile number'},})}/>
       </InputField>
       {errors.mobile && (
              <InputError children={errors.mobile.message} />
            )}
   </div>
  </div>



  <div className='p-2 flex justify-between lg:flex-nowrap flex-wrap'>
    <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.DOB}>
          <InputLabel htmlFor="DOB" children="DOB" className='font-semibold'/>
          <Input id='DOB' type='date' {...register("DOB",{
          required:"DOB is Required!",validate: (value) => {
            const currentDate = new Date();
            const inputDate = new Date(value);

            // Check if the input is a valid date and the user is at least 18 years old
            if (isNaN(inputDate) || inputDate > currentDate) {
              return 'Enter a valid date of birth';
            }

            let age = currentDate.getFullYear() - inputDate.getFullYear();

            if (currentDate.getMonth() < inputDate.getMonth() || (currentDate.getMonth() === inputDate.getMonth() && currentDate.getDate() < inputDate.getDate())) {
              age--;
            }

            if (age < 18) {
              return 'You must be at least 18 years old';
            }

            return true; // Validation passed
          },})}/>
       </InputField>
       {errors.DOB && (
              <InputError children={errors.DOB.message} />
            )}
   </div>
 
   <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.martial}>
          <InputLabel htmlFor="email" children="Martial Status" className='font-semibold'/>
          <Select id='martial' type='select' {...register("martial",{
          required:"Martial Status is Required!"})}>
            <option value="">Select</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
          </Select>
       </InputField>
       {errors.martial && (
              <InputError children={errors.martial.message} />
            )}
   </div>

   <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.cnic}>
          <InputLabel htmlFor="email" children="CNIC" className='font-semibold'/>
          <Input id='cnic' placeholder='17xxx-xxxxxxx-x' {...register("cnic",{
          required:"CNIC is Required!",pattern: {value: /^(\d{5}-\d{7}-\d{1}|\d{13})$/,message: 'Enter a valid CNIC',},})}/>
       </InputField>
       {errors.cnic && (
              <InputError children={errors.cnic.message} />
            )}
   </div>
    </div>

  
  <div className='p-2 flex justify-between lg:flex-nowrap flex-wrap'>
  <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.mobile}>
          <InputLabel htmlFor="ermobile" children="Emergency-No"  className='font-semibold'/>
          <Input id='ermobile' placeholder='03xx-xxxxxxx' maxLength="11" {...register("ermobile",{
          required:"Emergency-No is Required!",pattern: {value: /^\d{11}$/,message: 'Enter a valid 11-digit mobile number'},})}/>
       </InputField>
       {errors.ermobile && (
              <InputError children={errors.ermobile.message} />
            )}
   </div>

   <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.nationality}>
          <InputLabel htmlFor="nationality" children="Nationality" className='font-semibold'/>
          <Select id='nationality' type='select' {...register("nationality",{
           required: 'Nationality is required'})}>
            <option value="">Select</option>
            <option value="single">Pakistan</option>
            <option value="married">Afghanistan</option>
            <option value="divorced">Qatar</option>
            <option value="divorced">Turkey</option>
          </Select>
       </InputField>
       {errors.nationality && (
              <InputError children={errors.nationality.message} />
            )}
   </div>

   <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.bloodgroup}>
          <InputLabel htmlFor="bloodgroup" children="Blood Group" className='font-semibold'/>
          <Input id='bloodgroup' placeholder='e.g., A+, B-, AB+, O-'  {...register("bloodgroup",{
          required:"BloodGroup is Required!", pattern:{value: /^[A,B,AB,O][\+\-]$/,message: 'Invalid Blood Group',
          },})}/>
       </InputField>
       {errors.bloodgroup && (
              <InputError children={errors.bloodgroup.message} />
            )}
   </div>
   
  </div>

  <div className='p-2 flex justify-between lg:flex-nowrap flex-wrap'>
  <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.religion}>
          <InputLabel htmlFor="religion" children="Religion" className='font-semibold'/>
          <Input id='religion' placeholder='Religion e-g Islam' {...register("religion",{
          required:"Religion is Required!",minLength:3, maxLength:20, pattern: {value: /^[A-Za-z\s]+$/,message: 'Enter Only Apha+Spaces)',},})}/>
       </InputField>
       {errors.religion && (
              <InputError children={errors.religion.message} />
            )}
   </div>

   <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.gender}>
          <InputLabel htmlFor="gender" children="Gender" className='font-semibold'/>
          <Select id='gender' placeholder='e-g Male,Female' {...register("gender",{
           required: 'Gender is required'})}>
            <option value="">Select</option>
            <option value="single">Male</option>
            <option value="married">Female</option>
            <option value="divorced">Others</option>
            
          </Select>
       </InputField>
       {errors.gender && (
              <InputError children={errors.gender.message} />
            )}
   </div>

   <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.domicile}>
          <InputLabel htmlFor="domicile" children="Domicile" className='font-semibold'/>
          <Input id='domicile' placeholder='Peshawar,Charsadda' {...register("domicile",{
          required:"Domicile is Required!", pattern: {value: /^[A-Za-z\s]+$/,message: 'Invalid domicile format', },minLength: {value: 3,message: 'Domicile is too short',},maxLength: {value: 50,message: 'Domicile is too long',},})}/>
       </InputField>
       {errors.domicile && (
              <InputError children={errors.domicile.message} />
            )}
   </div>
  


  </div>

  <div className='p-2 flex justify-between lg:flex-nowrap flex-wrap'>
  <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.district}>
          <InputLabel htmlFor="district" children="District" className='font-semibold'/>
          <Input id='district' placeholder='Peshawar,Charsadda' {...register("district",{
          required:"District is Required!",})}/>
       </InputField>
       {errors.district && (
              <InputError children={errors.district.message} />
            )}
   </div>
   <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.fname}>
          <InputLabel htmlFor="fname" children="F/Name" className='font-semibold'/>
          <Input id='fname' placeholder='Abdul Shakoor' {...register("fname",{
          required:"F/Name is Required!",minLength:3, maxLength:20, pattern: {value: /^[A-Za-z\s]+$/,message: 'Enter Only Apha+Spaces)',},})}/>
       </InputField>
       {errors.fname && (
              <InputError children={errors.fname.message} />
            )}
   </div>
   <div className='xl:w-[300px] lg:w-[250px] w-full ld:mb-0 mb-3'>
   <InputField className='w-full' error={errors.profilepic}>
          <InputLabel htmlFor="profilepic" children="Profile Pic" className='font-semibold'/>
          <Input id='profilepic' type='file' {...register("profilepic",{
          required:"Profile Pic is Required!"})}/>
       </InputField>
       {errors.profilepic && (
              <InputError children={errors.profilepic.message} />
            )}
   </div>
  </div>

  <div className='w-full mb-5 px-2'>
  <div className='w-full'>
   <InputField className='w-full' error={errors.address}>
          <InputLabel htmlFor="address" children="Address" className='font-semibold'/>
          <Input id='address' placeholder='Enter Your Address' {...register("address",{
          required:"Address is Required!",})}/>
       </InputField>
       {errors.address && (
              <InputError children={errors.address.message} />
            )}
   </div>
  </div>



 

 
  

    
         
         <Button>Next</Button>
   
    
    
    </form>
    </>
  )
}

export default PerosnalInfo