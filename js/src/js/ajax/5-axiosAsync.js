import axios from "axios"; // ES Modules

const loadPeople = async (id) => {
  try {
    const res = await axios(`https://swapi.info/api/people/${id}`);
    // ga perlu "const data = await res.json()" -> langsung data
    console.log(res.data);
  } catch (err) {
    console.log(`Error: `, err.message);
  }
};

loadPeople(1);
