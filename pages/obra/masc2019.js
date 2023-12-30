import React, {useState, useEffect} from "react"
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";
import Layout from "../../components/layout"
import styles from "../../styles/obra.module.css";
import {Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import i14 from "/public/images/mascaras-2019/2.jpg";
import i15 from "/public/images/mascaras-2019/3.jpg";
import i17 from "/public/images/mascaras-2019/5.jpg";
import i18 from "/public/images/mascaras-2019/6.jpg";
import i19 from "/public/images/mascaras-2019/7.jpg";
import i20 from "/public/images/mascaras-2019/8.jpg";
import i21 from "/public/images/mascaras-2019/9.jpg";
import i22 from "/public/images/mascaras-2019/10.jpg";
import i23 from "/public/images/mascaras-2019/11.jpg";
import i24 from "/public/images/mascaras-2019/12.jpg";
import i25 from "/public/images/mascaras-2019/13.jpg";
import i26 from "/public/images/mascaras-2019/14.jpg";
import i27 from "/public/images/mascaras-2019/15.jpg";
import i28 from "/public/images/mascaras-2019/16.jpg";
import i29 from "/public/images/mascaras-2019/17.jpg";
import i30 from "/public/images/mascaras-2019/18.jpg";

const masc2019 = [
    {src: i14, text: "Máscara de burro 1"},
    {src: i15, text: "Máscara de burro 2"},
    {src: i17, text: "Máscara de árbol"},
    {src: i18, text: "Máscara de winipú"},
    {src: i19, text: "Máscara de rana"},
    {src: i20, text: "Máscara de teatro 2"},
    {src: i21, text: "Máscara de teatro 1"},
    {src: i22, text: "Máscara de humano"},
    {src: i23, text: "Máscara de abulón 2"},
    {src: i24, text: "Máscara de abulón 1 "},
    {src: i25, text: "Máscara de abulón 1"},
    {src: i26, text: "Máscara de pescao"},
    {src: i27, text: "Máscara de pájaro carpintero"},
    {src: i28, text: "Máscara de chango"},
    {src: i30, text: "Cuemanco 1"},
    {src: i29, text: "Cuemanco 2 "},
  ];

const Masc2019 = () => {
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
                {masc2019.map((img, i) => (<img 
                      onClick={handleShow(i)}
                      src={(img.src).src} 
                      className={styles.obraGridItem}
                  />)
                )}
            </div>
            {windowSize.width > 2000 ? (
                <Modal centered size="lg" show={show !== false} onHide={handleShow(false)}>
                  <img src={masc2019[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{masc2019[show]?.text}</p>
                  </div>
                </Modal>
              ):(
                <Modal centered size="xs" show={show !== false} onHide={handleShow(false)}>
                  <img src={masc2019[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{masc2019[show]?.text}</p>
                  </div>
                </Modal>
              )}
        </div>

    </Layout>  )
}

export default Masc2019