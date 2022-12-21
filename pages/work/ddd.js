import Image from "next/image";

export default function Ddd() {
  return (
    <div id="wrapper">
      <div id="main">
        <div class="inner work-container">
          <h1>DashDashDASH!</h1>
          <span class="image main">
            <Image
              src="/images/BANNER_DDD.jpg"
              alt=""
              width={1024}
              height={256}
            />
          </span>
          <p>
            This 2D puzzle game was created in 5 days during ISART Game Week
            2019.
          </p>
          <span class="image flex">
            <Image src="/images/ddd/6.png" alt="" width={810} height={1440} />
            <Image src="/images/ddd/5.png" alt="" width={810} height={1440} />
          </span>
          <p>
            Slash your preys! Death is on paid leave this week, you, the intern,
            have been chosen to replace him. Fetch the souls lost on this planet
            and be quick! <br />
            Use your environment to bounce towards your objective, and find the
            best way to collect them all
          </p>
          <span class="image flex">
            <Image src="/images/ddd/1.png" alt="" width={810} height={1440} />
            <Image src="/images/ddd/4.png" alt="" width={810} height={1440} />
          </span>
          <p>
            During this project I was tasked to work on physics and juiciness.
            The game is really colorful and cute, with several themes as you
            progress through the levels. I had to work fast and efficiently
            which is critical when you need to bring a concept to life.
          </p>
        </div>
      </div>
    </div>
  );
}
