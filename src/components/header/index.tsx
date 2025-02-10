import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import goToFunction from "../../feature/goToFunction";

export default function Header() {
    const navigate = useNavigate();
    const headerList = [
        { id: 1, name: "voice-extraction" },
        { id: 2, name: "vocabulary" },
    ];

    return (
        <div className={styles.container}>
            <p onClick={() => goToFunction(navigate, "/")}>endemy</p>
            {headerList.map((item) => (
                <p key={item.id} onClick={() => goToFunction(navigate, `/${item.name}`)}>
                    {item.name}
                </p>
            ))}
        </div>
    );
}
