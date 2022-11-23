import { useState } from "react";
import Cards from "./components/Cards";
import Search from "./components/Search";
import data from "./data.json";

function App() {
  const [users, setUsers] = useState(data);
  return (
    <div className="App">
      <Search users={data} setUsers={setUsers} />
      <Cards data={users} />
    </div>
  );
}

export default App;
