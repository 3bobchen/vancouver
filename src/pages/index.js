import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../styles/index.module.css";
import Actions from "../components/actions";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={styles.hero}>
        <div className={styles.persona}>
          <StaticImage
            src="../images/portrait-animated.png"
            loading="eager"
            placeholder="blurred"
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt=""
            id="profile-photo"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "17rem",
              marginTop: "auto",
              marginBottom: "auto"
            }}
          />
          <div style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "center",
            alignItems: "center"
          }}>
                <span className={"logo title"}>
                    Bob Chen
                </span>
            <h1>
              <b>Law and Computer Science Student</b> <br />
              <b>Aspiring developer and lawyer</b>
            </h1>
          </div>
        </div>

        <div className={styles.greeting}>
          <div style={{
            display: "flex",
            fontSize: "2rem",
            color: "#004ca3",
            fontWeight: 600,
            justifyContent: "flex-start"
          }}>
            {new Date().getHours() < 2 ? <span
              style={{}}>Hi there, you're up late!</span> : new Date().getHours() < 6 ?
              <span>Hi there, you're up early!</span> : new Date().getHours() < 12 ?
                <span>Good Morning!</span> : new Date().getHours() < 17 ? <span> Good Afternoon!</span> :
                  <span>Good Evening!</span>
            }
          </div>
          <h1 style={{
            display: "flex",
            fontSize: "1.6rem",
            color: "#004ca3",
            width: "90%",
            fontWeight: 300
          }}>
            Based in Sydney, I am a double-major uni student with experience and knowledge in a broad range
            of disciplines. <br /><br /> I hope you can follow this showcase and get to know me and my work
            better.
          </h1>
        </div>
      </div>

      <Actions></Actions>

      {/*<div style={{*/}
      {/*  display: "flex",*/}
      {/*  flexDirection: "column",*/}
      {/*  background: "#eff6ff",*/}
      {/*  // #e6f1ff*/}
      {/*  padding: "1rem",*/}
      {/*  borderRadius: "1rem"*/}
      {/*}}>*/}
      {/*  <h1 style={{ margin: "1rem 3rem" }}>*/}
      {/*    <b>Education</b>*/}
      {/*  </h1>*/}
      {/*  <div style={{ display: "flex", flexDirection: "row", gap: "4rem", margin: "2rem 3rem" }}>*/}
      {/*    <StaticImage src={"../images/unsw.jpeg"} alt={""}*/}
      {/*                 style={{ flex: 1, maxWidth: "9rem", minWidth: "7rem" }} />*/}
      {/*    <div style={{ flex: 4, fontSize: "1rem", textAlign: "left", alignSelf: "center" }}>*/}
      {/*      <h2 style={{ lineHeight: "1rem" }}>*/}
      {/*        Bachelor of Laws*/}
      {/*      </h2>*/}
      {/*      <h2 style={{ lineHeight: "1rem" }}>*/}
      {/*        Bachelor of Science (Computer Science)*/}
      {/*      </h2>*/}
      {/*      <h2 style={{ lineHeight: "1rem", fontWeight: 300 }}>*/}
      {/*        2025 Completion*/}
      {/*      </h2>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <a style={{ margin: "1rem 3rem", textAlign: "right" }}>*/}
      {/*    Find out more*/}
      {/*  </a>*/}
      {/*</div>*/}

      {/*<div style={{*/}
      {/*  display: "flex",*/}
      {/*  flexDirection: "column",*/}
      {/*  background: "#eff6ff",*/}
      {/*  // #e6f1ff*/}
      {/*  padding: "1rem",*/}
      {/*  borderRadius: "1rem"*/}
      {/*}}>*/}
      {/*  <h1 style={{ margin: "1rem 3rem" }}>*/}
      {/*    <b>Work</b>*/}
      {/*  </h1>*/}
      {/*  <div style={{ display: "flex", flexDirection: "row", gap: "4rem", margin: "2rem 3rem" }}>*/}
      {/*    <StaticImage src={"../images/jade.webp"} alt={""}*/}
      {/*                 style={{ flex: 1, maxWidth: "7rem", minWidth: "6rem" }} />*/}
      {/*    <div style={{ flex: 4, fontSize: "1rem", textAlign: "left", alignSelf: "center" }}>*/}
      {/*      <h2 style={{ lineHeight: "1rem" }}>*/}
      {/*        Barnet Pty Ltd*/}
      {/*      </h2>*/}
      {/*      <h2 style={{ lineHeight: "1rem" }}>*/}
      {/*        Junior Software Engineer*/}
      {/*      </h2>*/}
      {/*      <h2 style={{ lineHeight: "1rem", fontWeight: 300 }}>*/}
      {/*        2021 - Present*/}
      {/*      </h2>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div style={{ display: "flex", flexDirection: "row", gap: "4rem", margin: "2rem 3rem" }}>*/}
      {/*    <StaticImage src={"../images/volt.png"} alt={""}*/}
      {/*                 style={{ flex: 1, maxWidth: "9rem", minWidth: "7rem" }} />*/}
      {/*    <div style={{ flex: 4, fontSize: "1rem", textAlign: "left", alignSelf: "center" }}>*/}
      {/*      <h2 style={{ lineHeight: "1rem" }}>*/}
      {/*        Volt Bank*/}
      {/*      </h2>*/}
      {/*      <h2 style={{ lineHeight: "1rem" }}>*/}
      {/*        IT Operations Intern*/}
      {/*      </h2>*/}
      {/*      <h2 style={{ lineHeight: "1rem", fontWeight: 300 }}>*/}
      {/*        2022*/}
      {/*      </h2>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <a style={{ margin: "1rem 3rem", textAlign: "right" }}>*/}
      {/*    Find out more*/}
      {/*  </a>*/}
      {/*</div>*/}

      {/*<div style={{*/}
      {/*  display: "flex",*/}
      {/*  flexDirection: "column",*/}
      {/*  background: "#eff6ff",*/}
      {/*  // #e6f1ff*/}
      {/*  padding: "1rem",*/}
      {/*  borderRadius: "1rem"*/}
      {/*}}>*/}
      {/*  <h1 style={{ margin: "1rem 3rem" }}>*/}
      {/*    <b>Projects</b>*/}
      {/*  </h1>*/}
      {/*  <div style={{ display: "flex", flexDirection: "row", gap: "4rem", margin: "2rem 3rem" }}>*/}
      {/*    <StaticImage src={"../images/csesoc.png"} alt={""}*/}
      {/*                 style={{ flex: 1, maxWidth: "9rem", minWidth: "8rem" }} />*/}
      {/*    <div style={{ flex: 4, fontSize: "1rem", textAlign: "left", alignSelf: "center" }}>*/}
      {/*      <h2 style={{ lineHeight: "1rem" }}>*/}
      {/*        Freerooms*/}
      {/*      </h2>*/}
      {/*      <h2 style={{ lineHeight: "1rem" }}>*/}
      {/*        Project Lead*/}
      {/*      </h2>*/}
      {/*      <h2 style={{ lineHeight: "1rem", fontWeight: 300 }}>*/}
      {/*        2022*/}
      {/*      </h2>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div style={{ display: "flex", flexDirection: "row", gap: "4rem", margin: "2rem 3rem" }}>*/}
      {/*    <StaticImage src={"../images/fintech-sig.png"} alt={""}*/}
      {/*                 style={{ flex: 1, maxWidth: "9rem", minWidth: "8rem" }} />*/}
      {/*    <div style={{ flex: 4, fontSize: "1rem", textAlign: "left", alignSelf: "center" }}>*/}
      {/*      <h2 style={{ lineHeight: "1rem" }}>*/}
      {/*        Algothon*/}
      {/*      </h2>*/}
      {/*      <h2 style={{ lineHeight: "1rem" }}>*/}
      {/*        Fintech Events Director*/}
      {/*      </h2>*/}
      {/*      <h2 style={{ lineHeight: "1rem", fontWeight: 300 }}>*/}
      {/*        2022*/}
      {/*      </h2>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <a style={{ margin: "1rem 3rem", textAlign: "right" }}>*/}
      {/*    Find out more*/}
      {/*  </a>*/}
      {/*</div>*/}

    </div>

  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
