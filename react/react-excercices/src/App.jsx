import "./App.css";
import UserList from "./UserList/UserList";
import { Header } from "./Header";
import Footer from "../src/Footer";
import CardPage from "./CardList";
import React from "react";

const projects = {
  UserList: <UserList />,
  CardPage: <CardPage />,
};

const ProjectSelector = ({ projects, value, setProject }) => {
  return (
    <select value={value} onChange={(e) => setProject(e?.target?.value)}>
      {projects.map((pro) => (
        <option value={pro} label={pro} />
      ))}
    </select>
  );
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
