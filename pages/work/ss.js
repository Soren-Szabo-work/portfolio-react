import Image from "next/image";
import { useState } from "react";
import LightboxNJS from "../../components/LightboxNJS";

// image imports
import banner from "../../public/images/ss/BANNER_SS.jpg";
import image01 from "../../public/images/ss/2.png";
import image02 from "../../public/images/ss/4.png";
import image03 from "../../public/images/ss/5.png";
import image04 from "../../public/images/ss/3.png";

export default function Ss() {
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div id="wrapper">
      <div id="main">
        <div class="inner work-container">
          <h1>Shogun Showdown</h1>

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
            Online card fighting game with asynchronous server. Built using
            JavaScript and nodeJS by a team of 3 developers, including myself,
            during my first year at ISART Digital (jan. - mar. 2018)
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
            Shogun Showdown is the ultimate fight between two samurais. Pick the
            right card to deal more damage to your opponent, or click as fast as
            you can if you both pick the same card value! Beat your friends in
            this online face-off.
          </p>

          <span class="image flex">
            <Image 
              src={image03} 
              alt=""
              placeholder="blur" 
              width={1920} 
              height={1080}
              onClick={() => {setLightboxOpen(true); setLightboxIndex(3); }}  
            />
            <Image 
              src={image04} 
              alt=""
              placeholder="blur" 
              width={1920} 
              height={1080} 
              onClick={() => {setLightboxOpen(true); setLightboxIndex(4); }}  
            />
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
