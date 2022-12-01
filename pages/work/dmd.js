import Image from "next/image";

export default function Dmd() {
  return (
    <div id="wrapper">
      <div id="main">
        <div class="inner work-container">
          <h1>Dwarves Must Die</h1>
          <span class="image main">
            <Image
              src="/images/BANNER_DMD.jpg"
              alt=""
              width={1024}
              height={256}
            />
          </span>
          <p>
            Addictive mobile game made with Unity in 5 days during ISART
            Digital&#39;s Game Week 2019.
          </p>
          <span class="image flex">
            <Image src="/images/dmd/1.png" alt="" width={750} height={1334} />
            <Image src="/images/dmd/2.png" alt="" width={750} height={1334} />
            <Image src="/images/dmd/3.png" alt="" width={750} height={1334} />
          </span>
          <p>
            The team:
            <br />4 game artists <br />3 developers <br />1 game designer
          </p>
          <span class="image flex">
            <Image src="/images/dmd/4.png" alt="" width={750} height={1334} />
            <Image src="/images/dmd/5.png" alt="" width={750} height={1334} />
            <Image src="/images/dmd/6.png" alt="" width={750} height={1334} />
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
