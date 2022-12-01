import Image from "next/image";

export default function Sc3095() {
  return (
    <div id="wrapper">
      <div id="main">
        <div class="inner work-container">
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
          <span class="image flex">
            <Image
              src="/images/sc3095/2.png"
              alt=""
              width={1920}
              height={1080}
            />
            <Image
              src="/images/sc3095/3.png"
              alt=""
              width={1920}
              height={1080}
            />
          </span>
          <p>Made during my second year at ISART Digital (oct. - dec. 2018)</p>

          <span class="image flex">
            <Image
              src="/images/sc3095/1.png"
              alt=""
              width={1920}
              height={1080}
            />
            <Image
              src="/images/sc3095/4.png"
              alt=""
              width={1920}
              height={1080}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
