import Image from "next/image";
import ProfilePic from "../public/profile_pic.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="header_profile_image">
          <Image
            src={ProfilePic}
            alt="Profile picture of Jordan Smith"
            width={150}
            height={150}
          />
        </div>
        <div className="header_profile_info">
          <h1 className="page-title">Jordan Smith</h1>
          <h3 className="page-subtitle">Dad, Husband, and Web Developer</h3>
          <p className="page-blurb">
            Self taught, focusing on a faster web. Currently building with React
            and learning Next.js{" "}
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
