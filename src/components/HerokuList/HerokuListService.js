import axios from "axios";

export default class HerokuListService {
  constructor() {
    this._apiBase = "https://asta-web-1.herokuapp.com/api/todo";
  }

  getTodos = async () => {
    try {
      const response = await axios.get(this._apiBase);
      return response.data;
  } catch(error) {
      console.log(error);
    }
  };

  postTodos = async (data) => {
    try {
      const response = await axios.post(this._apiBase, data);
      if (response.status !== 200 && response.statusText !== 'OK') {
        throw Error("Failed to save to DB");
      }
      return response.data;
    } catch(error) {
      console.log(error);
    }
  };
}
