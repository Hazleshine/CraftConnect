// src/auth.js
export const logout = (navigate) => {
  localStorage.removeItem("token");
  navigate("/");
};