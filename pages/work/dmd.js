import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Dmd() {
  return (
    <div id="wrapper">
      <Header></Header>
      <div id="main">
        <div class="inner">
          <h1>Dwarves Must Die</h1>
          <span class="image main">
            <Image
              src="/images/BANNER_DMD.jpg"
              alt=""
              width={1024}
              height={256}
            />
          </span>
          <p>
            Addictive mobile game made with Unity in 5 days during ISART
            Digital&#39;s Game Week 2019.
          </p>
          <p>
            The team:
            <br />4 game artists <br />3 developers <br />1 game designer
          </p>
          <p>
            My role was to create a cohesive experience between the UI/UX and
            gameplay. The animation are over the top and really exaggerated to
            convey the sense of fun and careless behaviour happening in the game
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
