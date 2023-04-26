import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../styles/index.module.css";
import Actions from "../components/actions";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.container} style={{ display: "flex", flexDirection: "column" }}>
      <div className={`${styles.hero} ${styles.child}`}>
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
              maxWidth: "17rem",
              marginTop: "auto",
              marginBottom: "auto",
              borderRadius: "1rem"
            }}
          />
          <div style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "2rem"
          }}>
                <span className={"logo title"}>
                    Bob Chen
                </span>
            <h1>
              <b>Sydney based student/dev</b> <br />
              <b>with a broad tech and legal interest</b>
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
            Welcome to my profile. Currently an undergraduate student, I am an aspiring developer and generalist with wide ranging interests. Besides tech, I have strong interests in legal and social theories, and I hope to efficiently and pragmatically create positive impacts wherever I work. <br /><br /> Find my overview below.
          </h1>
        </div>
      </div>

      <div className={styles.child}>
        <Actions></Actions>
      </div>
    </div>

  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
