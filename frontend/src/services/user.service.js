import axios from 'axios';
import authHeader from './auth-header';

const jwtreact = process.env.REACT_APP_API;
const API_URL = jwtreact + "/api/test/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

}

export default new UserService();
