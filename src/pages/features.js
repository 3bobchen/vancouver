import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../styles/index.module.css";
import { StaticImage } from "gatsby-plugin-image";

const SecondPage = () => (
  <Layout>
    <h1 style={{ textAlign: "center", margin: "5rem 0", fontSize: "4rem" }}>Features</h1>
    <div style={{ display: "flex", flexDirection: "column", gap: "10vh", marginBottom: "10vh" }}>
      <div style={{ display: "flex", flexDirection: "row", flex: 3, gap: "10vw", justifyContent: "center" }}>
        <a href={"https://nswbar.asn.au/the-bar-association/publications/inbrief/view/21dc6bda18d1036ec37b45178e17e8de"} className={styles.pad} target="_blank"
           style={{
             display: "flex",
             flexDirection: "column",
             alignItems: "center",
             padding: "2rem",
             width: "100%",
             maxWidth: "700px"
           }}>
          <StaticImage src="../images/NSWBAR.png" alt={"NSW Bar Logo"} style={{width: "10rem"}}/>
          <h2 style={{ textAlign: "center" }}>
            WINNERS OF THE NEW SOUTH WALES BAR ASSOCIATION/SULS 2022 LAW STUDENTS’ BLOG COMPETITION
          </h2>
          <div style={{
            color: "white",
            backgroundColor: "#004ca3",
            padding: "0.3rem 0.5rem",
            borderRadius: "0.5rem",
            textAlign: "center"
          }}>
            22/05/2023
          </div>
        </a>
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Features" />;

export default SecondPage;
