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
            <p className={styles.infoText}>21 de abril de 1994, México.</p>
            <p className={styles.infoText}>
              Su obra se compone principalmente de pintura, escultura y creación de máscaras. Su trabajo explora
              experiencias relativas a la salud mental y la cotidianidad de las relaciones sociales; uno en el trabajo, uno en
              pareja, uno con los amigos, ya que cree que cuanto más íntimas sean las imágenes que produce, mayores son
              las posibilidades de conectar con la sensibilidad del espectador. Ha trabajado como pintor en la producción de
              "Sex, pudor y lágrimas 2" y "No son horas de olvidar". Además, cuenta con 10 años de experiencia enseñando
              clases privadas de pintura a todos los niveles.
            </p>
            <div className={styles.exposDiv}>
              <p className={styles.resumeName}>Exposiciones colectivas</p>
              <p className={styles.infoText}>2023- Entrelazamiento, MASA, Ciudad de México, México.</p>
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