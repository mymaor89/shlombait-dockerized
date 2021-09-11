import axios from "axios";
const base_url = 'http://35.207.89.38:5000';

export const fetchUsername = async (setUsername,setError) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try {
      const {data} = await axios.post(
        `${base_url}/api/auth/username`,
        {},
        config
      );
      console.log(`user: ${data.username}`);
      setUsername(data.username);
    } catch (error) {
      setError("You are not authorized please login");
    }
  };