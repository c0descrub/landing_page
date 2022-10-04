const Footer = (props) => {
  return (
    <footer>
      <hr></hr>
      <ul>
        <li>
          <a href={props.githubLink} target="_blank" rel="noreferrer">
            Github
          </a>
        </li>
        <li>
          <a href={`https:${props.cv}`} target="_blank" rel="noreferrer">
            CV
          </a>
        </li>
        <li>
          <a
            href={`mailto:${props.emailAddress}`}
            target="_blank"
            rel="noreferrer"
          >
            {props.emailAddress}
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
