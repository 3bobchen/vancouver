import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

const SecondPage = () => (
  <Layout>
    <h1>Sorry</h1>
    <p>This creative projects page is still under construction!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export const Head = () => <Seo title="Page two" />;

export default SecondPage;
