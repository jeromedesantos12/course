// import axios from "axios";
import axios from "axios";

const getJokes = async () => {
  try {
    const config = { headers: { Accept: `application/json` } };
    const res = await axios.get(`https://icanhazdadjoke.com`, config);

    return res.data.joke;
  } catch (err) {
    return `No jokes available!`;
  }
};

console.log(await getJokes());
