import React, {useState, useEffect} from "react"
import Link from "next/link";
import Layout from "../../components/layout"
import styles from "../../styles/obra.module.css";

const Work = () => {

  return (

    <Layout>
        <div className={styles.obraMainDiv}>
          <div className={styles.categoryNavDiv}>
            <Link className={styles.categoryButton} href={"obra/carboncillos"}><p>carboncillos</p></Link>
            <Link className={styles.categoryButton} href={"obra/masc2019"}><p>máscaras 2019</p></Link>
            <Link className={styles.categoryButton} href={"obra/mascaras-piedra"}><p>máscaras de piedra</p></Link>
            <Link className={styles.categoryButton} href={"obra/sacramentos"}><p>sacramentos</p></Link>
            <Link className={styles.categoryButton} href={"obra/vespertino"}><p>turno vespertino</p></Link>
          </div>
        </div>

    </Layout>
  )
}

export default Work