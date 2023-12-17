import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../styles/index.module.css";
import Video from "../images/flash.mp4"

const IndexPage = () => (
  <Layout>
    <video autoPlay loop muted playsInline style={{width: "100vw", paddingBottom: "10rem", objectFit: "cover"}}>
      <source src={Video}/>
    </video>
    <Seo title="Home" />
    <div className={styles.container} style={{ display: "flex", flexDirection: "column" }}>
      <div className={`${styles.hero} ${styles.child}`} style={{ display: "flex", width: "100%" }}>
        <div className={styles.persona}>
          <StaticImage
            src="../images/IMG_3192.jpeg"
            loading="eager"
            placeholder="blurred"
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt=""
            id="profile-photo"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "500px",
              marginTop: "auto",
              marginBottom: "auto",
              borderRadius: "1rem"
            }}
          />
        </div>
        <div className={styles.pad} style={{
          position: "relative",
          left: 0,
          right: 0,
          top: "-3rem",
          zIndex: "20",
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "center",
          paddingTop: "2rem",
          width: "100%",
          maxWidth: "700px",
          textAlign: "center"
        }}>
                <span className={"logo title"}>
                    Bob Chen
                </span>
          <h1 className={"subtitle"}>
            <b>Sydney based student-dev</b> <br />
            <b>with a broad tech and law interest</b>
          </h1>
        </div>
        <div className={styles.pad} style={{
          display: "flex",
          padding: "3rem",
          margin: "auto",
          maxWidth: "700px",
          width: "100%",
          flexDirection: "column",
          gap: "2rem"
        }}>
          <div className={styles.greeting}>
            <div style={{
              display: "flex",
              fontSize: "2rem",
              color: "#004ca3",
              fontWeight: 600,
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
              width: "100%",
              fontWeight: 300,
              textAlign: "left"
            }}>
              Welcome to my profile. <br/>I am currently an undergraduate student at UNSW and an aspiring developer-lawyer with a wide set of interests.
              <br/><br/>
              Besides tech and law, I like to be well read, well informed and well travelled. I take particular interest in social issues through following politics, economics and government policy closely.
              <br/><br/>
              I hope you find my portfolio interesting!
            </h1>
          </div>
          <div className={`${styles.table} table-row`}>
            <div style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: "2rem",
              flex: 4,
              alignItems: "center"
            }}>
              <svg style={{ width: "3rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004ca3"
                   className="w-6 h-6">
                <path fill-rule="evenodd"
                      d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z"
                      clip-rule="evenodd" />
                <path
                  d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
              </svg>
              <span  className={"logo title"} style={{fontSize: "2rem"}}>
                Digital CV
              </span>
            </div>
            <a
              href={"/interactive-cv"}
              style={{
                fontSize: `var(--font-lg)`,
                textDecoration: `none`,
                border: "solid",
                borderColor: "#004ca3",
                color: "#004ca3",
                display: "flex",
                alignItems: "center",
                justifyContent: 'center',
                borderRadius: "10px",
                flex: 1
              }}
            >
              View
            </a>
          </div>
          <div className={`${styles.table} table-row`}>
            <div style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: "2rem",
              flex: 4,
              alignItems: "center"
            }}>
              <svg style={{ width: "3rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004ca3" className="w-6 h-6">
                <path
                  d="M16.881 4.346A23.112 23.112 0 018.25 6H7.5a5.25 5.25 0 00-.88 10.427 21.593 21.593 0 001.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.592.772-2.468a17.116 17.116 0 01-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0018 11.25c0-2.413-.393-4.735-1.119-6.904zM18.26 3.74a23.22 23.22 0 011.24 7.51 23.22 23.22 0 01-1.24 7.51c-.055.161-.111.322-.17.482a.75.75 0 101.409.516 24.555 24.555 0 001.415-6.43 2.992 2.992 0 00.836-2.078c0-.806-.319-1.54-.836-2.078a24.65 24.65 0 00-1.415-6.43.75.75 0 10-1.409.516c.059.16.116.321.17.483z" />
              </svg>
              <span className={"logo title"} style={{fontSize: "2rem"}}>
                Features
              </span>
            </div>
            <a
              href={"/features"}
              style={{
                fontSize: `var(--font-lg)`,
                textDecoration: `none`,
                border: "solid",
                borderColor: "#004ca3",
                color: "#004ca3",
                display: "flex",
                alignItems: "center",
                justifyContent: 'center',
                borderRadius: "10px",
                flex: 1
              }}
            >
              View
            </a>
          </div>
          <div className={`${styles.table} table-row`}>
            <div style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: "2rem",
              flex: 4,
              alignItems: "center"
            }}>
              <svg style={{ width: "3rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004ca3" className="w-6 h-6">
                <path
                  d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                <path fill-rule="evenodd"
                      d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
                      clip-rule="evenodd" />
              </svg>
              <span className={"logo title"} style={{fontSize: "2rem"}}>
                Essays
              </span>
            </div>
            <a
              href={"/essays"}
              style={{
                fontSize: `var(--font-lg)`,
                textDecoration: `none`,
                border: "solid",
                borderColor: "#004ca3",
                color: "#004ca3",
                display: "flex",
                alignItems: "center",
                justifyContent: 'center',
                borderRadius: "10px",
                flex: 1
              }}
            >
              View
            </a>
          </div>
        </div>
      </div>
    </div>

  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
