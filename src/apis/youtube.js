import axios from "axios";

const KEY = "AIzaSyAf7NJC6P9MeyXeZOlWyJQWOmmWiNksaPY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
