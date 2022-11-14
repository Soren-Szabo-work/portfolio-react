import Link from "next/link";
import useCursorHandlers from "../utils/useCursorHandlers";

const Button = ({data}) => {
    const cursorHandlers = useCursorHandlers();

    return (
            <Link className="button" href={data.href} target={`${data.href.slice(0,1) == "/" ? "" : "_blank"}`} {...cursorHandlers}>
                <div className="button--full">
                    <div className="button--text">{data.description}</div>
                    <svg width="25" height="25" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5 5 25 25 25 25 15 22.7778 15 22.7778 22.7778 7.2222 22.7778 7.2222 7.2222 15 7.2222 15 5 5 5zM17.2222 5 17.2222 7.2222 21.2066 7.2222 10.8811 17.5477 12.4523 19.1189 22.7778 8.7934 22.7778 12.7778 25 12.7778 25 5 17.2222 5z"/>
                    </svg>
                </div>
                <div className="button--compact">
                    <div className="button--text">{data.title}</div>
                </div>
            </Link>
    )
}

export default Button;