import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Home.module.scss";
import Spinner from "../../components/Spinner/Spinner";

const Home: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <div>
      {!imageLoaded && <Spinner />}
      <Layout>
        <div className={styles.home}>
          <p className={styles.email}>collabs@lizabalizka.com</p>
          <div className={styles.portfolioBlock}>
            <p className={styles.portfolio_first}>PORTFOLIO</p>
            <p className={styles.portfolio_second}>PORTFOLIO</p>
            <div className={styles.mainGrid}>
              <div className={styles.mainBlock}>
                <div className={styles.infoBlock}>
                  <p className={styles.info}>
                    I'm Liza, a stylist and fashion influencer based between
                    Odesa and Kyiv.
                    <br />I have more than 800 clients from all over the world.
                    I analyze the wardrobe, conduct consultations and create
                    personal capsules.
                  </p>
                </div>
                <div className={styles.imageBlock}>
                  <img
                    alt="Stylist photo"
                    src="./stylist.png"
                    onLoad={handleImageLoad}
                  />
                </div>
              </div>
              <div className={styles.gridText}>
                <div className={styles.first_grid}></div>
                <div className={styles.second_grid}>
                  <p className={styles.name}>LIZA BALIZKA</p>
                  <p className={styles.position}>
                    Stylist & Fashion Influencer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
