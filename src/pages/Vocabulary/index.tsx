import { useRef, useState } from "react";
import Header from "../../components/header";
import styles from "./index.module.scss";
import Paper from "../../components/paper";
import SelectColor from "../../components/selectColor";
import captureElement from "../../feature/captureElement.ts";
import Button from "../../components/button";
import { MdFileDownload } from "react-icons/md";


export default function Vocabulary() {
    const [backGround, setBackGround] = useState<string>("#F7D9C4");
    const paperRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.contents}>
                <Paper background={backGround} paperRef={paperRef} />
                <div className={styles.line} />
                <div className={styles.content1}>
                    <SelectColor onSelectColor={setBackGround} />
                    <Button width={50} height={50} onPress={() => captureElement({ paperRef })} className={styles.downloadButton}>
                        <MdFileDownload size={30} />
                    </Button>
                </div>
                
            </div>
        </div>
    );
}
