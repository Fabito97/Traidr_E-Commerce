import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postData } from "./api";

export const getUserIdFromToken = () => {
  const token = localStorage.getItem('userToken');
  if (!token) return null;

  const decodedToken = jwtDecode(token);
  console.log(decodedToken.sub, "ID:", decodedToken.userId);
  return decodedToken.userId; 
};


  export const isUserLoggedIn = () => {
    return !!localStorage.getItem('userToken');
  }


