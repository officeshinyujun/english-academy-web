import Header from "../../components/header";
import styles from "./index.module.scss"
import IntroduceContainer from "../../components/introduceContainer";
import IntroduceBox from "../../components/introduceBox";
import ve1Image from "../../assets/images/ve-1.jpg"
import ve2Image from "../../assets/images/ve-2.jpg"
import voca1Image from "../../assets/images/voca-1.jpg"
import voca2Image from "../../assets/images/voca-2.jpg"

export default function Tutorial(){
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.contents}>
                <IntroduceContainer title="voice extraction">
                    <IntroduceBox explanation={"이부분에 원하는\n" +
                        "텍스트를 입력하세요"} imgSrc={ve1Image} imgWidth={"50%"}/>
                    <IntroduceBox explanation={"미리듣기로 미리 들을수 있고\n"+" 다운로드로 MP3 파일로 다운가능합니다."} imgSrc={ve2Image} imgHeight={"100%"}/>
                </IntroduceContainer>
                <IntroduceContainer title="vocabulary">
                    <IntroduceBox explanation={"각 칸에 문자 입력 가능하고,\n" +
                        "+ 버튼으로 칸 추가 가능합니다."} imgSrc={voca1Image} imgHeight={"100%"}/>
                    <IntroduceBox explanation={"색깔 버튼을 누르면 색깔이 지정되고,\n" +
                        "다운로드로 png 다운로드가 가능합니다."} imgSrc={voca2Image} imgHeight={"100%"}/>
                </IntroduceContainer>
            </div>
        </div>
    )
}