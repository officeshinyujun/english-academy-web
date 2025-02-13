import Header from "../../components/header";
import styles from "./index.module.scss";
import { useState } from "react";
import Button from "../../components/button";
import { MdVolumeUp } from "react-icons/md";
import { MdFileDownload } from "react-icons/md";
import ttsFunction from "../../feature/ttsFunction.tsx";
import Modal from "../../components/modal/index.tsx";
import { IoMdClose } from "react-icons/io";

export default function VoiceExtraction() {
    const [text, setText] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fileName, setFileName] = useState("");

    const handleTTs = async () => {
        try {
            const ttsRes = await ttsFunction({
                text: text,
                language: "en",
                audioEncoding: "MP3"
            });

            if (ttsRes) {
                // Base64 -> Blob 변환
                const byteCharacters = atob(ttsRes.audioContent);
                const byteNumbers = new Uint8Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const audioBlob = new Blob([byteNumbers], { type: "audio/mp3" });

                // Blob을 Object URL로 변환 후 재생
                const audioUrl = URL.createObjectURL(audioBlob);
                const audio = new Audio(audioUrl);
                audio.play();
            }
        } catch (error) {
            console.error("TTS 생성 오류:", error);
        }
    };

    const handleDownload = async () => {
        if (!fileName) {
            alert("파일 이름을 입력해주세요.");
            return;
        }

        try {
            const ttsRes = await ttsFunction({
                text: text,
                language: "en",
                audioEncoding: "MP3"
            });

            if (ttsRes) {
                const base64Data = ttsRes.audioContent.replace(/^data:audio\/mp3;base64,/, "");

                // Base64 -> Blob 변환
                const byteCharacters = atob(base64Data);
                const byteNumbers = new Uint8Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const audioBlob = new Blob([byteNumbers], { type: "audio/mp3" });

                // 다운로드 링크 생성
                const audioUrl = URL.createObjectURL(audioBlob);
                const link = document.createElement("a");
                link.href = audioUrl;
                link.download = `${fileName}.mp3`; // 다운로드될 파일 이름
                link.click(); // 자동으로 클릭하여 다운로드
                URL.revokeObjectURL(audioUrl); // 객체 URL 메모리 해제
            }
        } catch (error) {
            console.error("TTS 생성 오류:", error);
        }
    };

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.contents}>
                <textarea
                    placeholder="텍스트를 입력하세요..."
                    onChange={(e) => setText(e.target.value)}
                />
                <div className={styles.buttonList}>
                    <div className={styles.buttonBar} onClick={handleTTs}>
                        <Button width={80} height={80} onPress={() => { console.log("ASdf"); }} className={styles.buttonContainer}>
                            <MdVolumeUp size={40} className={styles.buttonImage} />
                        </Button>
                        <p>미리듣기</p>
                    </div>
                    <div className={styles.buttonBar} onClick={() => setIsModalOpen(true)}>
                        <Button width={80} height={80} className={styles.buttonContainer}>
                            <MdFileDownload size={40} className={styles.buttonImage} />
                        </Button>
                        <p>다운로드</p>
                    </div>
                </div>
            </div>
            <Modal width={400} height={300} isModalOpen={isModalOpen} className={styles.modalContainer}>
                <div className={styles.modalInputContainer}>
                    <input
                        placeholder="파일 이름을 입력하세요"
                        onChange={(e) => setFileName(e.target.value)}
                    />
                    <Button onPress={handleDownload} width={100} height={30} className={styles.downloadButton}>다운로드</Button>
                </div>
                <Button width={30} height={30} onPress={() => setIsModalOpen(false)}>
                    <IoMdClose size={30} className={styles.buttonImage} />
                </Button>
            </Modal>
        </div>
    );
}
