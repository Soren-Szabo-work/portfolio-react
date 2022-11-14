import Image from "next/image";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import YoutubeEmbed from "../../components/YoutubeEmbed";

export default function Celestrail() {
  return (
    <div id="wrapper">
      <Header></Header>
      <div id="main">
        <div class="inner">
          <h1>Celestrail</h1>
          <span class="image main">
            <Image
              src="/images/BANNER_CELESTRAIL.jpg"
              alt=""
              width={1024}
              height={256}
            />
          </span>
          <p>
            This is my graduation project, I was part of a group of 15 people
            who worked on it using Unity 3D from Sept. 2020 to June 2021.
          </p>
          <p>
            Welcome to Celestrail! In this VR game, you become an archer lost in
            a mysterious world, governed by light energy. This energy has been
            hidden away and spread across the universe. You are the only one
            who&#39;s able to free this energy by bouncing your energy arrow and
            solving the puzzles that surround you. Good luck!
          </p>
          <YoutubeEmbed videoId={"Pzccyw9-FQM"}></YoutubeEmbed>
          {/* <Youtube className="video-container" videoId="Pzccyw9-FQM"></Youtube> */}
          {/* <div class="video-container cursor-hover-item" tabindex="0">
            <div id="Pzccyw9-FQM" frameborder="0"></div>
          </div> */}
          <p />
          <p>
            One of the main challenges of this project was to make sure the
            frame rate was stable on both of our target devices, the Meta Quest
            1 and the Quest 2, in portable mode. Throughout this project, I also
            worked on developing the player controller and all the interactions
            with the bow, I also worked on various gameplay elements and
            animated tutorial elements.
          </p>
          <Button
            data={{
              title: "Website",
              description: "View on Sidequest",
              href: "https://sidequestvr.com/app/8315/celestrail",
            }}
          ></Button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
