import axios, { AxiosError, AxiosResponse } from "axios";


const uploadMulti = (json: string) =>{
  let email = window.localStorage.getItem("email");
  let token = window.localStorage.getItem("token");
  if(email == null || token == null) return;


  axios.post('http://localhost:5000/videos/multiupload', {
    token: token,
    email: email,
    json: json
  })
  .then(function (response:AxiosResponse) {
    console.log(response);
  })
  .catch(function (error:AxiosError) {
    console.log(error);
  });
}

export {uploadMulti}