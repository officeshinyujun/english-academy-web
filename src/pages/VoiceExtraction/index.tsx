import Header from "../../components/header";
import styles from "./index.module.scss";
import {useEffect, useState} from "react";
import Button from "../../components/button";
import { MdVolumeUp } from "react-icons/md";
import { MdFileDownload } from "react-icons/md";



export default function VoiceExtraction() {
    const [text, setText] = useState("");

    return (
        <div>
            <Header/>
            <div className={styles.contents}>
                <textarea
                    placeholder="텍스트를 입력하세요..."
                    onChange={
                    (e) => setText(e.target.value)
                    }
                />
                <div className={styles.buttonList}>
                    <div className={styles.buttonBar}>
                        <Button width={80} height={80} onPress={() => {console.log("ASdf")}} className={styles.buttonContainer}>
                            <MdVolumeUp size={40} className={styles.buttonImage}/>
                        </Button>
                        <p>미리듣기</p>
                    </div>
                    <div className={styles.buttonBar}>
                        <Button width={80} height={80} onPress={() => {console.log("ASdf")}} className={styles.buttonContainer}>
                            <MdFileDownload size={40} className={styles.buttonImage}/>
                        </Button>
                        <p>다운로드</p>
                    </div>
                </div>
            </div>
        </div>
    )
}