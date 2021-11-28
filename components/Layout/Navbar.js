import Image from "next/image";
import styles from "styles/Home.module.scss";
import NavigationButton from "./NavigationButton";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const linksRef = useRef(null);
  const router = useRouter();

  const [windowWidth, setWindowWidth] = useState();

  const handleToggleMenu = (e) => {
    if (
      linksRef.current.style.display === "none" ||
      linksRef.current.style.display === ""
    )
      linksRef.current.style.display = "flex";
    else linksRef.current.style.display = "none";
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) linksRef.current.style.display = "flex";
  }, [router.pathname, windowWidth]);

  useEffect(() => {
    if (window.innerWidth < 1024) linksRef.current.style.display = "none";
  }, [router.pathname, windowWidth]);

  return (
    <nav className={styles.mainNav}>
      <div className={styles.logo}>
        <div className={styles.mobileMenuButton} onClick={handleToggleMenu}>
          <FontAwesomeIcon className={styles.dropdownIcon} icon={faBars} />
        </div>
        <Link href="/">
          <img src="/logo.png" alt="logo" />
        </Link>
      </div>
      <div className={styles.allLinks} ref={linksRef}>
        <NavigationButton
          parentLink=""
          link=""
          content="O nas"
          isAside={false}
          dropdowns={[]}
        />
        <NavigationButton
          parentLink=""
          link="porady"
          content="Porady"
          isAside={false}
          dropdowns={[
            {
              link: "okiem-akwarysty",
              content: "Okiem akwarysty",
              isAside: true,
              dropdowns: [],
            },
            {
              link: "nasi-pupile",
              content: "Nasi Pupile",
              isAside: true,
              dropdowns: [
                {
                  link: "pies",
                  content: "Pies",
                  isAside: true,
                  dropdowns: [],
                },
                {
                  link: "kot",
                  content: "Kot",
                  isAside: true,
                  dropdowns: [],
                },
                {
                  link: "inne",
                  content: "Inne",
                  isAside: true,
                  dropdowns: [],
                },
              ],
            },
          ]}
        />
        <NavigationButton
          parentLink=""
          link="galeria"
          content="Galeria"
          isAside={false}
          dropdowns={[]}
        />
        <NavigationButton
          parentLink=""
          link="kontakt"
          content="Kontakt"
          isAside={false}
          dropdowns={[]}
        />
      </div>
    </nav>
  );
};

export default Navbar;
