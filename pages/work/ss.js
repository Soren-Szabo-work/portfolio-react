import Image from "next/image";

export default function Ss() {
  return (
    <div id="wrapper">
      <div id="main">
        <div class="inner work-container">
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

          <span class="image flex">
            <Image src="/images/ss/2.png" alt="" width={1920} height={1080} />
            <Image src="/images/ss/4.png" alt="" width={1920} height={1080} />
          </span>

          <p>
            Shogun Showdown is the ultimate fight between two samurais. Pick the
            right card to deal more damage to your opponent, or click as fast as
            you can if you both pick the same card value! Beat your friends in
            this online face-off.
          </p>

          <span class="image flex">
            <Image src="/images/ss/5.png" alt="" width={1920} height={1080} />
            <Image src="/images/ss/3.png" alt="" width={1920} height={1080} />
          </span>

          <p>
            The purpose of this project was to gain experience in two important
            areas. The first one being the online component, where the server
            had to solve each round to pick the winner. The second aspect is the
            &quot;front-end&quot; visuals and the juiciness.
          </p>
        </div>
      </div>
    </div>
  );
}
