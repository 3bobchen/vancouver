/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import "../styles/layout.css";

const Layout = ({ children }) => {
  return (
    <div className={"bg-[#eff6ff] py-3"}>
      <Header />
      <div
        style={{
          margin: `0 auto`
        }}
      >
        <main style={{ minHeight: "70vh" }}>{children}</main>
      </div>

      <footer
        className={"Footer"}>
        <div className={"FooterRow"}>
          <div>
            <a href={"./"} className={"logo"}>
              BC
            </a>
          </div>
          <span></span>
        </div>

        <div className={"FooterRow"}>
          <div className={"FooterShortcuts"}>
          </div>
          <span style={{
            display: "flex", flexDirection: "row", alignItems: "center"
          }}>
            <b>
                © {new Date().getFullYear()} Bob Chen
            </b>
        </span>
        </div>
      </footer>
    </div>);
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
