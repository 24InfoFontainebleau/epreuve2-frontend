import React from "react";
import styles from "../scss/components/footer.module.scss";
import Link from "next/link";
import logo from "@/assets/logo_lyon.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.redirections}>
        <div className={styles.logoAndInfos}>
          <div className={styles.logo}>
            <img src={logo.src} className={styles.logoImage} />
            <h4>EduLyon</h4>
          </div>
          <div className={styles.infos}>
            <p className={styles.appInfos}>Site touristique éducatif EduLyon</p>
            <p className={styles.appInfos}>EduLyon.contact@gmail.com</p>
            <p className={styles.appInfos}>+33 2 22 22 22 22</p>
          </div>
        </div>
        <div className={styles.redirectionsContainer}>
          <div className={styles.redirectionsection}>
            <h4 className={styles.sectionname}>Liens utiles</h4>
            <Link href="/" className={styles.redirectionButton}>
              Accueil
            </Link>
            <Link
              href="https://www.lyon.fr/"
              target="_blank"
              className={styles.redirectionButton}
            >
              Site officiel de la ville de Lyon
            </Link>
            <Link href="/contact" className={styles.redirectionButton}>
              Contact
            </Link>
            <Link href="/about" className={styles.redirectionButton}>
              À propos
            </Link>
            <Link href="/faq" className={styles.redirectionButton}>
              FAQ
            </Link>
            <Link href="/preferences" className={styles.redirectionButton}>
              Accessibilité
            </Link>
          </div>
          <div className={styles.redirectionsection}>
            <h4 className={styles.sectionname}>Légal</h4>
            <Link className={styles.redirectionButton} href="/terms">
              Politique de confidentialité
            </Link>
            <Link className={styles.redirectionButton} href="/cookies">
              Politique de cookies
            </Link>
            <Link className={styles.redirectionButton} href="/legal-notice">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2025 EduLyon</p>
      </div>
    </footer>
  );
}
