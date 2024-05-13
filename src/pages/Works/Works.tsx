import React from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Works.module.scss";
import GalleryWorks from "../../components/GalleryWorks/GalleryWorks";

const Works: React.FC = () => (
  <Layout>
    <div className={styles.works}>
      <GalleryWorks />
    </div>
  </Layout>
);

export default Works;
