import { NavigateFunction } from "react-router-dom";

export default function goToFunction(navigate: NavigateFunction, goToPage: string) {
    navigate(goToPage);
}
