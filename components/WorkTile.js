import Link from "next/link";
import useCursorHandlers from "../utils/useCursorHandlers";

function WorkTile({ data }) {
  const cursorHandlers = useCursorHandlers();

  return (
    <article
      className={data.classStyle ? data.classStyle : ""}
      data-cursor-text="LEARN MORE!"
      data-cursor-text-repeat="3"
      {...cursorHandlers}
    >
      <span className="image">
        <img
          src={`/images/${
            data.backgroundImage ? data.backgroundImage : "pic01.jpg"
          }`}
          alt=""
        />
      </span>
      <Link href={data.href ? data.href : "/"}>
        <h2>{data.title}</h2>
        <div className="content">
          <p>{data.heading}</p>
        </div>
      </Link>
    </article>
  );
}

export default WorkTile;
