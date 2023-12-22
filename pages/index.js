import React from 'react'
import useWindowSize from "../hooks/useWindowSize";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout"

const index = () => {
  const windowSize = useWindowSize();

  return (
    <Layout>
      <div className={styles.homeMainDiv}>

      </div>
    </Layout>

  )
}

export default index

