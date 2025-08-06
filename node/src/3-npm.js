import { getRandomDadJoke } from "give-me-a-joke"; // named export
import color from "chalk-rainbow"; // export default

getRandomDadJoke((joke) => console.log(color(`Dad Joke: ${joke}`)));
