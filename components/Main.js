import Project from "./Project";

const Main = () => {
  return (
    <>
      <section className="main-content">
        <h2 className="projects-title">Recent Projects</h2>
        <div className="projects-container">
          <Project
            projectTitle="React Pokédex"
            projectLink="https://github.com/c0descrub/pokedex-v2"
            hostLink="https://pokedex.jordansmith.cc"
            className="project-1"
          />
          <Project
            projectTitle="React task tracker"
            projectLink="https://github.com/c0descrub/todo_app"
            hostLink="https://todo.jordansmith.cc"
            className="project-2"
          />
          <Project
            projectTitle="Space Invaders"
            projectLink="https://github.com/c0descrub/todo_app"
            hostLink="https://invaders.jordansmith.cc"
            className="project-3"
          />
        </div>
      </section>
      <section className="github-plug">
        <h3 className="github-plug-title">All projects available on Github</h3>
        <div className="github-plug-cta">
          <p className="github-plug-cta--username">c0descrub</p>
          <div className="github-plug-cta--buttons">
            <a
              href="https://github.com/c0descrub"
              aria-label="Follow c0descrub on github"
            >
              <button className="button follow-button">Follow</button>
            </a>
            <a
              href="https://github.com/c0descrub?tab=repositories"
              aria-label="See all c0descrub repositories on github"
            >
              <button className="button projects-button">
                See all projects
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
