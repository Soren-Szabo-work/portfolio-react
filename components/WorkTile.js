import Link from "next/link";
import useCursorHandlers from "../utils/useCursorHandlers";
import Image from "next/image";
import { motion } from "framer-motion";

const framerTile = {
  initial: {
    opacity: 0,
    y: 75,
    // scale: 0.8,
    rotateX: "-40deg",
  },
  animate: {
    opacity: 1,
    y: 0,
    // scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function WorkTile({ data }) {
  const cursorHandlers = useCursorHandlers();

  return (
    <motion.article
      className={data.classStyle ? data.classStyle : ""}
      variants={framerTile}
      {...cursorHandlers}
      style={{ originY: 0 }}
    >
      <span className="image">
        <Image
          src={`/images/${
            data.backgroundImage ? data.backgroundImage : "pic01.jpg"
          }`}
          alt=""
          width={500}
          height={500}
        />
      </span>
      <Link href={data.href ? data.href : "/"}>
        <h2>{data.title}</h2>
        <div className="content">
          <p>{data.heading}</p>
        </div>
      </Link>
    </motion.article>
  );
}

export default WorkTile;
