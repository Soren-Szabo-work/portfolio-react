import Image from "next/image";

export default function Umbra() {
  return (
    <div id="wrapper">
      <div id="main">
        <div class="inner work-container">
          <h1>Umbra</h1>
          <span class="image main">
            <Image
              src="/images/BANNER_UMBRA.jpg"
              alt=""
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
              src="/images/umbra/01_StartGame.png"
              alt=""
              width={1920}
              height={1080}
            />
            <Image
              src="/images/umbra/07_Checkpoint1.png"
              alt=""
              width={1920}
              height={1080}
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
              src="/images/umbra/13_RangedEnemy.png"
              alt=""
              width={1920}
              height={1080}
            />
            <Image
              src="/images/umbra/14_SpiritUnlocked.png"
              alt=""
              width={1920}
              height={1080}
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
              src="/images/umbra/24_HookFTUE.png"
              alt=""
              width={1920}
              height={1080}
            />
            <Image
              src="/images/umbra/27_SpiritSpot1.png"
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
