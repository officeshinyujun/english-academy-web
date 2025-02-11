import styles from "./index.module.scss"

interface Props {
    explanation: string
    imgSrc: string
    imgWidth?: string
    imgHeight?: string
}

export default function IntroduceBox(props : Props) {
    const { explanation, imgSrc, imgWidth, imgHeight } = props
    return(
        <div className={styles.container}>
            <img src={imgSrc} alt="asdf" style={{ width: imgWidth, height: imgHeight }} />
            <p>{explanation}</p>
        </div>
    )
}