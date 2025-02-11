
interface ButtonProps {
    onPress ?: () => void;
    width: number;
    height: number;
    children?: React.ReactNode;
    className?: string;
}

export default function Button(props : ButtonProps) {
    const { onPress, width, height , children, className} = props;
    return (
        <div style={{
            width: width ,
            height: height ,
        }}
             className={className}
            onClick={onPress}
        >
            {children}
        </div>
    )
}