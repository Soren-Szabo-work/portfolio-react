import Image from "next/image";
import { useState } from "react";
import LightboxNJS from "../../components/LightboxNJS";

// image imports
import banner from "../../public/images/sc3095/BANNER_SC3095.jpg";
import image01 from "../../public/images/sc3095/2.png";
import image02 from "../../public/images/sc3095/3.png";
import image03 from "../../public/images/sc3095/1.png";
import image04 from "../../public/images/sc3095/4.png";

export default function Sc3095() {

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);


  return (
    <div id="wrapper">
      <div id="main">
        <div class="inner work-container">
          <h1>Star Crusader 3095</h1>

          <LightboxNJS open={lightboxOpen} setOpen={setLightboxOpen} index={lightboxIndex} slides={[image01, image02, image03, image04]}/>

          <span class="image main">
            <Image
              src={banner}
              alt=""
              placeholder="blur"
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
              src={image01}
              alt=""
              placeholder="blur"
              width={1920}
              height={1080}
              onClick={() => {setLightboxOpen(true); setLightboxIndex(0); }}
            />
            <Image
              src={image02}
              alt=""
              placeholder="blur"
              width={1920}
              height={1080}
              onClick={() => {setLightboxOpen(true); setLightboxIndex(1); }}
            />
          </span>
          <p>Made during my second year at ISART Digital (oct. - dec. 2018)</p>

          <span class="image flex">
            <Image
              src={image03}
              alt=""
              placeholder="blur"
              width={1920}
              height={1080}
              onClick={() => {setLightboxOpen(true); setLightboxIndex(2); }}
            />
            <Image
              src={image04}
              alt=""
              placeholder="blur"
              width={1920}
              height={1080}
              onClick={() => {setLightboxOpen(true); setLightboxIndex(3); }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
