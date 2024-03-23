import Profile from "./Profile"

const Header = () => {
  return (
    <div className='px-3 bg-[#fff] h-[4rem] flex justify-between items-center opacity-100 z-50 shadow-sm'>
     <div className="p-2">
      <h4 className="text-xl font-semibold text-[#1B4E69]">Hello, <span>Junaid!</span></h4>
     </div>
     <Profile/>
    </div>
  )
}

export default Header