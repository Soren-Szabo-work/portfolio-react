import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Umbra() {
  return (
    <div id="wrapper">
      <Header></Header>
      <div id="main">
        <div class="inner">
          <h1>Umbra</h1>
          <span class="image main">
            <Image
              src="/images/BANNER_UMBRA.jpg"
              alt=""
              width={1024}
              height={256}
            />
          </span>
          <p>
            For this group project, we were tasked to create a metroidvania type
            of game in 2D.
          </p>
          <p>
            Umbra is a fast-paced Metroidvania action-based game. To help the
            player face the many obstacles that will block his way, he can make
            good use of his drone which he will be able to throw and interact
            with, providing movement and escape abilities during battles,
            allowing him to reach unattainable places while exploring.
          </p>
          <p>
            Feels like a mix of Katana Zero, Dead Cells and Ori, in a darker
            setting - more like Metro in the tunnels. Interaction with moving
            objects and special blocks in level using weapons is a key part of
            the progression system.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
