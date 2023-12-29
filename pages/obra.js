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
  {src: i2, text: "Sonar"},
  {src: i1, text: "Sonar (detalle)"},
  {src: i3, text: "Trinidad"},
  {src: i5, text: "Triste erexión"},
  {src: i4, text: "Triste erexión (detalle)"},
  {src: i7, text: "Caso Nash"},
  {src: i6, text: "Caso Nash (detalle)"},
  {src: i8, text: "Sacramentos, masa galeria, 2023"},
  {src: i9, text: "Sacramentos, masa galeria, 2023"},
  {src: i10, text: "Segundo sacramento"},
  {src: i11, text: "Servicio"},
  {src: i12, text: "Te quiero"},
  {src: i13, text: "Tracksuit lovers"},
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
  {src: i31, text: "Máscaras de piedra, Son de aquí, 2023"},
  {src: i32, text: "Máscara de piedra 1"},
  {src: i36, text: "Máscara de piedra 2"},
  {src: i35, text: "Máscara de piedra 3"},
  {src: i33, text: "Máscara de piedra 5"},
  {src: i34, text: "Máscara de piedra 4"},
  {src: i37, text: "Turno Vespertino 1"},
  {src: i39, text: "Turno Vespertino 2"},
  {src: i38, text: "Turno Vespertino 3"},
];

const carboncillos = [
  {src: i2, text: "Sonar"},
  {src: i1, text: "Sonar (detalle)"},
  {src: i3, text: "Trinidad"},
  {src: i5, text: "Triste erexión"},
  {src: i4, text: "Triste erexión (detalle)"},
];

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

const mascPiedra = [
  {src: i31, text: "Máscaras de piedra, Son de aquí, 2023"},
  {src: i32, text: "Máscara de piedra 1"},
  {src: i36, text: "Máscara de piedra 2"},
  {src: i35, text: "Máscara de piedra 3"},
  {src: i33, text: "Máscara de piedra 5"},
  {src: i34, text: "Máscara de piedra 4"},
];

const sacramentos = [
  {src: i7, text: "Caso Nash"},
  {src: i6, text: "Caso Nash (detalle)"},
  {src: i8, text: "Sacramentos, masa galeria, 2023"},
  {src: i9, text: "Sacramentos, masa galeria, 2023"},
  {src: i10, text: "Segundo sacramento"},
  {src: i11, text: "Servicio"},
  {src: i12, text: "Te quiero"},
  {src: i13, text: "Tracksuit lovers"},
];

const vespertino = [
  {src: i37, text: "Turno Vespertino 1"},
  {src: i39, text: "Turno Vespertino 2"},
  {src: i38, text: "Turno Vespertino 3"},
];

