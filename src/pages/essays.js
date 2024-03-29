import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../styles/index.module.css";

const SecondPage = () => (
  <Layout>
    <h1 style={{ textAlign: "center", margin: "5rem 0", fontSize: "4rem" }}>Essays</h1>
    <div style={{ display: "flex", flexDirection: "column", gap: "10vh", marginBottom: "10vh" }}>
      <div style={{ display: "flex", flexDirection: "row", flex: 3, gap: "10vw", justifyContent: "center" }}>
        <a href={"/essays/E1"} className={styles.pad}
           style={{
             display: "flex",
             flexDirection: "column",
             alignItems: "center",
             padding: "2rem",
             width: "100%",
             maxWidth: "700px"
           }}>
          <svg style={{ width: "6rem" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
          </svg>
          <h2 style={{ textAlign: "center" }}>
            I am, You are, We are Australian: <br />Indigenous Settlement in a modern Settler State
          </h2>
          <a style={{
            color: "white",
            backgroundColor: "#004ca3",
            padding: "0.3rem 0.5rem",
            borderRadius: "0.5rem",
            textAlign: "center"
          }} target="_blank" href={"https://www.handbook.unsw.edu.au/undergraduate/courses/2023/LAWS2820?year=2023"}>
             Submitted for <em>Law and Social Theory LAWS2820</em>
          </a>
        </a>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flex: 3, gap: "10vw", justifyContent: "center" }}>
        <a href={"/essays/E2"} className={styles.pad}
           style={{
             display: "flex",
             flexDirection: "column",
             alignItems: "center",
             padding: "2rem",
             width: "100%",
             maxWidth: "700px"
           }}>
          <svg style={{ width: "6rem" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
          </svg>
          <h2 style={{ textAlign: "center" }}>
            Central Bank Digital Currencies: <br />The new balance between privacy and access in the digital economy
          </h2>
          <a style={{
            color: "white",
            backgroundColor: "#004ca3",
            padding: "0.3rem 0.5rem",
            borderRadius: "0.5rem",
            textAlign: "center"
          }} target="_blank" href={"https://www.handbook.unsw.edu.au/undergraduate/courses/2023/COMP6451?year=2023"}>
            ️  Submitted for <em>Cryptocurrencies and Distributed Ledgers COMP6451</em>
          </a>
        </a>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flex: 3, gap: "10vw", justifyContent: "center" }}>
        <a href={"/essays/E3"} className={styles.pad}
           style={{
             display: "flex",
             flexDirection: "column",
             alignItems: "center",
             padding: "2rem",
             width: "100%",
             maxWidth: "700px"
           }}>
          <svg style={{ width: "6rem" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
          </svg>
          <h2 style={{ textAlign: "center" }}>
            Could an Artificially Intelligent Device Practise as a Barrister in NSW?
          </h2>
          <a style={{
            color: "white",
            backgroundColor: "#004ca3",
            padding: "0.3rem 0.5rem",
            borderRadius: "0.5rem",
            textAlign: "center"
          }} target="_blank" href={"https://nswbar.asn.au/the-bar-association/publications/inbrief/view/21dc6bda18d1036ec37b45178e17e8de"}>
            ️  Coauthored for a <em>NSW Bar Association</em> Competition
          </a>
        </a>
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Essays" />;

export default SecondPage;
