import "./App.css";
import Home from "./pages/index.jsx";
import { GlobalContext } from "./context";

// simpan semua pages
function App() {
  // global state
  const user = {
    username: "jeremy",
    name: "Jeremy",
    email: "jeremy@tutor.com",
    role: "admin",
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <Home />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
