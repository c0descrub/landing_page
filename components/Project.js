import Image from "next/image";
import GithubLogo from "./GithubLogo";

const Project = (props) => {
  return (
    <div className={props.className}>
      <div className="background">
        <a
          href={props.projectLink}
          className="project-link"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="project-title">{props.projectTitle}</h3>
        </a>

        <div className="project-github-link">
          <GithubLogo />
          <a
            href={props.repositoryLink}
            aria-label="Visit this project's github repository"
            target="_blank"
            rel="noreferrer"
          >
            <p>{props.versionControlName}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
