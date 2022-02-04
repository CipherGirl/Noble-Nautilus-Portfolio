import Link from "next/link";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className={classes.social_container}>
      <div className={classes.social_content}>
        <Link href="https://www.youtube.com/c/Majorleaguehacking">
          <FontAwesomeIcon
            className={classes.youtube}
            icon={faYoutube}
            size="2x"
          />
        </Link>
        <Link href="https://www.facebook.com/MajorLeagueHacking">
          <FontAwesomeIcon
            className={classes.facebook}
            icon={faFacebook}
            size="2x"
          />
        </Link>
        <Link href="https://twitter.com/MLHacks?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          <FontAwesomeIcon
            className={classes.twitter}
            icon={faTwitter}
            size="2x"
          />
        </Link>
        <Link href="https://www.instagram.com/mlhacks/">
          <FontAwesomeIcon
            className={classes.instagram}
            icon={faInstagram}
            size="2x"
          />
        </Link>
        <Link href="https://www.linkedin.com/school/mlh-fellowship/">
          <FontAwesomeIcon
            className={classes.linkedin}
            icon={faLinkedin}
            size="2x"
          />
        </Link>
      </div>
      <div className={classes.links_content}>
        <Link href="#">
          <h1 className={classes.blog}>Blog</h1>
        </Link>
        <Link href="https://mlh.io/about">
          <h1 className={classes.about}>About</h1>
        </Link>
        <Link href="#">
          <h1 className={classes.projects}>Projects</h1>
        </Link>
        <Link href="https://fellowship.mlh.io/#programs">
          <h1 className={classes.programs}>Programs</h1>
        </Link>
        <Link href="https://mlh.io/faq">
          <h1 className={classes.faq}>FAQ</h1>
        </Link>
      </div>
      <div>
        <p className={classes.copyright}>MLH Fellowship © 2022</p>
      </div>
    </div>
  );
}
