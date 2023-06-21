import { IoLogoTiktok } from "react-icons/io5";
import LinkTo from "../LinkTo";
import { logo } from "src/common/Images";
import { BsTwitter, BsYoutube, BsReddit } from "react-icons/bs";
import { FaKickstarter } from "react-icons/fa";
import { SiGofundme } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function Footer(props) {
  return (
    <div className="bg-primary pt-7">
      <div className="container max-w-[1315px] mx-auto px-[15px]">
        <img
          src={logo}
          className="w-[140px] mx-auto 
        "
        />
      </div>
      <div className="gap-x-3 flex items-center justify-center mt-10">
        <NavLink to="https://www.tiktok.com/@synapmelabs1">
          <IoLogoTiktok className="hover:opacity-70 text-3xl text-white cursor-pointer" />
        </NavLink>
        <NavLink to="https://www.reddit.com/user/SynapMeLabs/">
          <BsReddit className="hover:opacity-70 text-3xl text-white cursor-pointer" />
        </NavLink>
        <NavLink to="https://www.instagram.com/synapmelabs/">
          <AiFillInstagram className="hover:opacity-70 text-3xl text-white cursor-pointer" />
        </NavLink>
        <NavLink to="https://www.kickstarter.com/projects/synapme/social-media-for-ai-and-neuroscience?ref=project_build">
          <FaKickstarter className="hover:opacity-70 text-3xl text-white cursor-pointer" />
        </NavLink>
        <NavLink to="https://www.gofundme.com/f/synapme-llc-fundraiser?utm_source=customer&utm_medium=copy_link&utm_campaign=p_lico+share-sheet">
          <SiGofundme className="hover:opacity-70 text-3xl text-white cursor-pointer" />
        </NavLink>
      </div>
      <div className="bg-white/50 mt-9 w-full h-px" />
      <div className="py-9 text-center">
        <LinkTo
          className="text-lg/5 font-light text-white max-md:text-sm/5"
          to="/"
          text=" © Copyright 2023. SynapMe all right reserved."
        />
      </div>
    </div>
  );
}
