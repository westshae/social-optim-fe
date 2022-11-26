import axios, {AxiosError} from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";


import Router from 'next/router'

interface CheckCodeResponse {
  id:number,
  access_token:string,
}

interface AdminResponse {
  isAdmin:boolean,
}

const login = async (email:string, code?:string) => {
  let loginData:CheckCodeResponse;
  let adminData:AdminResponse;

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
      loginData = (await axios.get("http://localhost:5000/auth/checkcode", {
        params:{
          email:email,
          code:code,
        }
      })).data;
      adminData = (await axios.get("http://localhost:5000/auth/isUserAdmin", {
        params:{
          email:email
        }
      })).data;

      let isAdmin = (adminData.isAdmin === true ? "true" : "false");

      await window.localStorage.setItem("token", loginData.access_token);
      await window.localStorage.setItem("email", email);
      await window.localStorage.setItem("isAdmin", isAdmin);

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

const isUserAdmin = () => {
  if (typeof window !== undefined) {
    let checkAdmin = window.localStorage.getItem("isAdmin");
    if(checkAdmin){
      return (checkAdmin === "true");
    }
  }
  return false;
}

export {login, isLoggedIn, isUserAdmin}