import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Actions from "../components/actions";
import * as styles from "../styles/index.module.css";

const SecondPage = () => (
  <Layout>
    <h1 style={{ textAlign: "center", margin: "6vh 0", fontSize: "4rem" }}>Interactive CV</h1>
    <div style={{ display: "flex", flexDirection: "column", gap: "10vh", marginBottom: "10vh" }}>
      <div className={styles.child}>
        <Actions></Actions>
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Interactive CV - Bob Chen" />;

export default SecondPage;
