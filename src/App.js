import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forgottenpassword from "./login/forgotpassword";
import Login from "./login/loginpage";
import Verfiction from "./login/verification";
import Context from "./context/context";
import Resetpassword from "./login/resetpass";

function App() {
  return (
<>
<BrowserRouter>
  <Context>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgotpassword" element={<Forgottenpassword />} />
      <Route path="/verifiction" element={<Verfiction />} />
      <Route path="/resetpass/:token" element={<Resetpassword />} />
    </Routes>
  </Context>  
</BrowserRouter>

</>
  );
}

export default App;
