import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Sc3095() {
  return (
    <div id="wrapper">
      <Header></Header>
      <div id="main">
        <div class="inner">
          <h1>Star Crusader 3095</h1>
          <span class="image main">
            <Image
              src="/images/BANNER_SC3095.jpg"
              alt=""
              width={1024}
              height={256}
            />
          </span>
          <p>
            Run&#39;n gun with online database where you can create an account
            and save your hi-scores. Built using Haxe (OpenFL) and JavaScript
            (nodeJS, mongodb) by a team of 4 developers including myself, but
            also 4 game designers and 5 game artists.
          </p>
          <p>Made during my second year at ISART Digital (oct. - dec. 2018)</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
