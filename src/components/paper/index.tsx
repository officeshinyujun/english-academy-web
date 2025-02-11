import { useRef, useState } from "react";
import styles from "./index.module.scss";
import PaperSection from "../paperSection";
import Button from "../button";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

interface props {
    background: string;
    paperRef: React.RefObject<HTMLDivElement>; // ref를 props로 받도록 수정
}

export default function Paper({ background, paperRef }: props) {
    const [list, setList] = useState([1, 2, 3, 4,5]);

    return (
        <div className={styles.container}>
            <div className={styles.paper} ref={paperRef} style={{ background }}>
                {list.map((item, index) => (
                    <PaperSection key={index} />
                ))}
            </div>
            <div className={styles.buttonContainer}>
                <Button
                    width={50}
                    height={50}
                    onPress={() => setList([...list, 1])}
                    className={styles.controlButton}
                >
                    <IoMdAdd width={30} height={30} color={"#939393"} />
                </Button>
                <Button
                    width={50}
                    height={50}
                    onPress={() => setList(list.slice(0, -1))}
                    className={styles.controlButton}
                >
                    <IoMdRemove width={30} height={30} color={"#939393"} />
                </Button>
            </div>
        </div>
    );
}
