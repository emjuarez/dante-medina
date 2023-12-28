import React from 'react'
import Layout from "../components/layout"
import styles from "../styles/acerca.module.css";


const About = () => {
  return (
    <Layout>
        <div className={styles.acercaMainDiv}>
          <div className={styles.bioDiv}>
            <h2 className={styles.infoTitle}>Bio</h2>
            <p className={styles.infoText}>
              Dante Medina es un artista multidisciplinario residente y
              originario de Ciudad de México que trabaja principalmente
              con pintura y con derivaciones de la plástica tales como talla
              en piedra y madera, creación de máscaras, props en silicón y
              algunas piezas funcionales. Intimidad, erotismo y misticismo
              son los elementos que más comúnmente impulsan su práctica.
            </p>
          </div>
          <div className={styles.cvDiv}>
            <h2 className={styles.infoTitle}>CV</h2>
            <h5 className={styles.resumeName}>Dante Medina Gómez</h5>
            <p className={styles.infoText}>April 21, 1994, Mexico.</p>
            <p className={styles.infoText}>
              Born in Mexico City, he studied Linguistics at Universidad Autónoma Metropolitana UAM I and
              Visual Arts at ENPEG "La Esmeralda". His work mainly consists of painting, sculpture, and masks
              making, although he has also dabbled in performance and video. His work delves into his own
              experiences with mental health and everyday life because he believes that the more intimate the images
              he produces are, the greater the chances of connecting with the viewer's sensitivity. He has worked as
              painter for the production of "Sex, pudor y lágrimas 2" and “No son horas de olvidar”. He also has a 10
              year experience in teaching private painting lessons at all levels.
            </p>
            <div className={styles.exposDiv}>
              <p className={styles.resumeName}>Collective shows</p>
              <p className={styles.infoText}>2023- Entanglement, MASA, Mexico City, Mexico.</p>
              <p className={styles.infoText}>2023- Son otros, Son de Aquí, Oaxaca, México.</p>
              <p className={styles.infoText}>2022- Socavón, Objeto Buffet, Oaxaca, Mexico.</p>
              <p className={styles.infoText}>2022- Cera, Son de Aquí, Oaxaca, Mexico.</p>
              <p className={styles.infoText}>2021- Estación Material, Material Art Fair, Yope Project Space, Guadalajara, Mexico.</p>
              <p className={styles.infoText}>2020- El fantasma del tiempo que nos horada, Yope Project Space, Oaxaca, Mexico.</p>
              <p className={styles.infoText}>2018- Oasis me arruinas, Temporal, Mexico City, Mexico.</p>
            </div>
          </div>
        </div>
    </Layout>

  )
}

export default About