import Project from "./Project";

const Main = () => {
  return (
    <>
      <section className="main-content">
        <h2 className="projects-title">Recent Projects</h2>
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
      <section className="github-plug">
        <h3 className="github-plug-title">All projects available on Github</h3>
        <div className="github-plug-cta">
          <p className="github-plug-username">c0descrub</p>
          <div>Follow</div>
          <div>See all projects</div>
        </div>
      </section>
    </>
  );
};

export default Main;
