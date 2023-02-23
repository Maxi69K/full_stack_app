import axios from 'axios';

export const RegisterUser = (body) => {
  return axios.post('/register', body);
}

export const LoginUser = (body) => {
  return axios.post('/login', body)
}

export const Logout = (navigate) => {
  localStorage.removeItem('app_user_data');
  navigate('/')
}

export const StoreUserData = (user_data) => {
  localStorage.setItem('app_user_data', JSON.stringify(user_data))
}

export const GetUserData = () => {
  let userData = localStorage.getItem('app_user_data');
  return userData ? JSON.parse(userData) : null;
}

/*
// Like a class
class AuthService {
  static register(body) {
    return axios.post('/register', body);
  }
}
export default AuthService;
*/