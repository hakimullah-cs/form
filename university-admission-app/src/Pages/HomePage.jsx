import {Link} from 'react-router-dom';
import {AiFillStar} from 'react-icons/ai';

const Home = () => {
  return (
    <>
    <header className="header w-full h-[60px]  bg-[#1B4E69] grid place-items-center">
        <nav className="text-white text-xl font-semibold text-center whitespace-nowrap">Welcome to Online Admission Application <span className="md:inline hidden">System of Bacha Khan University Charsadda</span></nav>
    </header>

    <main className="mt-5 mb-5">
     <div className='max-w-[1140px] w-full m-auto p-2'>
      <h3 className="text-[#1B4E69] font-bold mb-1">How to Apply?</h3>
      <p className="text-[15px] ml-3 mb-2 font-semibold">Follow the following steps to apply for online registration in Bacha Khan University Charsadda:</p>
      <ol className="ml-5">
        <li className="text-[15px]  text-[#212528] mb-2">1. Online registration for admission in Bacha Khan University Charsadda for the year 2023 is now open</li>
        <li className="text-[15px]  text-[#212528] mb-2">2. All such candidates waiting for their board results shall fill their ONLINE ADMISSION, leaving the Marks option blank which can be updated after the Board (BISEP) Results are announced</li>
        <li className="text-[15px]  text-[#212528] mb-2">3. Download the online admission fee challan from (https://staging.bkuc.edu.pk/) deposit Rs.800/- in any HBL branch</li>
        <li className="text-[15px]  text-[#212528] mb-2">4. Upload the scanned copy OR clear image of Bank Challan (Paid Challan) of Rs.400/- .The final   merit list will be available online shortly after BISEP declares the result</li>
        <li className="text-[15px]  text-[#212528] mb-2">5. College admissions will be subject to availability of seats</li>
        <li className="text-[15px]  text-[#212528] mb-2">6. For any guidance or assistance contact the admission office on 091-5275154, 0332-4645345 during working hours. (Monday to Friday)</li>
      </ol>
     </div>

     <div className="max-w-[1080px] w-full m-auto border border-[#1B4E69] p-4">
      <h3 className="text-[#1B4E69] text-xl font-bold mb-3">Admissions Open Now!</h3>
      <div className="w-[393px] p-1 bg-[#D9D9D9] rounded-md text-[15px] mb-5">For Online Apply & Guidelines Click on the below Links</div>
      <div className='flex items-center gap-2 mb-3'><AiFillStar className='text-yellow-600 text-2xl'/> <Link to={'/'} className='text-[#1B4E69] font-semibold underline'>View the advertisment of all Admissions</Link></div>
      <div className='flex items-center gap-2'><AiFillStar className='text-yellow-600 text-2xl'/> <Link to={'/SignUp'} className='text-[#1B4E69] font-semibold underline'>For Apply First You Signin in the Application</Link></div>
     </div>

    </main>
    <footer className='w-full h-[50px] bg-[#1B4E69] grid place-items-center'>
           <p className='text-white text-xl font-semibold'>Designed & Developed by <Link to={'/'} className='text-yellow-600 underline'>Hakim Ullah</Link></p>
    </footer>
    </>
  )
}

export default Home