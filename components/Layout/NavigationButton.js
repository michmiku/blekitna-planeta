import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import styles from "styles/Home.module.scss";

const NavigationButton = ({
  parentLink,
  link,
  content,
  isAside,
  dropdowns,
}) => {
  const [isToggled, setIsToggled] = useState(false);
  const [windowWidth, setWindowWidth] = useState();

  const router = useRouter();

  const dropdownContentRef = useRef(null);

  const fullLink = `${parentLink}/${link}`;
  const dropdownsLink = dropdowns.map((item, index) => (
    <NavigationButton parentLink={fullLink} {...item} key={index} />
  ));

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleDropdown = (e) => {
    if (window.innerWidth < 1024) {
      if (
        dropdownContentRef.current.style.display === "none" ||
        dropdownContentRef.current.style.display === ""
      ) {
        dropdownContentRef.current.style.display = "flex";
        setIsToggled(true);
      } else {
        dropdownContentRef.current.style.display = "none";
        setIsToggled(false);
      }
    }
  };

  useEffect(() => {
    if (dropdownContentRef.current !== null)
      if (window.innerWidth < 1024)
        dropdownContentRef.current.style.display = "none";
      else dropdownContentRef.current.style.display = "";
  }, [router.pathname, windowWidth]);

  return dropdowns.length !== 0 ? (
    <>
      <div className={styles.linkContainer}>
        <div className={styles.dropdown}>
          <Link href={fullLink} legacyBehavior>
            <a className={styles.navBtn} onClick={handleToggleDropdown}>
              {content}
              <FontAwesomeIcon
                className={styles.dropdownIcon}
                icon={isToggled ? faChevronUp : faChevronDown}
              />
            </a>
          </Link>
          <div
            className={`${styles.dropdownContent} ${
              isAside ? styles.aside : ""
            }`}
            ref={dropdownContentRef}
          >
            {dropdowns.length != 0 && dropdownsLink}
          </div>
        </div>
      </div>
    </>
  ) : (
    <Link href={fullLink} legacyBehavior>
      <div className={styles.linkContainer}>
        <div className={styles.dropdown}>
          <a className={styles.navBtn}>{content}</a>
        </div>
      </div>
    </Link>
  );
};

export default NavigationButton;
