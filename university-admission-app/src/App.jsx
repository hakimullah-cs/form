import Home from "./Pages/HomePage";
// import 
import SignUp from "./Components/auth/Signup";
import Login from "./Components/auth/Login";
import Forgot from "./Components/auth/Forgot";
import Dashboard from "./Components/StudentDashboard/Dashboard"
import StudentDashboard from './Pages/StudentDashboard';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Faqs from "./Components/StudentDashboard/Faqs";
import MeritList from "./Components/StudentDashboard/MeritList";
import InterView from "./Components/StudentDashboard/Interview";
import ApplyForm from "./Components/StudentDashboard/ApplyForm/ApplyForm";

function App() {


  return (
 <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/signup" element={<SignUp/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/forgot" element={<Forgot/>}/>
 
 <Route  path="/StudentDashboard" element={<StudentDashboard/>}>
     <Route index element={<Dashboard/>}/>
     <Route path="/StudentDashboard/Faqs" element={<Faqs/>}/>
     <Route path="/StudentDashboard/MeritList" element={<MeritList/>}/>
     <Route path="/StudentDashboard/InterViews" element={<InterView/>}/>
     <Route path="/StudentDashboard/ApplyForm" element={<ApplyForm/>}/>
  </Route>
</Routes>
</BrowserRouter>
 </>
  )
}

export default App
