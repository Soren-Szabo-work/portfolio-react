import useCursorHandlers from "../utils/useCursorHandlers";

const Socials = ({ data }) => {
  const cursorHandlers = useCursorHandlers();

  return (
    <div>
      <a
        href={data.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`icon ${data.iconType} style2 ${data.iconClass} contact-icon`}
        {...cursorHandlers}
      >
        <span className="label">{data.spanContent}</span>
      </a>
    </div>
  );
};

export default Socials;
