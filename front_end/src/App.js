import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Landing Pages/Home";
import BlogComponent from "./Component/Blog Component/BlogComponent";
import AddRestaura from "./Component/Vender Component/AddRestaura";
import AddRestauraForm from "./Component/Vender Component/AddRestauraForm";
import VenderSignup from "./Component/Vender Component/VenderSignup";
import VenderLogin from "./Component/Vender Component/VenderLogin";
import Portal from "./Pages/Vender Pages/Portal";
import MultiStepForm from "./Component/Chef Component/MultiStepForm";
import OrderMenu from "./Component/Home Component/OrderMenu";
import RestaurantPage from "./Component/Home Component/RestaurantPage";
// import CurrentMenus from "./Component/Vender Component/CurrentMenus";

import About from "./Pages/Landing Pages/About";
import Chef_Landing from "./Pages/Shef Pages/Chef_Landing";
import Register_Form from "./Pages/Shef Pages/Register_Form";
import CreateBlog from "./Component/Blog Component/CreateBlog";

function App() {
  sessionStorage.setItem("token", null);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/blog" element={<BlogComponent />} />
        <Route path="/vender/auth" element={<AddRestaura />} />
        <Route path="/vender/auth/signup" element={<VenderSignup />} />
        <Route path="/vender/auth/login" element={<VenderLogin/>}/>
        <Route path="/vender/auth/signup/details" element={<AddRestauraForm/>}/>
        <Route path="/vender/portal" element={<Portal/>}/>
        <Route path="/order" element={<OrderMenu/>}/>
        <Route path="/order/restaurant" element={<RestaurantPage/>}/>
        <Route path="/chef/auth" element={<Chef_Landing/>}/>
        <Route path="/chef/auth/register" element={<MultiStepForm/>}/>
      </Routes>
      {/* <CreateBlog/> */}
    </>
  );
}

export default App;