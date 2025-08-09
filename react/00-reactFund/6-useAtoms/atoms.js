import axios from "axios";
import { atom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";

// buat kirim object
const userAtom = atom({
  name: "Jeremy",
  username: "jeremy",
  email: "jeremy@tutor.com",
});

// buat kirim api (gabungan antara useQuery dan useAtom)
const queryAtom = atomWithQuery(() => ({
  queryKey: ["todos"],
  queryFn: async () =>
    await axios("https://jsonplaceholder.typicode.com/todos"),
}));

export { userAtom, queryAtom };
