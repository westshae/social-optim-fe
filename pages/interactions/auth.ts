import axios, {AxiosError} from "axios";
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
      


    }
  }catch(error){
    console.error(error);
  }
}

export {login}