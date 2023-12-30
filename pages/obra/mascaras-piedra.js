import React, {useState, useEffect} from "react"
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";
import Layout from "../../components/layout"
import styles from "../../styles/obra.module.css";
import {Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import i31 from "/public/images/son-de-aqui/1.jpg";
import i32 from "/public/images/son-de-aqui/2.jpg";
import i33 from "/public/images/son-de-aqui/3.jpg";
import i34 from "/public/images/son-de-aqui/4.jpg";
import i35 from "/public/images/son-de-aqui/5.jpg";
import i36 from "/public/images/son-de-aqui/6.jpg";

const mascPiedra = [
    {src: i31, text: "Máscaras de piedra, Son de aquí, 2023"},
    {src: i32, text: "Máscara de piedra 1"},
    {src: i36, text: "Máscara de piedra 2"},
    {src: i35, text: "Máscara de piedra 3"},
    {src: i33, text: "Máscara de piedra 5"},
    {src: i34, text: "Máscara de piedra 4"},
  ];

const MascPiedra = () => {
    const windowSize = useWindowSize();
    const [show, setShow] = useState(false);
    const handleShow = (val) => () => setShow(val);

  return (
    <Layout>
        <div className={styles.obraMainDiv}>
            <div className={styles.gobackDiv}>
                <Link href={"javascript:history.back()"} className={styles.obraInfo}>volver</Link>
            </div>
            <div className={styles.obraContainer}>
                {mascPiedra.map((img, i) => (<img 
                      onClick={handleShow(i)}
                      src={(img.src).src} 
                      className={styles.obraGridItem}
                  />)
                )}
            </div>
            {windowSize.width > 2000 ? (
                <Modal centered size="lg" show={show !== false} onHide={handleShow(false)}>
                  <img src={mascPiedra[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{mascPiedra[show]?.text}</p>
                  </div>
                </Modal>
              ):(
                <Modal centered size="xs" show={show !== false} onHide={handleShow(false)}>
                  <img src={mascPiedra[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{mascPiedra[show]?.text}</p>
                  </div>
                </Modal>
              )}
        </div>

    </Layout>  )
}

export default MascPiedra