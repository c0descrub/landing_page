import Project from "./Project";

const Main = (props) => {
  return (
    <>
      <section className="main-content">
        <h2 className="projects-title">{props.sectionTitle}</h2>
        <div className="projects-container">
          <Project
            projectTitle="React Pokédex"
            projectLink="https://github.com/c0descrub/pokedex-v2"
            hostLink="https://pokedex.jordansmith.cc"
            className="project-1"
            versionControlName={props.versionControlName}
          />
          <Project
            projectTitle="React task tracker"
            projectLink="https://github.com/c0descrub/todo_app"
            hostLink="https://todo.jordansmith.cc"
            className="project-2"
            versionControlName={props.versionControlName}
          />
          <Project
            projectTitle={props.projectTitle}
            projectLink={props.projectLink}
            hostLink="https://invaders.jordansmith.cc"
            className="project-3"
            invadersVersionControlName={props.versionControlName}
            versionControlName={props.versionControlName}
            repositoryLink={props.repositoryLink}
          />
        </div>
      </section>
      <section className="github-plug">
        <h3 className="github-plug-title">{props.callToAction}</h3>
        <div className="github-plug-cta">
          <p className="github-plug-cta--username">{props.username}</p>
          <div className="github-plug-cta--buttons">
            <a
              href={props.githubLink}
              aria-label={`follow ${props.username} on Github`}
              rel="noreferrer"
              target="_blank"
            >
              <button className="button follow-button">Follow</button>
            </a>
            <a
              href={props.repoLink}
              aria-label={`See all ${props.username} repositories on Github`}
              rel="noreferrer"
              target="_blank"
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
