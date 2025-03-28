const ProjectSelector = ({ projects, value, setProject }) => {
  return (
    <select value={value} onChange={(e) => setProject(e?.target?.value)}>
      {projects.map((pro) => (
        <option value={pro} label={pro} key={pro} />
      ))}
    </select>
  );
};

export default ProjectSelector;
