import React, {useState, useEffect} from "react"
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";
import Layout from "../../components/layout"
import styles from "../../styles/obra.module.css";
import {Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import i6 from "/public/images/masa/2.jpg";
import i7 from "/public/images/masa/3.jpg";
import i8 from "/public/images/masa/vfrvrt.jpg";
import i9 from "/public/images/masa/sdfasdfasf.jpg";
import i10 from "/public/images/masa/segundo-sacramento.jpg";
import i11 from "/public/images/masa/servicio.jpg";
import i12 from "/public/images/masa/tequiero.jpg";
import i13 from "/public/images/masa/tracksuit.jpg";
import i14 from "/public/images/masa/6.png"
import i15 from "/public/images/masa/6-detalle.png"
import i16 from "/public/images/masa/uncion.png"
import i17 from "/public/images/masa/Unción detalle.png"

const sacramentos = [
    {src: i7, text: "Caso Nash"},
    {src: i6, text: "Caso Nash (detalle)"},
    {src: i8, text: "Sacramentos, masa galeria, 2023"},
    {src: i9, text: "Sacramentos, masa galeria, 2023"},
    {src: i10, text: "Segundo sacramento"},
    {src: i11, text: "Servicio"},
    {src: i12, text: "Te quiero"},
    {src: i13, text: "Tracksuit lovers"},
    {src: i14, text: "6"},
    {src: i15, text: "6 (Detalle)"},
    {src: i16, text: "Unción de los enfermos"},
    {src: i17, text: "Unción de los enfermos (detalle)"},
  ];

const Sacramentos = () => {
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
                {sacramentos.map((img, i) => (<img 
                      onClick={handleShow(i)}
                      src={(img.src).src} 
                      className={styles.obraGridItem}
                  />)
                )}
            </div>
            {windowSize.width > 2000 ? (
                <Modal centered size="lg" show={show !== false} onHide={handleShow(false)}>
                  <img src={sacramentos[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{sacramentos[show]?.text}</p>
                  </div>
                </Modal>
              ):(
                <Modal centered size="xs" show={show !== false} onHide={handleShow(false)}>
                  <img src={sacramentos[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{sacramentos[show]?.text}</p>
                  </div>
                </Modal>
              )}
        </div>

    </Layout>  )
}

export default Sacramentos