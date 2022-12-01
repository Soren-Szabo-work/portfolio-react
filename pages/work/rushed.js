import Image from "next/image";

export default function Rushed() {
  return (
    <div id="wrapper">
      <div id="main">
        <div class="inner work-container">
          <h1>Rushed</h1>
          <span class="image main">
            <Image
              src="/images/BANNER_RUSHED.jpg"
              alt=""
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
              src="/images/rushed/GP1.png"
              alt=""
              width={1920}
              height={1080}
            />
            <Image
              src="/images/rushed/GP3.png"
              alt=""
              width={1920}
              height={1080}
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
              src="/images/rushed/GP4.png"
              alt=""
              width={1920}
              height={1080}
            />
            <Image
              src="/images/rushed/WS.png"
              alt=""
              width={1920}
              height={1080}
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
