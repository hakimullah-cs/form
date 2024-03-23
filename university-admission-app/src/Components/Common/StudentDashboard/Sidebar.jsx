import { Link } from "react-router-dom";
import {AiOutlineHome,AiOutlineForm,AiOutlineOrderedList} from 'react-icons/ai'
import {SiHelpscout} from 'react-icons/si'
import {FaNewspaper} from 'react-icons/fa'

const Sidebar = () => {
  
    const menuLinks= [
      { "id": 1, "linktext": "Dashboard", "path":"/StudentDashboard",icon:<AiOutlineHome/> },
      { "id": 2, "linktext": "Apply Form", "path":"/StudentDashboard/ApplyForm", icon:<AiOutlineForm/> },
      { "id": 3, "linktext": "FaQs & Help", "path":"/StudentDashboard/Faqs", icon:<SiHelpscout/> },
      { "id": 4, "linktext": "MeritList", "path":"/StudentDashboard/MeritList", icon:<AiOutlineOrderedList/> },
      { "id": 5, "linktext": "Interview", "path":"/StudentDashboard/InterViews", icon:<FaNewspaper/> },
    ];
  return (
    <div className='md:w-[220px] w-[auto] bg-[#1B4E69] text-white py-3 md:px-0 px-2 fixed h-screen'>
      <div className="logo mb-[3rem] ">
        <h3 className="text-[#EAC505] text-xl font-bold text-center">AD<span className="text-white md:inline hidden">MISSION PORTAL</span></h3>
      </div>
      <ul className="mt-5">
        {
          menuLinks.map((menu)=>{
            return (
              <>
                <li className="px-2 py-1 rounded-sm mb-5 md:hover:ml-2 hover:text-[#EAC505] duration-300" key={menu.id}>
          <Link to={menu.path} className="flex items-center gap-2 text-xl font-semibold">
            <span className="text-2xl">{menu.icon}</span>
            <span className="md:block hidden">{menu.linktext}</span>
          </Link>
        </li>
              </>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Sidebar