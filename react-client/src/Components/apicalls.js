import axios from "axios";
import {user} from "../util/api"

export const fetchUsername = async (setUsername,setError) => {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    //   },
    // };

    try {
      // const {data} = await axios.post(
      //   `${base_url}/api/auth/username`,
      //   {},
      //   config
      // );
      // const {data}  = await methods.post('auth/username', {});
      // console.log(`user: ${data.username}`);
      const data = await user();
      setUsername(data.username);
    } catch (error) {
      setError("You are not authorized please login");
    }
  };