import React, { useContext, useDebugValue, useEffect, useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import stylisRTL from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { contextfunction } from "../context/context";
import { useParams } from "react-router-dom";

export default function Resetpassword(){
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const{token} = useParams()
    const {
        resetpasswordinfo,
        resetpasswordvalue,
        resetPassword,
        setresetpasswordinfo
    } = useContext(contextfunction)
    useEffect(()=>{
        setresetpasswordinfo((perv)=>({...perv , urlToken : token}))
    },[])
    console.log(resetpasswordinfo)
    const cacheRtl = createCache({
        key: 'mui-rtl',
        stylisPlugins: [stylisRTL],
      });

      const theme = createTheme({
        direction: 'rtl',
      });

    return(<>
        <div className=" hidden lg:flex justify-center items-center h-screen text-right">
        <div dir="rtl" className="flex justify-evenly items-center border rounded-2xl h-[30vh] ">
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <div className='flex flex-col items-center justify-between  bg-blue-500 py-10 duration-500  h-full rounded-r-2xl w-[20vw]' >
                        <p className="text-2xl font-semibold text-white">خوش امدید</p>
                        <p className="text-lg mx-5 text-center text-white">لطفا  برای ایمیل خود را  وارد کنید </p>
                        <div className="w-full flex flex-col items-center gap-3">
                            <Button color="success" onClick={()=>{window.location.replace('/')}} sx={{fontWeight :"600" , fontSize : "14px", width : "80%"}} variant="contained"> بازگشت </Button>
                        </div>
                    </div>
                    <Box>
                        <div  className="flex flex-col gap-10 p-5 w-[20vw]">
                            <FormControl  variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">رمز *</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={resetpasswordinfo.password}
                                    onChange={(e)=>{resetpasswordvalue(e,"password")}}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label={
                                            showPassword ? 'hide the password' : 'display the password'
                                        }
                                        onClick={handleClickShowPassword}

                                        >
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                                </FormControl>
                            <FormControl  variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">تکرار رمز *</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={resetpasswordinfo.confrimpass}
                                    onChange={(e)=>{resetpasswordvalue(e,"confrimpass")}}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label={
                                            showPassword ? 'hide the password' : 'display the password'
                                        }
                                        onClick={handleClickShowPassword}

                                        >
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <Button onClick={resetPassword} sx={{fontWeight :"600"}} variant="contained">تایید</Button>
                        </div>
                    </Box>
                </ThemeProvider>
            </CacheProvider>
        </div>
    </div>

   {/*  -------------------------responsive---------------------   */}

    <div className="flex lg:hidden justify-center items-center h-screen text-right">
        <div dir="rtl" className="flex justify-evenly items-center border rounded-2xl  ">
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <Box>
                        <div  className="flex flex-col gap-10 p-5 ">
                            <p className="text-xl">رمز جدید خود را وارد کنید</p>
                            <FormControl  variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">رمز *</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={resetpasswordinfo.password}
                                    onChange={(e)=>{resetpasswordvalue(e,"password")}}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label={
                                            showPassword ? 'hide the password' : 'display the password'
                                        }
                                        onClick={handleClickShowPassword}

                                        >
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                                </FormControl>
                            <FormControl  variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">تکرار رمز *</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={resetpasswordinfo.confrimpass}
                                    onChange={(e)=>{resetpasswordvalue(e,"confrimpass")}}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label={
                                            showPassword ? 'hide the password' : 'display the password'
                                        }
                                        onClick={handleClickShowPassword}

                                        >
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <Button onClick={resetPassword} sx={{fontWeight :"600"}} variant="contained">تایید</Button>
                        </div>
                    </Box>
                </ThemeProvider>
            </CacheProvider>
        </div>
    </div>
    </>)
}