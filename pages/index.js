import React from 'react'
import useWindowSize from "../hooks/useWindowSize";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout"
import PiezaHome from "/public/images/masa/2.jpg"

const index = () => {
  const windowSize = useWindowSize();

  return (
    <Layout>
      <div className={styles.homeMainDiv}>
        <img src={PiezaHome.src} className={styles.homeImage}/>
      </div>
    </Layout>

  )
}

export default index

