declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.css" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';