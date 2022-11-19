import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Athyo() {
  return (
    <div id="wrapper">
      <Header></Header>
      <div id="main">
        <div class="inner">
          <h1>Athyo</h1>
          <span class="image main">
            <Image
              src="/images/BANNER_ATHYO.jpg"
              alt=""
              width={1024}
              height={256}
            />
          </span>
          <p>
            Athyo is a shoot&#39;em up where you can switch between two ship
            sizes to fit through tighter spaces or deal more damage thanks to
            their different abilities and upgrade trees.
          </p>
          <span class="image main">
            <Image
              src="/images/athyo/ingame_2.png"
              alt=""
              width={1920}
              height={1080}
            />
          </span>
          <p>
            This game was built in ActionScript 3 for Windows during my first
            year at ISART Digital. The assets were made by Game Artist students.
          </p>
          <span class="image main">
            <Image
              src="/images/athyo/ingame_1.png"
              alt=""
              width={1920}
              height={1080}
            />
          </span>
          <span class="image main">
            <Image
              src="/images/athyo/credits.png"
              alt=""
              width={1920}
              height={1080}
            />
          </span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
