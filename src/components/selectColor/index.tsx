import styles from "./index.module.scss";

interface Props {
    onSelectColor: (color: string) => void;
}

export default function SelectColor({ onSelectColor }: Props) {
    const colorList = [
        "#F7D9C4",
        "#DBC0F0",
        "#FAEDCB",
        "#C9E4DE",
        "#C6DEF1",
        "#F2C6DE",
    ];

    return (
        <div className={styles.container}>
            <p>색깔</p>
            <div className={styles.colorContainer}>
                {colorList.map((item) => (
                    <div
                        key={item}
                        style={{ background: item }}
                        className={styles.colorBox}
                        onClick={() => onSelectColor(item)} // 클릭 시 부모 컴포넌트에 전달
                    />
                ))}
            </div>
        </div>
    );
}
