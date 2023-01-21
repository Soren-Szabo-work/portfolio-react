import Image from "next/image";

// images 
import banner from "../../public/images/athyo/BANNER_ATHYO.jpg";
import image01 from "../../public/images/athyo/ingame_2.png";
import image02 from "../../public/images/athyo/ingame_1.png";
import image03 from "../../public/images/athyo/credits.png";
import { useState } from "react";
import LightboxNJS from "../../components/LightboxNJS";

export default function Athyo() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div id="wrapper">
      <div id="main">
        <div class="inner work-container">
          <h1>Athyo</h1>

          <LightboxNJS open={lightboxOpen} setOpen={setLightboxOpen} index={lightboxIndex} slides={[image01, image02, image03]}/>

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
            Athyo is a shoot&#39;em up where you can switch between two ship
            sizes to fit through tighter spaces or deal more damage thanks to
            their different abilities and upgrade trees.
          </p>
          <span class="image main">
            <Image
              src={image01}
              alt=""
              placeholder="blur"
              width={1920}
              height={1080}
              onClick={() => {setLightboxOpen(true); setLightboxIndex(0); }}
            />
          </span>
          <p>
            This game was built in ActionScript 3 for Windows during my first
            year at ISART Digital. The assets were made by Game Artist students.
          </p>
          <span class="image main">
            <Image
              src={image02}
              alt=""
              placeholder="blur"
              width={1920}
              height={1080}
              onClick={() => {setLightboxOpen(true); setLightboxIndex(1); }}
            />
          </span>
          <span class="image main">
            <Image
              src={image03}
              alt=""
              placeholder="blur"
              width={1920}
              height={1080}
              onClick={() => {setLightboxOpen(true); setLightboxIndex(2); }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
