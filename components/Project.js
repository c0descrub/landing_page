import Image from "next/image";
import GitHubLogo from "../public/GitHub_logo.png";

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
          <Image
            className="github-logo"
            // href={`https:${versionControl}`}
            href={versionControl}
            alt={"Github Logo"}
            height={30}
            width={30}
          />
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
