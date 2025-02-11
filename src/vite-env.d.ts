import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react()],
    css:{
        preprocessorOptions:{
            scss:{
                additionalData : "@use \"/src/styles/global.scss;\" as *;"
            }
        }
    }
})

declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}