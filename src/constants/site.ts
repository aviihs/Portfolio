import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineYoutube,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";

export const SITE_AUTHOR = "Shiva Bhusal";

export const SOCIAL_LINKS = [
  {
    href: "https://github.com/aviihs",
    label: "GitHub",
    icon: AiFillGithub,
  },
  {
    href: "https://www.youtube.com/@avihs010",
    label: "YouTube",
    icon: AiOutlineYoutube,
  },
  {
    href: "https://www.linkedin.com/in/shiva-bhusal-9409152a6/",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: "https://www.instagram.com/av_ihs_",
    label: "Instagram",
    icon: AiFillInstagram,
  },
];

export const NAV_ITEMS = [
  {
    path: "/",
    label: "Home",
    icon: AiOutlineHome,
  },
  {
    path: "/about",
    label: "About",
    icon: AiOutlineUser,
  },
  {
    path: "/project",
    label: "Projects",
    icon: AiOutlineFundProjectionScreen,
  },
  {
    path: "/blogs",
    label: "Blogs",
    icon: CgFileDocument,
  },
  {
    path: "/resume",
    label: "Resume",
    icon: CgFileDocument,
  },
];

export const PORTFOLIO_REPO_URL = "https://github.com/aviihs/Portfolio";

export const UPWORK_PROFILE_URL =
  "https://www.upwork.com/freelancers/~0180edf192f8c7cba8";

export const RESUME_PDF_PATH = "/shivabhusal.pdf";
