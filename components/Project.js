import Image from "next/image";
import Link from "next/link";
import GitHubLogo from "../public/GitHub_logo.png";

const Project = ({ projectTitle, projectLink, className, hostLink }) => {
  return (
    <a
      href={hostLink}
      className="project-link"
      target="_blank"
      rel="noreferrer"
    >
      <div className={className}>
        <div className="background">
          <h3 className="project-title">{projectTitle}</h3>

          <div className="project-github-link">
            <Image
              className="github-logo"
              src={GitHubLogo}
              alt="Git Hub Logo"
              height={30}
              width={30}
            />
            <a href={projectLink}>
              <p>Github</p>
            </a>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Project;
