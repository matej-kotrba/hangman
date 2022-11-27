import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Tooltip from "../Tooltip/Tooltip";
import Link from "next/link";

function Footer() {
  return (
    <div className="py-6 px-16 flex text-[3.4rem] gap-2">
      <Tooltip title="Visit my GitHub" arrow>
        <Link
          href={"https://github.com/mkit2009"}
          target={"_blank"}
          rel="noopener norefferer"
        >
          <AiFillGithub className="cursor-pointer" />
        </Link>
      </Tooltip>

      <Tooltip title="Visit my LinkedIn" arrow>
        <Link
          href={"https://www.linkedin.com/in/matej-kotrba/"}
          target={"_blank"}
          rel="noopener norefferer"
        >
          <AiFillLinkedin className="text-blue-600 cursor-pointer relative" />
        </Link>
      </Tooltip>
    </div>
  );
}

export default Footer;
