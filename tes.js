const isLoggedIn = () => {
  return localStorage.getItem("token") ? true : false;
};
useEffect(() => {
  if (isLoggedIn()) {
    setUserLogged(jwtDecode(localStorage.getItem("token")).user.role);
  }
}, [isLoggedIn()]);
