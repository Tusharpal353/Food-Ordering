import { useRouteError } from "react-router-dom";

const Erro = () => {
    const err = useRouteError();
    console.log(err);
}