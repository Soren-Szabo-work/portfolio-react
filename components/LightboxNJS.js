import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

const LightboxNJS = ({open, setOpen, slides, index}) => {
    return (
        <Lightbox 
            open={open} 
            close={() => setOpen(false)} 
            index={index}
            slides={slides} 
            render={{
                slide: (image, offset, rect) => {
                const width = Math.round(Math.min(rect.width, (rect.height / image.height) * image.width));
                const height = Math.round(Math.min(rect.height, (rect.width / image.width) * image.height));
                    return (
                        <div style={{ position: "relative", width, height }}>
                            <Image
                            fill
                            src={image}
                            loading="eager"
                            placeholder="blur"
                            alt={"alt" in image ? image.alt : ""}
                            sizes={
                            typeof window !== "undefined"
                            ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
                            : `${width}px`
                            }
                            />
                        </div>
                    );
                }
            }}
        />
    )
}

export default LightboxNJS;