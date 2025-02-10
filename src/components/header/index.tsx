import { useNavigate, useLocation } from "react-router-dom";
import styles from "./index.module.scss";
import goToFunction from "../../feature/goToFunction";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation(); // 현재 경로 가져오기

    const headerList = [
        { id: 1, name: "voice-extraction" },
        { id: 2, name: "vocabulary" },
    ];

    type Item = {
        id: number;
        name: string;
    }

    const setWhereFunction = (item: Item) => {
        goToFunction(navigate, `/${item.name}`);
    };

    return (
        <div className={styles.container}>
            <p onClick={() => goToFunction(navigate, "/")}>endemy</p>
            {headerList.map((item) => (
                <p
                    key={item.id}
                    onClick={() => setWhereFunction(item)}
                    style={{ color: location.pathname === `/${item.name}` ? "black" : "#939393" }}
                >
                    {item.name}
                </p>
            ))}
        </div>
    );
}
