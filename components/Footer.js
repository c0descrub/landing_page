const Footer = ({ emailAddress, githubLink, cv }) => {
  return (
    <footer>
      <hr></hr>
      <ul>
        <li>
          <a href={githubLink} target="_blank" rel="noreferrer">
            Github
          </a>
        </li>
        <li>
          <a href={`https:${cv}`} target="_blank" rel="noreferrer">
            CV
          </a>
        </li>
        <li>
          <a href={`mailto:${emailAddress}`} target="_blank" rel="noreferrer">
            {emailAddress}
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
