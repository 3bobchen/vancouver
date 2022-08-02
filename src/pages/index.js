import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
    <Layout>
        <Seo title="Home"/>
        <div className={styles.textCenter} style={{
            display: "flex",
            justifyContent: "center",
            background: "#e6f1ff",
            padding: "1rem",
            borderRadius: "1rem"
        }}>
            <StaticImage
                src="../images/portrait-animated.png"
                loading="eager"
                placeholder="blurred"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                id="profile-photo"
                style={{
                    display: "block",
                    flex: 1,
                    marginLeft: "auto",
                    marginRight: "auto",
                    maxWidth: "20rem",
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
                alignItems: "center",
                flex: 2
            }}>
                <span className={"logo title"}>
                    Bob Chen
                </span>
                <h1>
                    <b>UNSW Law and Computer Science Student</b> <br/>
                    <b>Aspiring developer and lawyer</b>
                </h1>
            </div>
        </div>

    </Layout>
)

export const Head = () => <Seo title="Home"/>

export default IndexPage
