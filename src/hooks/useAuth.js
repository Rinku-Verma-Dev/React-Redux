function useAuth() {
  const storedToken = localStorage.getItem("token");
  return storedToken ? true : false;
}

export default useAuth;
