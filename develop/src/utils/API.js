import axios from "axios";


const api = {
  getEmployees: function () {
    return axios.get("https://randomuser.me/api/?results=10");
  },
};

export default api