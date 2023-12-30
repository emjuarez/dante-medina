import React, {useState, useEffect} from "react"
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";
import Layout from "../../components/layout"
import styles from "../../styles/obra.module.css";
import {Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import i37 from "/public/images/turno-vespertino/1.jpg";
import i38 from "/public/images/turno-vespertino/2.jpg";
import i39 from "/public/images/turno-vespertino/3.jpg";

const vespertino = [
    {src: i37, text: "Turno Vespertino 1"},
    {src: i39, text: "Turno Vespertino 2"},
    {src: i38, text: "Turno Vespertino 3"},
  ];

const Vespertino = () => {
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
                {vespertino.map((img, i) => (<img 
                      onClick={handleShow(i)}
                      src={(img.src).src} 
                      className={styles.obraGridItem}
                  />)
                )}
            </div>
            {windowSize.width > 2000 ? (
                <Modal centered size="lg" show={show !== false} onHide={handleShow(false)}>
                  <img src={vespertino[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{vespertino[show]?.text}</p>
                  </div>
                </Modal>
              ):(
                <Modal centered size="xs" show={show !== false} onHide={handleShow(false)}>
                  <img src={vespertino[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{vespertino[show]?.text}</p>
                  </div>
                </Modal>
              )}
        </div>

    </Layout>  )
}

export default Vespertino