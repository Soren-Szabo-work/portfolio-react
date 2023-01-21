import Image from "next/image";
import LightboxNJS from "../../components/LightboxNJS";

// images
import banner from "../../public/images/ddd/BANNER_DDD.jpg";
import image01 from "../../public/images/ddd/6.png";
import image02 from "../../public/images/ddd/5.png";
import image03 from "../../public/images/ddd/1.png";
import image04 from "../../public/images/ddd/4.png";
import { useState } from "react";

export default function Ddd() {
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div id="wrapper">
      <div id="main">
        <div class="inner work-container">

          <LightboxNJS open={lightboxOpen} setOpen={setLightboxOpen} index={lightboxIndex} slides={[image01,image02,image03,image04]}/>

          <h1>DashDashDASH!</h1>
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
            This 2D puzzle game was created in 5 days during ISART Game Week
            2019.
          </p>
          <span class="image flex">
            <Image 
              src={image01} 
              alt=""
              placeholder="blur" 
              width={810} 
              height={1440}
              onClick={() => {setLightboxOpen(true); setLightboxIndex(0); }}   
            />
            <Image 
              src={image02} 
              alt=""
              placeholder="blur" 
              width={810} 
              height={1440} 
              onClick={() => {setLightboxOpen(true); setLightboxIndex(1); }}
            />
          </span>
          <p>
            Slash your preys! Death is on paid leave this week, you, the intern,
            have been chosen to replace him. Fetch the souls lost on this planet
            and be quick! <br />
            Use your environment to bounce towards your objective, and find the
            best way to collect them all
          </p>
          <span class="image flex">
            <Image 
              src={image03} 
              alt=""
              placeholder="blur" 
              width={810} 
              height={1440} 
              onClick={() => {setLightboxOpen(true); setLightboxIndex(2); }}  
            />
            <Image 
              src={image04} 
              alt=""
              placeholder="blur" 
              width={810} 
              height={1440} 
              onClick={() => {setLightboxOpen(true); setLightboxIndex(4); }}
            />
          </span>
          <p>
            During this project I was tasked to work on physics and juiciness.
            The game is really colorful and cute, with several themes as you
            progress through the levels. I had to work fast and efficiently
            which is critical when you need to bring a concept to life.
          </p>
        </div>
      </div>
    </div>
  );
}
