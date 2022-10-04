import Image from "next/image";
import GithubLogo from "./GithubLogo";

const Project = ({
  projectTitle,
  projectLink,
  className,
  versionControl,
  versionControlName,
  repositoryLink,
}) => {
  return (
    <div className={className}>
      <div className="background">
        <a
          href={projectLink}
          className="project-link"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="project-title">{projectTitle}</h3>
        </a>

        <div className="project-github-link">
          <GithubLogo />
          <a
            href={repositoryLink}
            aria-label="Visit this project's github repository"
            target="_blank"
            rel="noreferrer"
          >
            <p>{versionControlName}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
