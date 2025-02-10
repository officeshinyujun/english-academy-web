interface modalProps {
    width:number,
    height:number,
    children : React.ReactNode,
    className?:string,
    isModalOpen?:boolean,
}

import styles from "./index.module.scss"

export default function Modal(props: modalProps) {
    const { height, width, children ,className, isModalOpen} = props;

    if (isModalOpen) {
        return (
            <div
                className={styles.overlay}
            >
                <div className={className}
                    style={{
                        width: width,
                        height: height,
                    }}
                >
                    {children}
                </div>
            </div>
        )
    } else{
        return null
    }
}