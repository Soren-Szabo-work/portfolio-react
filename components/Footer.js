import React, { useRef } from "react";
import useCursorHandlers from "../utils/useCursorHandlers";
import Socials from "./Socials";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";

function Footer() {
  const cursorHandlers = useCursorHandlers();

  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    // {/* <!-- Footer --> */}
    <footer id="footer" ref={mainRef}>
      <motion.div className="inner" style={{ y, scale }}>
        <div className="footer-container">
          <h1 className="footer-title">Get in touch</h1>
          <div className="footer-contact">
            <div className="footer-contact--main">
              <div className="footer-email">
                <Link
                  className="link-underlined"
                  href="mailto:soren.szabo@gmail.com"
                  {...cursorHandlers}
                >
                  <span>soren.szabo@gmail.com</span>
                </Link>
              </div>
              <address className="contact-address">
                <p>Passage de Flandre</p>
                <p>75019 Paris, France</p>
              </address>
            </div>
            <div className="footer-contact--socials">
              <Socials
                data={{
                  href: "https://www.linkedin.com/in/sorenszabo/",
                  iconType: "brands",
                  iconClass: "fa-linkedin",
                  spanContent: "LinkedIn",
                }}
              ></Socials>
              <Socials
                data={{
                  href: "https://twitter.com/Firepower_Soren",
                  iconType: "brands",
                  iconClass: "fa-twitter",
                  spanContent: "Twitter",
                }}
              ></Socials>
              <Socials
                data={{
                  href: "https://www.instagram.com/soren_szabo/",
                  iconType: "brands",
                  iconClass: "fa-instagram",
                  spanContent: "Instagram",
                }}
              ></Socials>
              <Socials
                data={{
                  href: "https://github.com/Soren-Szabo-work",
                  iconType: "brands",
                  iconClass: "fa-github",
                  spanContent: "GitHub",
                }}
              ></Socials>
              <Socials
                data={{
                  href: "tel:+33624508936",
                  iconType: "solid",
                  iconClass: "fa-phone",
                  spanContent: "Phone",
                }}
              ></Socials>
            </div>
          </div>
          <ul className="copyright">
            <li>Copyright &copy; Soren Szabo. All rights reserved.</li>
            <li>
              Grid layout from:{" "}
              <a
                className="link-underlined"
                href="http://html5up.net"
                target="_blank"
                rel="noopener noreferrer"
                {...cursorHandlers}
              >
                HTML5 UP
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </footer>
  );
}

export default Footer;
