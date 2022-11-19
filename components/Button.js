import Link from "next/link";
import useCursorHandlers from "../utils/useCursorHandlers";

const Button = ({ data }) => {
  const cursorHandlers = useCursorHandlers();

  return (
    <Link
      className="button"
      href={data.href}
      target={`${data.href.slice(0, 1) == "/" ? "" : "_blank"}`}
      {...cursorHandlers}
    >
      <div className="button--full">
        <div className="button--text">{data.description}</div>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.8101 1.96222L0.726954 12.0453L1.66171 12.9801L11.7448 2.89698L11.9344 9.4447L13.208 9.07311L13.0134 2.35278C12.9877 1.46249 12.2434 0.718185 11.3531 0.692412L4.80762 0.502924L4.43487 1.77539L10.8101 1.96222Z" />
        </svg>
      </div>
      <div className="button--compact">
        <div className="button--text">{data.title}</div>
      </div>
    </Link>
  );
};

export default Button;
