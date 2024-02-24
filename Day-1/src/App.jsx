import { Navigate,Route,Routes } from 'react-router-dom';
import { lazy } from "react"
import UserLayout from './pages/user/UserLayout';
import LazyLayout from './components/LazyLayout';
const LazyLogin =lazy(()=>import("./pages/auth/Login"))
const LazyRegister = lazy(()=>import("./pages/auth/Register"))
const LazyHome = lazy(()=>import("./components/Home"));
// const LazyLander = lazy(()=>import("./components/Lander"));
const LazyCourses = lazy(()=>import("./components/Coursesdata"));
const LazyProfile = lazy(()=>import("./components/Profile"));
const LazyColleges = lazy(()=>import("./components/Collegesdata"));
const LazyAdminform = lazy(()=>import("./components/Adminform"));







const UserRoutes = () => {
  return(
    <UserLayout>
    <Routes>
      <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
      <Route path="/courses" element={<LazyLayout component={LazyCourses}/>}/>
      <Route path="/colleges" element={<LazyLayout component={LazyColleges}/>}/>
      <Route path="/profile" element={<LazyLayout component={LazyProfile}/>}/>
    </Routes>
    </UserLayout>
  )
}
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/rovertours/login"/>}/>
      <Route path="/rovertours/Adminform" element={<LazyLayout component={LazyAdminform}/>}/>
      <Route path="/rovertours/login" element={<LazyLayout component={LazyLogin}/>}/>
      <Route path="/rovertours/register" element={<LazyLayout component={LazyRegister}/>}/>
      {/* <Route path="/rovertours/lander" element={<LazyLayout component={LazyLander}/>}/> */}

      <Route path="/rovertours/user/*" element={<UserRoutes/>}/>
    </Routes>
  );
};

export default App;