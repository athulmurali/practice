import "./App.css";
import UserList from "./UserList/UserList";
import { Header } from "./Header";
import Footer from "../src/Footer";
import CardPage from "./CardList";
import ProjectSelector from "./ProjectSelector";
import React from "react";

const projects = {
  UserList: <UserList />,
  CardPage: <CardPage />,
};

function App() {
  const getProjectNames = () => Object.keys(projects).values();
  const [project, setProject] = React.useState(getProjectNames().next().value);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Header />
      <ProjectSelector
        value={project}
        projects={getProjectNames()}
        setProject={setProject}
      />
      {projects[project]}
      <Footer />
    </div>
  );
}

export default App;
