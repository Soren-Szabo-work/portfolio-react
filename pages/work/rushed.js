import Image from "next/image";
import { useState } from "react";
import LightboxNJS from "../../components/LightboxNJS";

// image imports
import banner from "../../public/images/rushed/BANNER_RUSHED.jpg";
import image01 from "../../public/images/rushed/GP1.png";
import image02 from "../../public/images/rushed/GP3.png";
import image03 from "../../public/images/rushed/GP4.png";
import image04 from "../../public/images/rushed/WS.png";


export default function Rushed() {
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div id="wrapper">
      <div id="main">
        <div class="inner work-container">
          <h1>Rushed</h1>

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
            For this solo project I had to fill the role of an indie game
            designer. From game assets to programming, I built the game from
            scratch, trying my best to replicate the game made by TwoTribes.
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
            In this puzzle game, you&#39;re going to work on your visualization
            skills. Build the path to guide every cube to its destination, but
            be careful not to create a collision! There are two phases in this
            game. The first one is the building step where you place all your
            modifier blocks to move, rotate, or even teleport your cubes! After
            you&#39;re done, you can press play and check if your solution is
            correct or not, and retry if you need to.
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
            The most important part of this project was making sure everything
            worked as intended. The game has many ways to interact with the
            cubes, they all need to work so the puzzle can be solved. This
            project was my firt game made using Unity.
          </p>
        </div>
      </div>
    </div>
  );
}
