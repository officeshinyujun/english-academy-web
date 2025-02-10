import axios from "axios";

interface Props {
    text: string;
    language: string;
    audioEncoding: string;
}

export default async function ttsFunction({ text, language, audioEncoding }: Props) {
    const baseUrl = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${import.meta.env.VITE_API_KEY}`;

    try {
        const response = await axios.post(baseUrl, {
            voice: { languageCode: language },
            input: { text: text },
            audioConfig: { audioEncoding: audioEncoding },
        });

        console.log(response.data);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}
