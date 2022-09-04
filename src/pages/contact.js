import * as React from "react";
import { SocialIcon } from "react-social-icons";

import Layout from "../components/layout";
import Seo from "../components/seo";

const SecondPage = () => (
  <Layout>
    <h1 style={{ textAlign: "center", margin: "6vh 0" }}>Contact</h1>
    <div style={{ display: "flex", flexDirection: "column", gap: "10vh", marginBottom: "10vh" }}>
      <div style={{ display: "flex", flexDirection: "row", flex: 3, gap: "10vw", justifyContent: "center" }}>
        <a href={"mailto:main.bobchen@gmail.com"}
           style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <svg style={{ width: "7rem" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round"
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
          </svg>
          <h2>
            Email
          </h2></a>
        <a href={"tel:0435113898"} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <svg style={{ width: "7rem" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
          <h2>
            Mobile
          </h2></a>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flex: 3, gap: "10vw", justifyContent: "center" }}>
        <a href={"www.linkedin.com/in/3bobchen"}
           style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {
            <SocialIcon style={{ width: "7rem", height: "7rem" }} url="www.linkedin.com/in/3bobchen"
                        network={"linkedin"} />
          }
          <h2>LinkedIn</h2></a>
        <a href={"www.linkedin.com/in/3bobchen"}
           style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {
            <SocialIcon style={{ width: "7rem", height: "7rem" }} url="https://www.behance.net/bobchen10"
                        network={"behance"} />
          }
          <h2>Behance</h2></a>
        <a href={"www.linkedin.com/in/3bobchen"}
           style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {
            <SocialIcon style={{ width: "7rem", height: "7rem" }} url="https://github.com/3bobchen"
                        network={"github"} />
          }
          <h2>Github</h2></a>
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Page two" />;

export default SecondPage;
