import React, {useState, useEffect} from "react"
import useWindowSize from "../hooks/useWindowSize";
import Layout from "../components/layout"
import styles from "../styles/obra.module.css";
import {Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import i1 from "/public/images/charcoals/Sonar detalle.jpg";
import i2 from "/public/images/charcoals/sonar.jpg";
import i3 from "/public/images/charcoals/trinidad.jpg";
import i4 from "/public/images/charcoals/triste-ereccion-detalle.jpg";
import i5 from "/public/images/charcoals/tristeerexión.jpg";
import i6 from "/public/images/masa/2.jpg";
import i7 from "/public/images/masa/3.jpg";
import i8 from "/public/images/masa/vfrvrt.jpg";
import i9 from "/public/images/masa/sdfasdfasf.jpg";
import i10 from "/public/images/masa/segundo-sacramento.jpg";
import i11 from "/public/images/masa/servicio.jpg";
import i12 from "/public/images/masa/tequiero.jpg";
import i13 from "/public/images/masa/tracksuit.jpg";
import i14 from "/public/images/mascaras-2019/2.jpg";
import i15 from "/public/images/mascaras-2019/3.jpg";
import i16 from "/public/images/mascaras-2019/4.jpg";
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
import i31 from "/public/images/son-de-aqui/1.jpg";
import i32 from "/public/images/son-de-aqui/2.jpg";
import i33 from "/public/images/son-de-aqui/3.jpg";
import i34 from "/public/images/son-de-aqui/4.jpg";
import i35 from "/public/images/son-de-aqui/5.jpg";
import i36 from "/public/images/son-de-aqui/6.jpg";
import i37 from "/public/images/turno-vespertino/1.jpg";
import i38 from "/public/images/turno-vespertino/2.jpg";
import i39 from "/public/images/turno-vespertino/3.jpg";

const imgMap = [
  {src: i1, text: "obra asi muy padre"},
  {src: i2, text: ""},
  {src: i3, text: ""},
  {src: i4, text: ""},
  {src: i5, text: ""},
  {src: i6, text: ""},
  {src: i7, text: ""},
  {src: i8, text: ""},
  {src: i9, text: ""},
  {src: i10, text: ""},
  {src: i11, text: ""},
  {src: i12, text: ""},
  {src: i13, text: ""},
  {src: i14, text: ""},
  {src: i15, text: ""},
  {src: i16, text: ""},
  {src: i17, text: ""},
  {src: i18, text: ""},
  {src: i19, text: ""},
  {src: i20, text: ""},
  {src: i21, text: ""},
  {src: i23, text: ""},
  {src: i24, text: ""},
  {src: i25, text: ""},
  {src: i26, text: ""},
  {src: i27, text: ""},
  {src: i28, text: ""},
  {src: i29, text: ""},
  {src: i30, text: ""},
  {src: i31, text: ""},
  {src: i32, text: ""},
  {src: i33, text: ""},
  {src: i34, text: ""},
  {src: i35, text: ""},
  {src: i36, text: ""},
  {src: i37, text: ""},
  {src: i38, text: ""},
  {src: i39, text: ""},
];



const Work = () => {
    const windowSize = useWindowSize();
    const [show, setShow] = useState(false);
    const handleShow = (val) => () => setShow(val);
  return (

    <Layout>
        <div className={styles.obraMainDiv}>
          <div className={styles.categoryNavDiv}>
            <div className={styles.categoryButton}><p>carboncillos</p></div>
            <div className={styles.categoryButton}><p>máscaras 2019</p></div>
            <div className={styles.categoryButton}><p>máscaras de piedra</p></div>
            <div className={styles.categoryButton}><p>sacramentos (masa galería)</p></div>
            <div className={styles.categoryButton}><p>turno vespertino</p></div>
          </div>
          <div className={styles.obraContainer}>
            {imgMap.map((img, i) => (<img 
                      onClick={handleShow(i)}
                      src={(img.src).src} 
                      className={styles.obraGridItem}
                  />)
              )}
          </div>
          <Modal centered size="xs" show={show !== false} onHide={handleShow(false)}>
              <img src={imgMap[show]?.src.src} className="modalImage"/>
              <div className={styles.modalBottomDiv}>
                <p className={styles.obraInfo}>{imgMap[show]?.text}</p>
              </div>
          </Modal>
        </div>
        {/* {windowSize.width > 752 ? (
            <div></div>
        ):(
            <div></div>
        )} */}
    </Layout>
  )
}

export default Work