import Project from "./Project";

const Main = () => {
  return (
    <section className="main_content">
      <h2>Recent Projects</h2>
      <div className="projects-container">
        <Project
          projectTitle="React Pokedex"
          projectLink="https://github.com/c0descrub/pokedex-v2"
          className="project-1"
        />
        <Project
          projectTitle="React task tracker"
          projectLink="https://github.com/c0descrub/todo_app"
          className="project-2"
        />
        <Project
          projectTitle="Space Invaders"
          projectLink="https://github.com/c0descrub/todo_app"
          className="project-3"
        />
      </div>
    </section>
  );
};

export default Main;
