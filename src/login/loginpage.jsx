import React,{useContext, useState} from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import stylisRTL from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { contextfunction } from "../context/context";


export default function Login(){
    const {signUp,signupvalue,signupinfo,logininfo,loginvalue,logIn} = useContext(contextfunction)
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [switcher, setswitcher] = useState(false)
    const[show,setshow]=useState(false)
    const cacheRtl = createCache({
        key: 'mui-rtl',
        stylisPlugins: [stylisRTL],
      });

      const theme = createTheme({
        direction: 'rtl',
      });
    return(<>
    <div className="hidden lg:flex justify-center items-center h-screen text-right">
        <div dir="rtl" className="flex justify-evenly border rounded-2xl relative p-10 gap-14">
        <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
            <Box>
                <div  className="flex flex-col gap-6">
                    <TextField
                        label="نام *"
                        variant="standard"
                        value={signupinfo.name}
                        onChange={(e)=>{signupvalue(e,"name")}}
                    />
                    <TextField
                        label="نام خانوادگی *"
                        variant="standard"
                        value={signupinfo.lastname}
                        onChange={(e)=>{signupvalue(e,"lastname")}}
                    />
                    <TextField
                        label="ایمیل *"
                        variant="standard"
                        value={signupinfo.email}
                        onChange={(e)=>{signupvalue(e,"email")}}
                    />
                    <TextField
                        label="شماره همراه *"  
                        type="number"
                        variant="standard"
                        value={signupinfo.phoneNum}
                        onChange={(e)=>{signupvalue(e,"phoneNum")}}
                    />
                    <FormControl  variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">رمز *</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={signupinfo.password}
                            onChange={(e)=>{signupvalue(e,"password")}}
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
                    <Button onClick={signUp} sx={{fontWeight :"600"}} variant="contained">ثبت نام</Button>
                </div>
            </Box>


            <Box>
                <div className="flex flex-col gap-6 justify-center h-full">
                    <TextField
                        id="standard-helperText"
                        label="ایمیل *"
                        variant="standard"
                        value={logininfo.email}
                        onChange={(e)=>{loginvalue(e,"email")}}
                    />
                    <FormControl  variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">رمز *</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={logininfo.password}
                            onChange={(e)=>{loginvalue(e,"password")}}
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
                    <div className="text-sm flex">
                        <p>رمز خود را فراموش کرده اید ؟</p>
                        <Link to='/forgotpassword' className="text-blue-500 cursor-pointer"> اینجا کلیک کنید</Link>
                    </div>

                    <Button onClick={logIn} sx={{fontWeight :"600" , fontSize : "14px"}} variant="contained">ورود به سایت </Button>
                </div>
            </Box>
            
                <div className={switcher ?
                    `flex flex-col items-center justify-between py-10 z-30 absolute bg-blue-500  top-0 left-0 duration-500 w-[50%] h-full rounded-l-2xl transition-all` 
                    :
                    `flex flex-col items-center justify-between py-10 z-30 absolute bg-blue-500  top-0 left-[51%] duration-500 w-[50%] h-full rounded-r-2xl transition-all` }>
                    <p className="text-2xl font-semibold text-white">خوش امدید</p>
                    <p className="text-lg mx-5 text-center text-white">{switcher ? "خوش امدید لطفا برای ثبت نام در سایت اطلاعات خود را وارد کنید":"خوش امدید لطفا برای ورود به سایت ایمیل و رمز خود را وارد کنید "}</p>
                    <div className="w-full flex flex-col items-center gap-3">
                        <p className="text-gray-200"> {switcher ? "اگر اکانت دارید این دکمه را بزنید" : "اگر هنوز ثبت نام نکرده ای این دکمه را بزنید"}</p>
                        <Button color="success" onClick={()=>{setswitcher(!switcher)}} sx={{fontWeight :"600" , fontSize : "14px", width : "80%"}} variant="contained"> {switcher ? "ورود به سایت" : "ثبت نام"}</Button>
                    </div>
                </div>
                </ThemeProvider>
                </CacheProvider>
        </div>
    </div>

    {/* <-------------------------responsive-----------------------> */}

    <div className="flex lg:hidden justify-center items-center h-screen text-right mx-2">
        <div dir="rtl" className="flex justify-evenly border rounded-2xl relative p-10 gap-14">
        <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
            {show ? <Box>
                <div  className="flex flex-col gap-6">
                    <TextField
                        label="نام *"
                        variant="standard"
                        value={signupinfo.name}
                        onChange={(e)=>{signupvalue(e,"name")}}
                    />
                    <TextField
                        label="نام خانوادگی *"
                        variant="standard"
                        value={signupinfo.lastname}
                        onChange={(e)=>{signupvalue(e,"lastname")}}
                    />
                    <TextField
                        label="ایمیل *"
                        variant="standard"
                        value={signupinfo.email}
                        onChange={(e)=>{signupvalue(e,"email")}}
                    />
                    <TextField
                        label="شماره همراه *"  
                        type="number"
                        variant="standard"
                        value={signupinfo.phoneNum}
                        onChange={(e)=>{signupvalue(e,"phoneNum")}}
                    />
                    <FormControl  variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">رمز *</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={signupinfo.password}
                            onChange={(e)=>{signupvalue(e,"password")}}
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
                    <div className="text-sm flex">
                        <p>اگر اکانت دارید <span onClick={()=>setshow(false)} className="text-blue-400 corsur-pointer">کلیک کنید</span></p>
                    </div>
                    <Button onClick={signUp} sx={{fontWeight :"600"}} variant="contained">ثبت نام</Button>
                </div>
            </Box>

            :

            <Box>
                <div className="flex flex-col gap-6 justify-center h-full">
                    <TextField
                        id="standard-helperText"
                        label="ایمیل *"
                        variant="standard"
                        value={logininfo.email}
                        onChange={(e)=>{loginvalue(e,"email")}}
                    />
                    <FormControl  variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">رمز *</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={logininfo.password}
                            onChange={(e)=>{loginvalue(e,"password")}}
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
                    <div className="text-sm flex">
                        <p>رمز خود را فراموش کرده اید ؟</p>
                        <Link to='/forgotpassword' className="text-blue-500 cursor-pointer"> اینجا کلیک کنید</Link>
                    </div>
                    <div className="text-sm flex">
                        <p>اگر هنوز ثبت نام نکرده اید <span onClick={()=>setshow(true)} className="text-blue-400 corsur-pointer">کلیک کنید</span></p>
                    </div>
                    <Button onClick={logIn} sx={{fontWeight :"600" , fontSize : "14px"}} variant="contained">ورود به سایت </Button>
                </div>
            </Box>}
                </ThemeProvider>
                </CacheProvider>
        </div>
    </div>
    </>)
}