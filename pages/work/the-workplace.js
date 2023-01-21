import { useState } from "react";

import Image from "next/image";

// local images imports
import banner from "../../public/images/the-workplace/BANNER_THEWORKPLACE.jpg"
import roomA1 from "../../public/images/the-workplace/ROOM_A_1.png";
// import roomB1 from "../../public/images/the-workplace/ROOM_B_1.png";
import roomC1 from "../../public/images/the-workplace/ROOM_C_1.png";
import roomD1 from "../../public/images/the-workplace/ROOM_D_1.png";
// import roomE1 from "../../public/images/the-workplace/ROOM_E_1.png";
import roomE21 from "../../public/images/the-workplace/ROOM_E2_1.png";
// import roomE22 from "../../public/images/the-workplace/ROOM_E2_2.png";
import roomF1 from "../../public/images/the-workplace/ROOM_F_1.png";
import roomG1 from "../../public/images/the-workplace/ROOM_G_1.png";
import LightboxNJS from "../../components/LightboxNJS";

export default function TheWorkplace() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner work-container">

          <LightboxNJS open={lightboxOpen} setOpen={setLightboxOpen} index={lightboxIndex} slides={[roomA1, roomC1, roomD1, roomE21, roomF1, roomG1]}/>

          <h1>The Workplace</h1>
          <span className="image main">
            <Image
              src={banner}
              alt=""
              placeholder="blur"
              width={1024}
              height={256}
            />
          </span>
          <p>
            A short group project with an emphasis on narration, gameplay and
            game feel.
          </p>

          <span className="image flex">
            <Image
              src={roomA1}
              alt=""
              placeholder="blur"
              width={1920}
              height={1080}
              onClick={() => {setLightboxOpen(true); setLightboxIndex(0); }}
            />
            <Image
              src={roomC1}
              alt=""
              placeholder="blur"
              width={1920}
              height={1080}
              onClick={() => {setLightboxOpen(true); setLightboxIndex(1); }}
            />
          </span>

          <p>
            Join The Workplace! In this first person game, you will have to make
            some choices. Do you listen to what The Screen™ instructs you to do,
            or will you blaze your own trail and see what happens? <br />
            The choice is yours!
          </p>
          <span className="image flex">
            <Image
              src={roomD1}
              alt=""
              placeholder="blur"
              width={1920}
              height={1080}
              onClick={() => {setLightboxOpen(true); setLightboxIndex(2); }}
            />
            <Image
              src={roomE21}
              alt=""
              placeholder="blur"
              width={1920}
              height={1080}
              onClick={() => {setLightboxOpen(true); setLightboxIndex(3); }}
            />
          </span>
          <p>
            Since we didn&#39;t have the time to write and set up an entire
            scenario for the game, we decided to use a screen that would convey
            emotions in a very basic way, using a series of pictograms. <br />
            The game has a non linar progression, which means that we had to
            create multiple rooms in our level design for each choice the player
            makes. This not only helped us segment our tasks but it also created
            an incentive to interact with the game to see what could have been
            if you made a different choice.
          </p>
          <span className="image flex">
            <Image
              src={roomF1}
              alt=""
              placeholder="blur"
              width={1920}
              height={1080}
              onClick={() => {setLightboxOpen(true); setLightboxIndex(4); }}
            />
            <Image
              src={roomG1}
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
