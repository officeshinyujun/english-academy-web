import styles from "./index.module.scss"

interface Props {
    title : string
    children : React.ReactNode
}

export default function IntroduceContainer(props : Props){
    const {title, children} = props
    return (
        <div className={styles.container}>
            <p>{title}</p>
            <div className={styles.contents}>
                {children}
            </div>
        </div>
    )
}