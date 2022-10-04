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
  const projects = await client.getEntries();

  // Get assets from headless CMS
  const asset = await client.getAsset("3RCx0tFmbSURaajS0GXv9Q");
  const cv = await client.getAsset("LLLGdWyNzVlsE1Fz22SFD");
  const githubLogo = await client.getAsset("7G3PnizDFjPLWV3Z2EQY3p");

  return {
    props: {
      ...page.fields,
      ...invaders.fields,
      cv: cv.fields.file.url,
      profileImage: asset.fields.file.url,
      versionControl: githubLogo.fields.file.url,
    },
  };
}

export default function Home(props) {
  return (
    <div className="site-container">
      <Header
        profileImage={props.profileImage}
        title={props.title}
        subtitle={props.subtitle}
        description={props.description}
      />
      <Main
        sectionTitle={props.sectionTitle}
        emailAddress={props.emailAddress}
        username={props.username}
        callToAction={props.callToAction}
        repoLink={props.repoLink}
        githubLink={props.githubLink}
        projectTitle={props.projectTitle}
        projectLink={props.projectLink}
        versionControl={props.versionControl}
        versionControlName={props.versionControlName}
        repositoryLink={props.repositoryLink}
      />
      <Footer
        emailAddress={props.emailAddress}
        githubLink={props.githubLink}
        cv={props.cv}
      />
    </div>
  );
}
