import {Link} from 'react-router-dom';
import {AiFillLinkedin,AiOutlineTwitter,AiFillFacebook} from 'react-icons/ai';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
  });
  const handleSubmit = (values) => {
    console.log('Form data:', values);
  };
  return (
    <>
    <div className='bg-[#eee] w-full min-h-[100vh] grid place-items-center p-3'>
      <div className='md:max-w-[800px] sm:max-w-[400px] w-full border  m-auto bg-[#eee] flex justify-center md:flex-nowrap flex-wrap card-shadow rounded-md overflow-hidden'>
        <div className='md:w-[350px] sm:w-[400px] w-full md:h-[400px] h-[300px] bg-[#1B4E69]  text-white text-center flex flex-col items-center justify-center relative'>
          <div className="text">
                <p className='text-xl font-semibold text-shadow mb-5'>Online Admission Application System</p>
                <p className='text-xl font-semibold text-shadow mb-5'>OF</p>
                <p className='text-xl font-semibold text-shadow'>Bacha Khan University Charsadda</p>
          </div>
          <div className="about absolute bottom-2 left-2 flex">
            <div className='flex gap-2'>
              <Link to={'/'} className='text-2xl'><AiFillLinkedin/></Link>
              <Link to={'/'} className='text-2xl'><AiOutlineTwitter/></Link>
              <Link to={'/'} className='text-2xl'><AiFillFacebook/></Link>
            </div>
            <Link to={'/'} className='underline font-semibold relative md:left-[9rem] sm:left-[12rem] left-[12rem]'>Hakim Ullah</Link>
          </div>
        </div>
        <div className='md:w-[450px] sm:w-[400px] w-full  bg-white flex justify-center items-center flex-col py-5'>
          <h3 className='text-[2rem] font-semibold text-[#1B4E69]'>Welcome Back!</h3>
          <p className='text-[15px] text-[#1b4E69] mt-[-10px] mb-[2rem]'>Please Enter Your SIGNIN Details Below</p>
          <Formik  initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
          <Form className='md:w-[auto] w-full p-2'>
            <div className='md:w-[330px] w-full h-[45px] mb-5'>
              <Field type='email' name='email' autoComplete='off' id='email' className='w-full h-full text-[#1B4E69]  rounded-md outline-none bg-[#eee] px-3 border-l-[6px] border-[#1B4E69]' placeholder='Email'/>
              <ErrorMessage name="email" component="div" className="error text-red-500" />
            </div>
            <div className='md:w-[330px] w-full h-[45px] mb-3'>
              <Field type='password' id='password' autoComplete='off' name='password' className='w-full h-full text-[#1B4E69]  rounded-md outline-none bg-[#eee] px-3 border-l-[6px] border-[#1B4E69]' placeholder='Password'/>
              <ErrorMessage name="password" component="div" className="error text-red-500" />
            </div>
            <div className='w-[330px] h-[45px] text-right mb-5'>
             <Link to='/Forgot' className='text-[#1B4E69] underline mb-5'>Forgot Password?</Link>
            </div>

           <button type='submit' className='border py-2 px-4 bg-[#1B4E69] text-white font-semibold rounded-md mr-5'>Sign In</button>
           <Link to={'/SignUp'} className='border py-2 px-4 bg-[#1B4E69] text-white font-semibold rounded-md mr-5'>Sign Up</Link>
          </Form>
          </Formik>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login