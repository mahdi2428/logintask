import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forgottenpassword from "../login/forgotpassword";
import Login from "../login/loginpage";
import Verfiction from "../login/verification";
import Context from "../context/context";
import Resetpassword from "../login/resetpass";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Welcome from "../home/welcome";

export default function Routepage() {
  const cookie = Cookies.get("jwt")
  console.log(cookie)
  const [routes , setroutes ] = useState(false)
  useEffect(()=>{
    if(cookie){
      setroutes(false)
    }else{
      setroutes(true)
    }
  },[])
  return (
<>
<BrowserRouter>
  <Context>
    {routes ? 
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgotpassword" element={<Forgottenpassword />} />
      <Route path="/verifiction" element={<Verfiction />} />
      <Route path="/resetpass/:token" element={<Resetpassword />} />
    </Routes> :
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>}
    
  </Context>  
</BrowserRouter>

</>
  );
}

