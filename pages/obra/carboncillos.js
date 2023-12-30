import React, {useState, useEffect} from "react"
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";
import Layout from "../../components/layout"
import styles from "../../styles/obra.module.css";
import {Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import i1 from "/public/images/charcoals/Sonar detalle.jpg";
import i2 from "/public/images/charcoals/sonar.jpg";
import i3 from "/public/images/charcoals/trinidad.jpg";
import i4 from "/public/images/charcoals/triste-ereccion-detalle.jpg";
import i5 from "/public/images/charcoals/tristeerexión.jpg";


const carboncillos = [
    {src: i2, text: "Sonar"},
    {src: i1, text: "Sonar (detalle)"},
    {src: i3, text: "Trinidad"},
    {src: i5, text: "Triste erexión"},
    {src: i4, text: "Triste erexión (detalle)"},
  ];

const Carboncillos = () => {
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
                {carboncillos.map((img, i) => (<img 
                      onClick={handleShow(i)}
                      src={(img.src).src} 
                      className={styles.obraGridItem}
                  />)
                )}
            </div>
            {windowSize.width > 2000 ? (
                <Modal centered size="lg" show={show !== false} onHide={handleShow(false)}>
                  <img src={carboncillos[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{carboncillos[show]?.text}</p>
                  </div>
                </Modal>
              ):(
                <Modal centered size="xs" show={show !== false} onHide={handleShow(false)}>
                  <img src={carboncillos[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{carboncillos[show]?.text}</p>
                  </div>
                </Modal>
              )}
        </div>

    </Layout>
  )
}

export default Carboncillos