import "./App.css";
import UserList from "./UserList/UserList";
import { Header } from "./Header";
import Footer from "../src/Footer";

function App() {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Header />
      <UserList />
      <Footer />
    </div>
  );
}

export default App;
