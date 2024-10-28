import React, { createContext, useState } from "react";

export const contextfunction = createContext(null)

export default function Context(props){
    //<---------------------- signup --------------------->//
    const[signupinfo , setsignupinfo] = useState({})
    const signupvalue = (e,field) =>{
        setsignupinfo((perv)=>({...perv , [field] : e.target.value}))
    }
    const signUp=async()=>{
        let responddata
        await fetch("http://localhost:4000/register",{
            method : "POST",
            headers :{
                Accept : "application/json",
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(signupinfo)
        }).then((res)=>res.json()).then((data)=>{responddata = data})

        if(responddata.success){
            alert("لطفا کد ارسال شده به ایمیتان را وارد کنید")
            window.location.replace('/verifiction')
        }
    }
    //<---------------------- login --------------------->//

    const[logininfo , setlogininfo] = useState({})
    const loginvalue = (e,field) =>{
        setlogininfo((perv)=>({...perv , [field] : e.target.value}))
    }
    console.log(logininfo)
    const logIn=async()=>{
        let responddata
        await fetch("http://localhost:4000/login",{
            method : "POST",
            headers :{
                Accept : "application/json",
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(logininfo)
        }).then((res)=>res.json()).then((data)=>{responddata = data ; console.log(data)})
        if(responddata.success){
            alert("خوش امدید")
        }else{
            alert(responddata.message)
        }
    }

    //<---------------------- verifiction --------------------->//

    const[verfictioninfo , setverfictioninfo] = useState({})
    const verfictionvalue = (e,field) =>{
        setverfictioninfo((perv)=>({...perv , [field] : e.target.value}))
    }
    const verfiction=async()=>{
        let responddata
        await fetch("http://localhost:4000/verifiction",{
            method : "POST",
            headers :{
                Accept : "application/json",
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(verfictioninfo)
        }).then((res)=>res.json()).then((data)=>{responddata = data ; console.log(data)})
        if(responddata.success){
            alert(responddata.message)
            window.location.replace('/')
        }else{
            alert(responddata.message)
        }
    }
    //<---------------------- forgotpassword --------------------->//

    const[forgotpasswordinfo , setforgotpasswordinfo] = useState({})
    const vforgotpasswordvalue = (e,field) =>{
        setforgotpasswordinfo((perv)=>({...perv , [field] : e.target.value}))
    }
    const forgotPassword=async()=>{
        let responddata
        await fetch("http://localhost:4000/forgotpass",{
            method : "POST",
            headers :{
                Accept : "application/json",
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(forgotpasswordinfo)
        }).then((res)=>res.json()).then((data)=>{responddata = data ; console.log(data)})
        if(responddata.success){
            alert(responddata.message)
        }else{
            alert(responddata.message)
        }
    }

    //<---------------------- resetpassword --------------------->//

    const[resetpasswordinfo , setresetpasswordinfo] = useState({})
    const resetpasswordvalue = (e,field) =>{
        setresetpasswordinfo((perv)=>({...perv , [field] : e.target.value}))
    }
    const resetPassword=async()=>{
        if(resetpasswordinfo.password === resetpasswordinfo.confrimpass){
        let responddata
        await fetch("http://localhost:4000/resetpass",{
            method : "POST",
            headers :{
                Accept : "application/json",
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(resetpasswordinfo)
        }).then((res)=>res.json()).then((data)=>{responddata = data ; console.log(data)})
        if(responddata.success){
            alert(responddata.message)
            window.location.replace('/')
        }else{
            alert(responddata.message)
        }
    }else{
        alert("رمز ها باهم مطابق نیستند")
    }
    }

    const value = { 
        signUp,
        signupvalue,
        signupinfo,
        logininfo,
        loginvalue,
        logIn,
        verfictioninfo,
        verfictionvalue,
        verfiction,
        forgotpasswordinfo,
        vforgotpasswordvalue,
        forgotPassword,
        resetpasswordinfo,
        resetpasswordvalue,
        resetPassword,
        setresetpasswordinfo
    }
    return(
        <contextfunction.Provider value={value}>
            {props.children}
        </contextfunction.Provider>
    )
}