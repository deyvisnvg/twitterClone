import classNames from "classnames";
import { Variant, Size } from "../../types/core";

interface Props {
    text: string;
    handleClick?: () => void;
    isFollowing?: boolean;
    setIsTextState?: () => void;
    variant?: Variant;
    size?: Size;
    dinamic?: boolean;
}

interface Color {
    [key: string]: string;
}

export default function Button({
    text,
    /*handleClick,
    isFollowing = false,
    setIsTextState,
    dinamic = false,*/
    variant = "default",
    size = "small",
}: Props) {

    /*const buttonStyle = classNames(
        "rounded-2xl py-2 text-sm",
        {
            "border-2 text-white hover:text-red-600 hover:border-red-600 w-40": isFollowing,
            "bg-white px-5 hover:bg-gray-200": !isFollowing,
        }
    )*/

    const colors: Color = {
        default: "bg-white text-black",
        primary: "bg-blue-600 text-white",
        secondary: "bg-gray-500 text-white",
        success: "bg-green-500 text-white",
        danger: "bg-red-500 text-white",
        warning: "bg-yellow-500 text-black",
        info: "bg-sky-500 text-white",
        light: "bg-slate-200 text-white",
        dark: "bg-black text-white",
        link: "text-blue-700",
    };

    const sizes = {
        small: "py-2 px-4",
        medium: "py-4 px-5",
        large: "py-5 px-10",
    };

    return (
        <>
            <button
                className={`${colors[variant]} ${sizes[size]} rounded-full font-bold`}
               /*className={`${dinamic
                    ? buttonStyle
                    : `${colors[variant]} ${sizes[size]} rounded-full font-bold`}`
                }
                onClick={handleClick}
                onMouseEnter={() => setIsTextState(true)}
                onMouseLeave={() => setIsTextState(false)}
                */
            >
                {text}
            </button>
        </>
    )
}