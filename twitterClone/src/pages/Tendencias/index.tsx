import { Suscribirse, Tendencia, Follow } from "./components";

export default function Tendencias() {


    return (
        <div className="text-white flex flex-col gap-4 pt-1 pb-9 pl-9">
            <Suscribirse />
            <Tendencia />
            <Follow />
        </div>
    )
}