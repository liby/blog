import { useState, useEffect, memo } from "react";
import { useTheme, User, Link } from "@geist-ui/core";
import NextLink from "next/link";
import ProfileLinks from "./profile-links";
import { Configs } from "#utils/variables";

const Profile = memo(function Profile() {
  const theme = useTheme();
  const [showText, setShowText] = useState(theme.type === "dark");
  useEffect(() => {
    const show = theme.type === "dark";
    if (showText !== show) {
      setShowText(show);
    }
  }, [showText, theme.type]);

  return (
    <div className="profile">
      <div className="user">
        <NextLink href="/" passHref>
          <Link>
            <User
              src="/images/profile.jpg"
              name={Configs.author}
              altText="avatar"
            >
              {Configs.summary}
            </User>
          </Link>
        </NextLink>
      </div>
      <ProfileLinks />
      <style jsx>{`
        .profile {
          padding: ${theme.layout.gap} 0;
        }

        .profile :global(.user) {
          padding-left: 0;
          margin-bottom: ${theme.layout.gapQuarter};
          max-width: 100%;
          overflow: hidden;
        }

        @media only screen and (max-width: ${theme.layout.breakpointMobile}) {
          .profile {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 5rem;
          }
        }
      `}</style>
    </div>
  );
});

export default Profile;
