import Image from "next/image";
import ProfilePic from "../public/profile_pic.png";
import * as contentful from "contentful";

var client = contentful.createClient({
  space: "kpmu5n50yi84",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function Header(props) {
  return (
    <>
      <header className="site-header">
        <div className="header-profile_image">
          <Image
            src={ProfilePic}
            alt={"Profile picture of Jordan Smith"}
            width={150}
            height={150}
            priority={true}
          />
        </div>
        <div className="header-profile_info">
          <h1 className="header-title">{props.title}</h1>
          <h3 className="header-subtitle">{props.subtitle}</h3>
          <p className="header-blurb">{props.descriptiopn}</p>
        </div>
      </header>
    </>
  );
}

export async function getStaticProps() {
  // Get data from headless CMS
  const page = await client.getEntry("1TVOA6nzh46dC9V42lXzvv");
  console.log(page);

  return {
    props: {
      title: page.fields.title,
      subtitle: page.fields.subtitle,
      description: page.fields.description,
    },
  };
}

// client.getEntry("1TVOA6nzh46dC9V42lXzvv").then(function (entry) {
//   // logs the entry metadata
//   console.log(entry.sys);

//   // logs the field with ID title
//   console.log(entry.fields.title);
// });
