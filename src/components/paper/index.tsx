import styles from "./index.module.scss"
import PaperSection from "../paperSection";
import {useState} from "react";
import Button from "../button";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";

interface props {
    background: string;
}

export default function Paper(props : props) {
    const [list, setList] = useState([1,2,3,4]);

    const { background } = props
    return (
        <div className={styles.container} >
            <div className={styles.paper} style={{ background : background }}>
                {list.map((item, index) => (
                    <PaperSection key={index}></PaperSection>
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
    )
}