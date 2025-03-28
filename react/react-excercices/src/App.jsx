import "./App.css";
import UserList from "./UserList/UserList";
import { Header } from "./Header";
import Footer from "../src/Footer";
import CardPage from "./CardList";


function App() {

  const projects = {
    "UserList": <UserList/>,
    "CardPage": <CardPage/>
  }
  const [project, setProject] = useState(Object.keys(projects).values().next())


  const ProjectSelector = ({projects})=>{
    return <select defaultValue={project}>
      {projects.map(pro=>(<option value={pro} label={pro}/>)) }
  
    </select>
  }
  

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Header />
      <ProjectSelector/>
      {projects[project]}
      <Footer />
    </div>
  );
}

export default App;
