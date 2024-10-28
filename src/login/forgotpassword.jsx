import React, { useContext, useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import stylisRTL from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { contextfunction } from "../context/context";
import { useParams } from "react-router-dom";

export default function Forgottenpassword(){
    
    const {
        forgotpasswordinfo,
        vforgotpasswordvalue,
        forgotPassword
    } = useContext(contextfunction)

    const cacheRtl = createCache({
        key: 'mui-rtl',
        stylisPlugins: [stylisRTL],
      });

      const theme = createTheme({
        direction: 'rtl',
      });

    return(<>
        <div className="hidden lg:flex justify-center items-center h-screen text-right">
        <div dir="rtl" className="flex justify-evenly items-center border rounded-2xl h-[30vh] ">
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <div className='flex flex-col items-center justify-between  bg-blue-500 py-10 duration-500  h-full rounded-r-2xl xl:w-[15vw]' >
                        <p className="text-2xl font-semibold text-white">خوش امدید</p>
                        <p className="text-lg mx-5 text-center text-white">لطفا  برای  تغییر رمز ایمیل خود را  وارد کنید </p>
                        <div className="w-full flex flex-col items-center gap-3">
                            <Button color="success" onClick={()=>{window.location.replace('/')}} sx={{fontWeight :"600" , fontSize : "14px", width : "80%"}} variant="contained"> بازگشت </Button>
                        </div>
                    </div>
                    <Box>
                        <div  className="flex flex-col gap-10 p-5 xl:w-[15vw]">
                            <TextField
                                label="ایمیل *"
                                variant="standard"
                                value={forgotpasswordinfo.email}
                                onChange={(e)=>{vforgotpasswordvalue(e,"email")}}
                            />
                            <Button onClick={forgotPassword} sx={{fontWeight :"600"}} variant="contained">تایید</Button>
                        </div>
                    </Box>
                </ThemeProvider>
            </CacheProvider>
        </div>
    </div>

   {/*  -------------------------responsive---------------------   */}

    <div className="flex lg:hidden justify-center items-center h-screen text-right">
        <div dir="rtl" className="flex justify-evenly items-center border rounded-2xl h-[30vh] ">
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <Box>
                        <div  className="flex flex-col gap-10 p-5 ">
                            <p className="text-xl">لطفا برای  تغییر رمز ایمیل خود را  وارد کنید  </p>
                            <TextField
                                label="ایمیل *"
                                variant="standard"
                                value={forgotpasswordinfo.email}
                                onChange={(e)=>{vforgotpasswordvalue(e,"email")}}
                            />
                            <Button onClick={forgotPassword} sx={{fontWeight :"600"}} variant="contained">تایید</Button>
                        </div>
                    </Box>
                </ThemeProvider>
            </CacheProvider>
        </div>
    </div>
    </>)
}