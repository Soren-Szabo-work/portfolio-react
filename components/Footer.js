import React from "react";
import useCursorHandlers from "../utils/useCursorHandlers";
import Socials from "./Socials";

function Footer() {
  const cursorHandlers = useCursorHandlers();

  return (
    // {/* <!-- Footer --> */}
    <footer id="footer">
      <div className="inner">
        <ul className="icons">
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
          <Socials
            data={{
              href: "tel:+mailto:soren.szabo@gmail.com",
              iconType: "solid",
              iconClass: "fa-envelope",
              spanContent: "Email",
            }}
          ></Socials>
        </ul>
        <ul className="copyright">
          <li>&copy; Soren Szabo. All rights reserved</li>
          <li>
            Template from:{" "}
            <a
              className="link-underlined cursor-hover-item"
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
    </footer>
  );
}

export default Footer;
