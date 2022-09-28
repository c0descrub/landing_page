import Image from "next/image";
import Link from "next/link";
import GitHubLogo from "../public/GitHub_logo.png";

const Project = ({ projectTitle, projectLink, className }) => {
  return (
    <div className={className}>
      <div className="background">
        <h3 className="project-title">{projectTitle}</h3>
        <a
          href={projectLink}
          className="project-link"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <Image src={GitHubLogo} alt="Git Hub Logo" height={30} width={30} />
            <p>Github</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
