import { useState } from "react";

const AddProject = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const [subProjects, setSubProjects] = useState([]);

  const handleAddSubProject = () => {
    setSubProjects([...subProjects, { title: "", path: "" }]);
  };

  const handleSubmit = () => {
    const newProject = {
      title: projectTitle,
      path: `/OilWell/${projectTitle.replace(/\s+/g, "-")}`,
      submenu: subProjects,
    };

    // هنا يتم إرسال المشروع الجديد لقائمة المشاريع أو لقاعدة البيانات
    console.log("New Project:", newProject);
    alert("Project Added Successfully!");
  };

  return (
    <div>
      <h1>Add New Project</h1>
      <input
        type="text"
        placeholder="Enter Project Title"
        value={projectTitle}
        onChange={(e) => setProjectTitle(e.target.value)}
      />
      <button onClick={handleAddSubProject}>Add Sub Project</button>

      {subProjects.map((subProject, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Enter Sub Project Title"
            value={subProject.title}
            onChange={(e) => {
              const newSubProjects = [...subProjects];
              newSubProjects[index].title = e.target.value;
              newSubProjects[
                index
              ].path = `/OilWell/${projectTitle}/${e.target.value.replace(
                /\s+/g,
                "-"
              )}`;
              setSubProjects(newSubProjects);
            }}
          />
        </div>
      ))}

      <button onClick={handleSubmit}>Submit Project</button>
    </div>
  );
};

export default AddProject;
