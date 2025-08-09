import "./App.css";
import { GlobalContext } from "./context";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

// simpan semua pages
function App() {
  // global state
  const user = {
    username: "jeremy",
    name: "Jeremy",
    email: "jeremy@tutor.com",
    role: "admin",
  };

  // manajemen pages ditarik ke router/index.jsx
  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
