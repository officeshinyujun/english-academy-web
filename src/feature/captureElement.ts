import domtoimage from "dom-to-image";

interface props {
    paperRef: React.RefObject<HTMLDivElement>
}

export default function captureElement(props: props) {
    const { paperRef } = props;
        if (paperRef.current) {
            domtoimage.toPng(paperRef.current).then((dataUrl) => {
                const link = document.createElement("a");
                link.href = dataUrl;
                link.download = "paper.png";
                link.click();
            });
        }

}