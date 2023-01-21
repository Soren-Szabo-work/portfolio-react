import Image from "next/image";
import { useState } from "react";
import LightboxNJS from "../../components/LightboxNJS";

//image imports
import banner  from "../../public/images/umbra/BANNER_UMBRA.jpg";
import image01 from "../../public/images/umbra/01_StartGame.png"
import image02 from "../../public/images/umbra/07_Checkpoint1.png"
import image03 from "../../public/images/umbra/13_RangedEnemy.png"
import image04 from "../../public/images/umbra/14_SpiritUnlocked.png"
import image05 from "../../public/images/umbra/24_HookFTUE.png"
import image06 from "../../public/images/umbra/27_SpiritSpot1.png"

export default function Umbra() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div id="wrapper">
      <div id="main">
        <div class="inner work-container">
          <h1>Umbra</h1>

          <LightboxNJS open={lightboxOpen} setOpen={setLightboxOpen} index={lightboxIndex} slides={[image01, image02, image03, image04, image05, image06]}/>

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
            For this group project, we were tasked to create a metroidvania type
            of game in 2D.
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
          <p>
            Umbra is a fast-paced Metroidvania action-based game. To help the
            player face the many obstacles that will block his way, he can make
            good use of his drone which he will be able to throw and interact
            with, providing movement and escape abilities during battles,
            allowing him to reach unattainable places while exploring.
          </p>
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
          <p>
            Feels like a mix of Katana Zero, Dead Cells and Ori, in a darker
            setting - more like Metro in the tunnels. Interaction with moving
            objects and special blocks in level using weapons is a key part of
            the progression system.
          </p>
          <span class="image flex">
            <Image
              src={image05}
              alt=""
              placeholder="blur"
              width={1920}
              height={1080}
              onClick={() => {setLightboxOpen(true); setLightboxIndex(4); }}
            />
            <Image
              src={image06}
              alt=""
              placeholder="blur"
              width={1920}
              height={1080}
              onClick={() => {setLightboxOpen(true); setLightboxIndex(5); }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
