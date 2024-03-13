import {
  BsFillCloudArrowDownFill,
  BsGithub,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        target="_blank"
        title="Resume"
        rel="noopener noreferrer nofollow"
        href="https://drive.google.com/drive/folders/1VSDfmrqOLy_p6cgsFoXy-xe7Tt3Cl5K8?usp=sharing"
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
        href="https://www.linkedin.com/in/md-nahid-hossain-66433919b/"
      >
        {" "}
        <AiFillLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
