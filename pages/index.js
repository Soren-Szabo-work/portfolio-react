import Head from "next/head";
import WorkTile from "../components/WorkTile";
import AnimatedCharacters from "../components/AnimatedCharacters";
import { animate, motion } from "framer-motion";
import SiteIntroduction from "../components/SiteIntroduction";

export default function Home({ isFirstUse }) {
  const welcomeText = [
    { type: "heading1", text: "Welcome." },
    {
      type: "paragraph",
      text: "I'm a gameplay programmer based in Paris, France. Using my experience to build exciting new ways to game on every platform. Here is some of my work",
    },
  ];

  const framerWrapper = {
    exit: {
      opacity: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const framerMain = {
    animate: {
      transition: { delayChildren: 0.5, staggerChildren: 0.3 },
    },
  };

  const framerContent = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const framerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div id="wrapper" variants={framerWrapper} exit="exit">
      <Head>
        <title>Soren SZABO - Gameplay Programmer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {placeholderText.map((item, index) => {
        return <AnimatedText {...item} key={index} />;
      })} */}

      {isFirstUse && <SiteIntroduction />}

      {/* <!-- Main --> */}
      <motion.div
        id="main"
        variants={framerMain}
        initial="initial"
        animate="animate"
      >
        <div className="inner">
          <header>
            {/* <h1>Welcome.</h1>
            <p>
              I&#39;m a gameplay programmer based in Paris, France.
              <br />
              Using my experience to build exciting new ways to game on every
              platform. Here is some of my work
            </p> */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.025,
                  },
                },
              }}
            >
              <AnimatedCharacters {...welcomeText[0]} key={0} />
            </motion.div>
            <motion.div variants={framerContent}>
              <p>{welcomeText[1].text}</p>
            </motion.div>
          </header>
          <motion.section
            variants={framerContainer}
            className="tiles"
            style={{ perspective: 1100 }}
          >
            <WorkTile
              data={{
                classStyle: "style1",
                href: "/work/celestrail",
                backgroundImage: "ICON_CELESTRAIL.jpg",
                title: "Celestrail",
                heading:
                  "VR graduation group project using Unity. Made for Oculus/Meta Quest",
              }}
            ></WorkTile>
            <WorkTile
              data={{
                classStyle: "style2",
                href: "/work/the-workplace",
                backgroundImage: "ICON_THEWORKPLACE.jpg",
                title: "The Workplace",
                heading:
                  "Programmer only group project. Made in Unreal Engine 4 for PC",
              }}
            ></WorkTile>
            <WorkTile
              data={{
                classStyle: "style3",
                href: "/work/umbra",
                backgroundImage: "ICON_UMBRA.jpg",
                title: "Umbra",
                heading:
                  "Game Design on a 2D Metroidvania game, made for PC using Unity",
              }}
            ></WorkTile>
            <WorkTile
              data={{
                classStyle: "style4",
                href: "/work/ddd",
                backgroundImage: "ICON_DDD.jpg",
                title: "DashDashDASH!",
                heading: "Game jam project, 2D hyper casual game using Unity",
              }}
            ></WorkTile>
            <WorkTile
              data={{
                classStyle: "style5",
                href: "/work/dmd",
                backgroundImage: "ICON_DMD.jpg",
                title: "Dwarves Must Die",
                heading:
                  "Game jam project, hack'n'slash with RPG mechanics, made using Unity",
              }}
            ></WorkTile>
            <WorkTile
              data={{
                classStyle: "style6",
                href: "/work/rushed",
                backgroundImage: "ICON_RUSHED.jpg",
                title: "Rushed",
                heading: "Solo project, 3D puzzle game using Unity",
              }}
            ></WorkTile>
            <WorkTile
              data={{
                classStyle: "style2",
                href: "/work/sc3095",
                backgroundImage: "ICON_SC3095.jpg",
                title: "Star Crusader 3095",
                heading:
                  "2D Run'n 'gun with online save capability. Made using Haxe and mongoDB",
              }}
            ></WorkTile>
            <WorkTile
              data={{
                classStyle: "style3",
                href: "/work/ss",
                backgroundImage: "ICON_SS.jpg",
                title: "Shogun Showdown",
                heading:
                  "Online card fighting game with asynchronous server. Built using JavaScript and nodeJS",
              }}
            ></WorkTile>
            <WorkTile
              data={{
                classStyle: "style1",
                href: "/work/athyo",
                backgroundImage: "ICON_ATHYO.png",
                title: "Athyo",
                heading:
                  "Solo mini game project, shoot'em up made with ActionScript 3 and Adobe Animate CC",
              }}
            ></WorkTile>
          </motion.section>
        </div>
      </motion.div>
    </motion.div>
  );
}
