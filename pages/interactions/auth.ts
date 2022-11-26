import axios, {AxiosError} from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";


import Router from 'next/router'

interface CheckCodeResponse {
  id:number,
  access_token:string,
}

const login = async (email:string, code?:string) => {
  let data:CheckCodeResponse;

  try{
    if(email == null) return;
    if(code == undefined){
      await axios.get("http://localhost:5000/auth/get",{
        params:{
          email:email
        }
      }).catch((e:AxiosError)=>{
        console.error(e);
      })
    }else{
      data = (await axios.get("http://localhost:5000/auth/checkcode", {
        params:{
          email:email,
          code:code,
        }
      })).data;

      await window.localStorage.setItem("token", data.access_token);
      await window.localStorage.setItem("email", email);

      Router.push("/dashboard");
    }
  }catch(error){
    console.error(error);
  }
}

const isLoggedIn = () =>{
  if (typeof window !== undefined) {
    let checkEmail = window.localStorage.getItem("email");
    let checkToken = window.localStorage.getItem("token");
    if(checkEmail == null || checkToken == null){
      return false;
    } else {
      return true;
    }
  }
}

export {login, isLoggedIn}