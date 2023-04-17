import Project from "./Project";

const Main = (props) => {
  return (
    <>
      <section className="main-content">
        <h2 className="projects-title">{props.sectionTitle}</h2>
        <div className="projects-container">
          <Project
            projectTitle={props.projects[0].fields.projectTitle}
            projectLink={props.projects[0].fields.projectLink}
            className="project-1"
            versionControlName={props.projects[0].fields.versionControlName}
            repositoryLink={props.projects[0].fields.repositoryLink}
          />
          <Project
            projectTitle={props.projects[3].fields.projectTitle}
            projectLink={props.projects[3].fields.projectLink}
            className="project-2"
            versionControlName={props.projects[3].fields.versionControlName}
            repositoryLink={props.projects[3].fields.repositoryLink}
          />
          <Project
            projectTitle={props.projects[2].fields.projectTitle}
            projectLink={props.projects[2].fields.projectLink}
            className="project-3"
            versionControlName={props.projects[2].fields.versionControlName}
            repositoryLink={props.projects[2].fields.repositoryLink}
          />
          <Project
            projectTitle={props.projects[1].fields.projectTitle}
            projectLink={props.projects[1].fields.projectLink}
            className="project-4"
            versionControlName={props.projects[1].fields.versionControlName}
            repositoryLink={props.projects[1].fields.repositoryLink}
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
