import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Ss() {
  return (
    <div id="wrapper">
      <Header></Header>
      <div id="main">
        <div class="inner">
          <h1>Shogun Showdown</h1>
          <span class="image main">
            <Image
              src="/images/BANNER_SS.jpg"
              alt=""
              width={1024}
              height={256}
            />
          </span>
          <p>
            Online card fighting game with asynchronous server. Built using
            JavaScript and nodeJS by a team of 3 developers, including myself,
            during my first year at ISART Digital (jan. - mar. 2018)
          </p>
          <p>
            Shogun Showdown is the ultimate fight between two samurais. Pick the
            right card to deal more damage to your opponent, or click as fast as
            you can if you both pick the same card value! Beat your friends in
            this online face-off.
          </p>
          <p>
            The purpose of this project was to gain experience in two important
            areas. The first one being the online component, where the server
            had to solve each round to pick the winner. The second aspect is the
            &quot;front-end&quot; visuals and the juiciness.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
