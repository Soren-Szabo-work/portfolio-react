import Image from "next/image";

export default function TheWorkplace() {
  return (
    <div id="wrapper">
      <div id="main">
        <div class="inner work-container">
          <h1>The Workplace</h1>
          <span class="image main">
            <Image
              src="/images/BANNER_THEWORKPLACE.jpg"
              alt=""
              width={1024}
              height={256}
            />
          </span>
          <p>
            A short group project with an emphasis on narration, gameplay and
            game feel.
          </p>

          <span class="image flex">
            <Image
              src="/images/the-workplace/ROOM_A_1.png"
              alt=""
              width={1920}
              height={1080}
            />
            <Image
              src="/images/the-workplace/ROOM_C_1.png"
              alt=""
              width={1920}
              height={1080}
            />
          </span>

          <p>
            Join The Workplace! In this first person game, you will have to make
            some choices. Do you listen to what The Screen™ instructs you to do,
            or will you blaze your own trail and see what happens? <br />
            The choice is yours!
          </p>
          <span class="image flex">
            <Image
              src="/images/the-workplace/ROOM_D_1.png"
              alt=""
              width={1920}
              height={1080}
            />
            <Image
              src="/images/the-workplace/ROOM_E2_1.png"
              alt=""
              width={1920}
              height={1080}
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
          <span class="image flex">
            <Image
              src="/images/the-workplace/ROOM_F_1.png"
              alt=""
              width={1920}
              height={1080}
            />
            <Image
              src="/images/the-workplace/ROOM_G_1.png"
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
