import Header from "../../components/header";
import styles from "./index.module.scss"
import Paper from "../../components/paper";

export default function Vocabulary() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.contents}>
                <Paper background={"#F7D9C4"}/>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}