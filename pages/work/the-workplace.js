import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function TheWorkplace() {
  return (
    <div id="wrapper">
      <Header></Header>
      <div id="main">
        <div class="inner">
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
          <p>
            Join The Workplace! In this first person game, you will have to make
            some choices. Do you listen to what The Screen™ instructs you to do,
            or will you blaze your own trail and see what happens? <br />
            The choice is yours!
          </p>
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
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
