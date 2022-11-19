import Image from "next/image";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Slideshow from "../../components/Slideshow";
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
              title: "More info and download",
              description: "View Celestrail on Sidequest",
              href: "https://sidequestvr.com/app/8315/celestrail",
            }}
          ></Button>
          <p />
          <h2>Gallery</h2>

          <Slideshow
            images={[
              "/images/celestrail/01.png",
              "/images/celestrail/02.png",
              "/images/celestrail/03.png",
              "/images/celestrail/04.png",
              "/images/celestrail/05.png",
              "/images/celestrail/06.png",
              "/images/celestrail/07.png",
              "/images/celestrail/08.png",
              "/images/celestrail/09.png",
              "/images/celestrail/10.png",
              "/images/celestrail/11.png",
              "/images/celestrail/12.png",
              "/images/celestrail/13.png",
            ]}
          ></Slideshow>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
