export const isLoggedIn = () => {
  const authToken = localStorage.getItem("authToken") || getCookie("authToken");
  if (authToken) {
    return true;
  }
  return false;
};

const getCookie = (name: any) => {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const [cookieName, cookieValue] = cookies[i].split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
};
