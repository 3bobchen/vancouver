import * as React from "react";

const Header = () => (
  <div className="navbar bg-white drop-shadow-lg rounded-2xl mx-auto w-[95%]">
    <div className="flex-1">
      <div className="btn btn-ghost text-xl"><a href={"/"} className={"logo small"}>Bob Chen</a></div>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 m-0">
        <li className="mb-0"><a
          target="_blank"
          href={"https://drive.google.com/file/d/1JPyq08w1Vg3hKOk65-fWvQqx20Pwu-gx/view?usp=sharing"}>PDF Resume</a>
        </li>
        <li className="mb-0"><a
          href={"/contact"}>Contact</a>
        </li>
      </ul>
    </div>
  </div>);

export default Header;
