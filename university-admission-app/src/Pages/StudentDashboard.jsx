import { Outlet } from 'react-router-dom';
import Header from '../Components/Common/StudentDashboard/Header';
import Sidebar from '../Components/Common/StudentDashboard/Sidebar';

const StudentDashboard = () => {
  return (
    <div className='w-full  flex'>
       <Sidebar/>
       <div className='w-full md:ml-[220px] ml-[3.5rem]'>
        <Header/>
        <Outlet/>
       </div>
    </div>
  )
}

export default StudentDashboard