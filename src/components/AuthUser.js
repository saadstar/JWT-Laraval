import  { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthUser = () => {
  
    const getToken = () => {
      const tokenString = sessionStorage.getItem('token');
      const userString = JSON.parse(tokenString);
      return userString;
    }
    const getUser = () => {
      const userString = sessionStorage.getItem('user');
      const user_detail = JSON.parse(userString);
      return user_detail;
    }

  
  const navigate = useNavigate();
  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());

  const saveToken = (user,token) => {
    sessionStorage.setItem('token', JSON.stringify(token));
    sessionStorage.setItem('user', JSON.stringify(user));
    setToken(token);
    setUser(user);
    navigate('/dashboard')
  }

    const http = axios.create({
        baseURL: "http://localhost:300/api",
        headers: {
            "content-type":"application/json"
        }
    })
  return     {
    setToken: saveToken,
    token,
    user,
    getToken,
      http
  }
  
}
