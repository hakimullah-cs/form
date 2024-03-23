import {useState} from 'react'
import {AiFillCaretDown} from 'react-icons/ai';
import img from '../../../assets/Profile.jpeg';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [show,setShow]=useState(false);
  const showDiv=()=>{
    setShow(!show);
  }
  return (
    <div className='flex items-center gap-2'>
        <div className="w-[3.5rem] h-[3.5rem] rounded-full overflow-hidden border-[2px] border-[#1B4E69]">
            <img src={img} alt='profile-pic' className='w-full h-full'/>
        </div>
        <AiFillCaretDown onClick={showDiv}/>
        <div className={`w-[8rem] h-[5rem] flex flex-col items-center  shadow-md rounded-sm absolute top-[4rem] right-5 ${show===true?'block':'hidden'}`}>
          <Link to={'/'} className='bg-[#e2d2d2] w-full text-center py-2 text-[#1B4E69] font-semibold'>Profile</Link>
          <Link to={'/'} className='bg-[#e2d2d2] w-full text-center py-2 text-[#1B4E69] font-semibold'>LogOut</Link>
        </div>

    </div>
  )
}

export default Profile