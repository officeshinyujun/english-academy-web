import Header from "../../components/header";
import styles from "./index.module.scss";
import Paper from "../../components/paper";
import SelectColor from "../../components/selectColor";
import { useState } from "react";

export default function Vocabulary() {
    const [backGround, setBackGround] = useState<string>("#F7D9C4");

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.contents}>
                <Paper background={backGround} />
                <div className={styles.line} />
                <div className={styles.content1}>
                    {/* setBackGround을 props로 전달 */}
                    <SelectColor onSelectColor={setBackGround} />
                </div>
            </div>
        </div>
    );
}
