import Image from "next/image";
import { useState } from "react";
import LightboxNJS from "../../components/LightboxNJS";

// images
import banner from "../../public/images/dmd/BANNER_DMD.jpg";
import image01 from "../../public/images/dmd/1.png"
import image02 from "../../public/images/dmd/2.png"
import image03 from "../../public/images/dmd/3.png"
import image04 from "../../public/images/dmd/4.png"
import image05 from "../../public/images/dmd/5.png"
import image06 from "../../public/images/dmd/6.png"

export default function Dmd() {
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div id="wrapper">
      <div id="main">
        <div class="inner work-container">
          <h1>Dwarves Must Die</h1>

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
            Addictive mobile game made with Unity in 5 days during ISART
            Digital&#39;s Game Week 2019.
          </p>
          <span class="image flex">
            <Image 
              src={image01} alt="" 
              placeholder="blur" 
              width={750} 
              height={1334} 
              onClick={() => {setLightboxOpen(true); setLightboxIndex(0); }}
            />
            <Image 
              src={image02} 
              alt="" 
              placeholder="blur" 
              width={750} 
              height={1334} 
              onClick={() => {setLightboxOpen(true); setLightboxIndex(1); }}  
            />
            <Image 
              src={image03} 
              alt="" 
              placeholder="blur" 
              width={750} 
              height={1334} 
              onClick={() => {setLightboxOpen(true); setLightboxIndex(2); }}
            />
          </span>
          <p>
            The team:
            <br />4 game artists <br />3 developers <br />1 game designer
          </p>
          <span class="image flex">
            <Image 
              src={image04} 
              alt="" 
              placeholder="blur" 
              width={750} 
              height={1334} 
              onClick={() => {setLightboxOpen(true); setLightboxIndex(3); }}
            />
            <Image 
              src={image05} 
              alt="" 
              placeholder="blur" 
              width={750} 
              height={1334} 
              onClick={() => {setLightboxOpen(true); setLightboxIndex(4); }}
            />
            <Image 
              src={image06} 
              alt="" 
              placeholder="blur" 
              width={750} 
              height={1334} 
              onClick={() => {setLightboxOpen(true); setLightboxIndex(5); }}
            />
          </span>
          <p>
            My role was to create a cohesive experience between the UI/UX and
            gameplay. The animation are over the top and really exaggerated to
            convey the sense of fun and careless behaviour happening in the game
          </p>
        </div>
      </div>
    </div>
  );
}
