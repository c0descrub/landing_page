import Image from "next/image";
import ProfilePic from "../public/profile_pic.png";

const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="header-profile_image">
          <Image
            src={ProfilePic}
            alt={"Profile picture of Jordan Smith"}
            width={150}
            height={150}
          />
        </div>
        <div className="header-profile_info">
          <h1 className="header-title">Jordan Smith</h1>
          <h3 className="header-subtitle">Dad, Husband, and Web Developer</h3>
          <p className="header-blurb">
            Self taught, focusing on a faster web. Currently building with
            React.js, and learning Next.js{" "}
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
