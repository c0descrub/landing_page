import Project from "./Project";

const Main = ({
  sectionTitle,
  username,
  callToAction,
  repoLink,
  githubLink,
  projectTitle,
  projectLink,
  versionControl,
  versionControlName,
  repositoryLink,
}) => {
  return (
    <>
      <section className="main-content">
        <h2 className="projects-title">{sectionTitle}</h2>
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
            projectTitle={projectTitle}
            projectLink={projectLink}
            hostLink="https://invaders.jordansmith.cc"
            className="project-3"
            invadersVersionControlName={versionControlName}
            versionControl={versionControl}
            versionControlName={versionControlName}
            repositoryLink={repositoryLink}
          />
        </div>
      </section>
      <section className="github-plug">
        <h3 className="github-plug-title">{callToAction}</h3>
        <div className="github-plug-cta">
          <p className="github-plug-cta--username">{username}</p>
          <div className="github-plug-cta--buttons">
            <a
              href={githubLink}
              aria-label={`follow ${username} on Github`}
              rel="noreferrer"
              target="_blank"
            >
              <button className="button follow-button">Follow</button>
            </a>
            <a
              href={repoLink}
              aria-label={`See all ${username} repositories on Github`}
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
