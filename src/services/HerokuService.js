import axios from "axios";

export default class HerokuService {
  constructor() {
    this._apiBase = "https://asta-web-1.herokuapp.com/api/todo";
  }

  getTodos = async (url) => {
    try {
      const response = await axios.get(this._apiBase);
      return response.data;
  } catch(error) {
      console.log(error);
    }
  }

  postTodos() {}
}
