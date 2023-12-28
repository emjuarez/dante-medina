import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import useWindowSize from "../../hooks/useWindowSize";
import MenuIcon from "../../public/images/icons/menu.png"
import Close from "../../public/images/icons/cerrar.png"
import Ig from "../../public/images/icons/instagram.png"

const Header = (props) => {
    const windowSize = useWindowSize();
    const [nav, setNav] = useState(false);

  return (
    <>
    {windowSize.width > 752 ? (

        <div className={styles.desktopMainDiv}>
            <Link href={"/"} className={styles.pageTitle}>Dante Medina</Link>
            <div className={styles.deskNav}>
                <Link href={"/obra"} className={styles.headerLink}>obra</Link>
                <Link href={"/acerca"} className={styles.headerLink}>acerca de</Link>
                <Link target="_blank" href={"https://www.instagram.com/sacramento_medina/"} className={styles.igLogo}><img src={Ig.src}/></Link>
            </div>
        </div>

    ):(
        <>


        <div className={styles.mobileMainDiv}>

          <div className={styles.headerTag}>
            <Link href="/" className={styles.pageTitle}>Dante Medina</Link>
            <img
                className={styles.menuOutlined}
                src={MenuIcon.src}
                onClick={() => setNav(!nav)}
            />
          </div>
          {nav ? (
            <div className={styles.mobileNav}>
              <div className={styles.closeMenuDiv}>
                <img src={Close.src} onClick={() => setNav(!nav)} className={styles.closeMenu}/>
              </div>
              <div className={styles.navLinksDiv}>
                <Link href={"/"} className={styles.headerLink}>inicio</Link>
                <Link href={"/obra"} className={styles.headerLink}>obra</Link>
                <Link href={"/acerca"} className={styles.headerLink}>acerca de</Link>
              </div>
              <Link target="_blank" href={"https://www.instagram.com/sacramento_medina/"} className={styles.igLogo}>
                <img src={Ig.src}/>
              </Link>

            </div>
          ) : null}
        </div>
        </>

    )}

    </>
  )
}

export default Header;