import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:4000/",
    headers: {
        Authorization: `${localStorage.getItem("token")}`
          
    },
      responseType: "json"
      
});
/*import axios from "axios";

export function getToken() {
	return localStorage.getItem("token")
}

export default function() { 
    
  return axios.create({
  [>baseURL: "https://watermp.herokuapp.com/",<]
      baseURL: "http://localhost:4000/",
  headers: {
    Authorization: getToken()
  },
  responseType: "json"
})
}*/
