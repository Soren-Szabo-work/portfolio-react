import useCursorHandlers from "../utils/useCursorHandlers";

const Socials = ({data}) => {
    const cursorHandlers = useCursorHandlers();

    return( 
        <li>
            <a
              href={data.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`icon ${data.iconType} style2 ${data.iconClass} cursor-hover-item`}
              {...cursorHandlers}
            >
              <span className="label">{data.spanContent}</span>
            </a>
          </li>
    )
}

export default Socials;