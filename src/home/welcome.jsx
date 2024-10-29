import React from "react";
import Button from '@mui/material/Button';
import Cookies from "js-cookie";


export default function Welcome(){
    return(<>
    <div className="w-screen h-screen flex items-center justify-center">
        <div className="flex flex-col gap-10 text-6xl">
           <p className=" font-bold">خوش امدید</p>
            <Button onClick={()=>{Cookies.remove("jwt");window.location.reload()}} sx={{ fontWeight :"600"}} variant="contained">خروج</Button> 
        </div>
    </div>
        </>)
}