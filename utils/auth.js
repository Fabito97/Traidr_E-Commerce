import { jwtDecode } from "jwt-decode";

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