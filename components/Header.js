import Image from "next/image";

export default function Header({ title, subtitle, description, profileImage }) {
  return (
    <>
      <header className="site-header">
        <div className="header-profile_image">
          <Image
            src={`https:${profileImage}`}
            alt={`Profile picture of ${title}`}
            width={150}
            height={150}
            priority={true}
          />
        </div>
        <div className="header-profile_info">
          <h1 className="header-title">{title}</h1>
          <h3 className="header-subtitle">{subtitle}</h3>
          <p className="header-blurb">{description}</p>
        </div>
      </header>
    </>
  );
}
