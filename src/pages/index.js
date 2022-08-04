import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
    <Layout>
        <Seo title="Home"/>
        <div style={{display: "flex", flexDirection: "column"}}>
            <div className={styles.textCenter} style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "1rem",
                borderRadius: "1rem",
                position: "fixed",
                top: "20vh"
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
                        marginLeft: "auto",
                        marginRight: "auto",
                        maxWidth: "15rem",
                        marginTop: "auto",
                        marginBottom: "auto",
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
                        <b>Law and Computer Science Student</b> <br/>
                        <b>Aspiring developer and lawyer</b>
                    </h1>
                </div>
            </div>

            <div style={{
                width: "50%",
                position: "absolute",
                right: "5vw",
                top: "17vh",
                display: "flex",
                flexDirection: "column",
                gap: "2rem"
            }}>
                <div className={styles.textCenter} style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "#e6f1ff",
                    padding: "1rem",
                    borderRadius: "1rem",
                }}>
                    <span style={{fontSize: "4rem", fontWeight: 150, color: "#004ca3"}}>
                        {new Date().getHours() < 2 ? <p>Hi there, you're up late!</p> : new Date().getHours() < 6 ?
                            <p>Hi there, you're up early!</p> : new Date().getHours() < 12 ?
                                <p>Good Morning</p> : new Date().getHours() < 17 ? <p> Good Afternoon</p> :
                                    <p>Good Evening</p>
                        }
                    </span>
                    <h1 style={{fontSize: "1.6rem", color: "#004ca3", padding: "0 5vw"}}>
                        Based in Sydney, I am a double major uni student interested in a broad range
                        of disciplines. <br/><br/> I hope you can follow this showcase and get to know me and my work
                        better.
                    </h1>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "#eff6ff",
                    // #e6f1ff
                    padding: "1rem",
                    borderRadius: "1rem"
                }}>
                    <h1 style={{margin: "1rem 3rem"}}>
                        <b>Education</b>
                    </h1>
                    <div style={{display: "flex", flexDirection: "row", gap: "4rem", margin: "0 3rem"}}>
                        <StaticImage src={"../images/unsw.jpeg"} alt={""} style={{flex: 1}}/>
                        <div style={{flex: 4, fontSize: "0.8rem", textAlign: "left", alignSelf: "center"}}>
                            <h2 style={{lineHeight: "1rem"}}>
                                Bachelor of Laws
                            </h2>
                            <h2 style={{lineHeight: "1rem"}}>
                                Bachelor of Science (Computer Science)
                            </h2>
                            <h2 style={{lineHeight: "1rem", fontWeight: 300}}>
                                2025 Completion
                            </h2>
                        </div>
                    </div>
                    <a style={{margin: "1rem 3rem", textAlign: "right"}}>
                        Find out more
                    </a>
                </div>
            </div>
        </div>

    </Layout>
)

export const Head = () => <Seo title="Home"/>

export default IndexPage
