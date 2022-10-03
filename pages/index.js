import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import * as contentful from "contentful";

var client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  // Get data from headless CMS
  const page = await client.getEntry("1TVOA6nzh46dC9V42lXzvv");
  const invaders = await client.getEntry("798XL6HDWn61dmTrm441KV");
  const projects = await client.getContentTypes();
  console.log(projects);

  // Get assets from headless CMS
  const asset = await client.getAsset("3RCx0tFmbSURaajS0GXv9Q");
  const cv = await client.getAsset("LLLGdWyNzVlsE1Fz22SFD");
  const githubLogo = await client.getAsset("7G3PnizDFjPLWV3Z2EQY3p");

  return {
    props: {
      title: page.fields.title,
      subtitle: page.fields.subtitle,
      description: page.fields.description,
      profileImage: asset.fields.file.url,
      sectionTitle: page.fields.sectionTitle,
      username: page.fields.username,
      emailAddress: page.fields.emailAddress,
      callToAction: page.fields.callToAction,
      repoLink: page.fields.repoLink,
      githubLink: page.fields.githubLink,
      cv: cv.fields.file.url,
      projectTitle: invaders.fields.projectTitle,
      projectLink: invaders.fields.projectLink,
      versionControl: githubLogo.fields.file.url,
      versionControlName: invaders.fields.versionControlName,
      repositoryLink: invaders.fields.repositoryLink,
    },
  };
}

export default function Home({
  profileImage,
  title,
  subtitle,
  description,
  sectionTitle,
  emailAddress,
  username,
  callToAction,
  repoLink,
  githubLink,
  cv,
  projectTitle,
  projectLink,
  versionControl,
  versionControlName,
  repositoryLink,
}) {
  return (
    <div className="site-container">
      <Header
        profileImage={profileImage}
        title={title}
        subtitle={subtitle}
        description={description}
      />
      <Main
        sectionTitle={sectionTitle}
        emailAddress={emailAddress}
        username={username}
        callToAction={callToAction}
        repoLink={repoLink}
        githubLink={githubLink}
        projectTitle={projectTitle}
        projectLink={projectLink}
        versionControl={versionControl}
        versionControlName={versionControlName}
        repositoryLink={repositoryLink}
      />
      <Footer emailAddress={emailAddress} githubLink={githubLink} cv={cv} />
    </div>
  );
}
