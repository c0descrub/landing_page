import Image from "next/image";
import GitHubLogo from "../public/GitHub_logo.png";

const Project = ({ projectTitle, projectLink, className, hostLink }) => {
  return (
    <div className={className}>
      <div className="background">
        <a
          href={hostLink}
          className="project-link"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="project-title">{projectTitle}</h3>
        </a>

        <div className="project-github-link">
          <Image
            className="github-logo"
            src={GitHubLogo}
            alt={"Github Logo"}
            height={30}
            width={30}
          />
          <a
            href={projectLink}
            aria-label="Visit this project's github repository"
            target="_blank"
            rel="noreferrer"
          >
            <p>Github</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
