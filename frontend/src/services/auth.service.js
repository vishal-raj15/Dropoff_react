import axios from "axios";

// const API_URL = "http://localhost:8080/api/auth/";

const jwtreact = process.env.REACT_APP_API;
const API_URL = jwtreact + "/api/auth/";

class AuthService {

  register(firstusername,lastusername, email, phone ,password) {
    return axios.post(API_URL + "signup", {
      firstusername,
      lastusername,
      email,
      phone,
      password
    });
  }

  login(email, password) {
    return axios
      .post(API_URL + "signin", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }


  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

  logout() {
    localStorage.removeItem("user");
  }




}

export default new AuthService();