const Work = () => {
    const windowSize = useWindowSize();
    const [show, setShow] = useState(false);
    const handleShow = (val) => () => setShow(val);
    const [active, setActive] = useState("gral")

  return (

    <Layout>
        <div className={styles.obraMainDiv}>
          <div className={styles.categoryNavDiv}>
            <div className={styles.categoryButton} onClick={()=> {setActive("gral")}}><p>todo</p></div>
            <div className={styles.categoryButton} onClick={()=> {setActive("carboncillos")}}><p>carboncillos</p></div>
            <div className={styles.categoryButton} onClick={()=> {setActive("masc2019")}}><p>máscaras 2019</p></div>
            <div className={styles.categoryButton} onClick={()=> {setActive("mascPiedra")}}><p>máscaras de piedra</p></div>
            <div className={styles.categoryButton} onClick={()=> {setActive("sacramentos")}}><p>sacramentos</p></div>
            <div className={styles.categoryButton} onClick={()=> {setActive("vespertino")}}><p>turno vespertino</p></div>
          </div>
          <div className={styles.obraContainer}>
          {active === "gral" && (<>
            {imgMap.map((img, i) => (<img 
                      onClick={handleShow(i)}
                      src={(img.src).src} 
                      className={styles.obraGridItem}
                  />)
              )}
          </>)}
          {active === "carboncillos" && (<>
            {carboncillos.map((img, i) => (<img 
                      onClick={handleShow(i)}
                      src={(img.src).src} 
                      className={styles.obraGridItem}
                  />)
              )}
          </>)}
          {active === "masc2019" && (<>
            {masc2019.map((img, i) => (<img 
                      onClick={handleShow(i)}
                      src={(img.src).src} 
                      className={styles.obraGridItem}
                  />)
              )}
          </>)}
          {active === "mascPiedra" && (<>
            {mascPiedra.map((img, i) => (<img 
                      onClick={handleShow(i)}
                      src={(img.src).src} 
                      className={styles.obraGridItem}
                  />)
              )}
          </>)}
          {active === "sacramentos" && (<>
            {sacramentos.map((img, i) => (<img 
                      onClick={handleShow(i)}
                      src={(img.src).src} 
                      className={styles.obraGridItem}
                  />)
              )}
          </>)}
          {active === "vespertino" && (<>
            {vespertino.map((img, i) => (<img 
                      onClick={handleShow(i)}
                      src={(img.src).src} 
                      className={styles.obraGridItem}
                  />)
              )}
          </>)}
          </div>

          {active ==="gral" && (<>
            {windowSize.width > 2000 ? (
              <Modal centered size="lg" show={show !== false} onHide={handleShow(false)}>
                <img src={imgMap[show]?.src.src} className={styles.modalImage}/>
                <div className={styles.modalBottomDiv}>
                  <p className={styles.obraInfo}>{imgMap[show]?.text}</p>
                </div>
              </Modal>
            ):(
              <Modal centered size="xs" show={show !== false} onHide={handleShow(false)}>
                <img src={imgMap[show]?.src.src} className={styles.modalImage}/>
                <div className={styles.modalBottomDiv}>
                  <p className={styles.obraInfo}>{imgMap[show]?.text}</p>
                </div>
              </Modal>
            )}
            </>)}
          {active ==="carboncillos" && (<>
            {windowSize.width > 2000 ? (
                <Modal centered size="lg" show={show !== false} onHide={handleShow(false)}>
                  <img src={carboncillos[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{imgMap[show]?.text}</p>
                  </div>
                </Modal>
              ):(
                <Modal centered size="xs" show={show !== false} onHide={handleShow(false)}>
                  <img src={carboncillos[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{imgMap[show]?.text}</p>
                  </div>
                </Modal>
              )}
          </>)}
          {active ==="masc2019" && (<>
            {windowSize.width > 2000 ? (
                <Modal centered size="lg" show={show !== false} onHide={handleShow(false)}>
                  <img src={masc2019[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{imgMap[show]?.text}</p>
                  </div>
                </Modal>
              ):(
                <Modal centered size="xs" show={show !== false} onHide={handleShow(false)}>
                  <img src={masc2019[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{imgMap[show]?.text}</p>
                  </div>
                </Modal>
              )}
          </>)}
          {active ==="mascPiedra" && (<>
            {windowSize.width > 2000 ? (
                <Modal centered size="lg" show={show !== false} onHide={handleShow(false)}>
                  <img src={mascPiedra[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{imgMap[show]?.text}</p>
                  </div>
                </Modal>
              ):(
                <Modal centered size="xs" show={show !== false} onHide={handleShow(false)}>
                  <img src={mascPiedra[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{imgMap[show]?.text}</p>
                  </div>
                </Modal>
              )}
          </>)}
          {active ==="sacramentos" && (<>
            {windowSize.width > 2000 ? (
                <Modal centered size="lg" show={show !== false} onHide={handleShow(false)}>
                  <img src={sacramentos[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{imgMap[show]?.text}</p>
                  </div>
                </Modal>
              ):(
                <Modal centered size="xs" show={show !== false} onHide={handleShow(false)}>
                  <img src={sacramentos[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{imgMap[show]?.text}</p>
                  </div>
                </Modal>
              )}
          </>)}
          {active ==="vespertino" && (<>
            {windowSize.width > 2000 ? (
                <Modal centered size="lg" show={show !== false} onHide={handleShow(false)}>
                  <img src={vespertino[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{imgMap[show]?.text}</p>
                  </div>
                </Modal>
              ):(
                <Modal centered size="xs" show={show !== false} onHide={handleShow(false)}>
                  <img src={vespertino[show]?.src.src} className={styles.modalImage}/>
                  <div className={styles.modalBottomDiv}>
                    <p className={styles.obraInfo}>{imgMap[show]?.text}</p>
                  </div>
                </Modal>
              )}
          </>)}



        </div>

    </Layout>
  )
}

export default Work