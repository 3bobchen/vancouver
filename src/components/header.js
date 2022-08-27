import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Header = () => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`
    }}
  >

    <a href={"./"} className={"logo small"}>BC</a>
    <div className="dropdown">
      <Link
        style={{
          fontSize: `var(--font-lg)`,
          textDecoration: `none`
        }}
      >
        <strong>Professional Portfolio</strong>
      </Link>
      <div className="dropdown-content">
        <a href={"./professional/education"}><p style={{ marginBottom: "1vh", marginTop: 0 }}>Education</p></a>
        <a href={"./professional/experience"}><p style={{ marginBottom: "1vh", marginTop: 0 }}>Experience</p></a>
        <a href={"./professional/skills"}><p style={{ marginBottom: 0, marginTop: "1vh" }}>Skills</p></a>
        <a href={"./professional/tprojects"}><p style={{ marginBottom: 0, marginTop: "1vh" }}> Technical
          Projects</p></a>
      </div>
    </div>
    <div className="dropdown">
      <Link
        to="/creative/cprojects"
        style={{
          fontSize: `var(--font-lg)`,
          textDecoration: `none`
        }}
      >
        <strong>Creative Portfolio</strong>
      </Link>
      <div className="dropdown-content">
        <a href={"./creative/creativeCoding"}><p style={{ marginBottom: "1vh", marginTop: 0 }}>Creative Coding</p>
        </a>
        <a href={"./creative/logos"}><p style={{ marginBottom: "1vh", marginTop: "1vh" }}>Logos</p></a>
        <a href={"./creative/trailers"}><p style={{ marginBottom: "1vh", marginTop: 0 }}>Trailer Animations</p></a>
        <a href={"./creative/videos"}><p style={{ marginBottom: 0, marginTop: "1vh" }}>Video</p></a>
      </div>
    </div>
    <div className="dropdown">
      <Link
        style={{
          fontSize: `var(--font-lg)`,
          textDecoration: `none`
        }}
      >
        <strong>Files</strong>
      </Link>
      <div className="dropdown-content">
        <a
          href={"https://docs.google.com/document/d/11VVcKdyn9elcOqCIAMaQl0jnq_KifBbL/edit?usp=sharing&ouid=103019584399212885877&rtpof=true&sd=true"}>
          <p style={{ marginBottom: 0, marginTop: 0 }}>PDF Resume</p></a>
      </div>
    </div>
    <Link
      to="./contact"
      style={{
        fontSize: `var(--font-lg)`,
        textDecoration: `none`,
        backgroundColor: "#004ca3",
        color: "#eff1fd",
        padding: "5px 15px",
        borderRadius: "10px"
      }}
    >
      Contact
    </Link>

  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
