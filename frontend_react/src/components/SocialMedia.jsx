import {
  BsFillCloudArrowDownFill,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        target="_blank"
        title="Resume"
        rel="noopener noreferrer nofollow"
        href="https://drive.google.com/file/d/14Kx2K9sz5u8-JAheOFZz0_KiuqjzRSpU/view?usp=sharing"
      >
        {" "}
        <BsFillCloudArrowDownFill />
      </a>
    </div>
    <div>
      <a
        target="_blank"
        title="GitHub"
        rel="noopener noreferrer nofollow"
        href="https://github.com/floatingnahid22"
      >
        {" "}
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        target="_blank"
        title="Facebook"
        rel="noopener noreferrer nofollow"
        href="https://web.facebook.com/nahidhossain1184/"
      >
        {" "}
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a
        target="_blank"
        title="Instagram"
        rel="noopener noreferrer nofollow"
        href="https://www.instagram.com/imnahidhossain/"
      >
        {" "}
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
