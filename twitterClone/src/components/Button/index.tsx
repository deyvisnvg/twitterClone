import classNames from "classnames";
import { Variant, Size, FontWeight } from "../../types/core";

interface Props {
    text: string;
    handleClick?: () => void;
    isFollowing?: boolean;
    setIsTextState?: React.Dispatch<React.SetStateAction<boolean>>;
    variant?: Variant;
    size?: Size;
    dinamic?: boolean;
    fontWeight?: FontWeight;
}

interface Color {
    [key: string]: string;
}

export default function Button({
    text,
    handleClick,
    setIsTextState,
    isFollowing = false,
    dinamic = false,
    variant = "default",
    size = "small",
    fontWeight = "normal",
}: Props) {

    const buttonStyle = classNames(
        "rounded-2xl h-9 text-sm",
        {
            "border-2 text-white hover:text-red-600 hover:border-red-600 w-32": isFollowing,
            "bg-white px-5 hover:bg-gray-200 text-black font-bold": !isFollowing,
        }
    )

    const colors: Color = {
        default: "bg-white text-black",
        primary: "bg-blue-600 text-white",
        secondary: "bg-gray-500 text-white",
        success: "bg-green-500 text-white",
        danger: "bg-red-500 text-white",
        warning: "bg-yellow-500 text-black",
        info: "bg-twitter_btn text-white",
        light: "bg-slate-200 text-white",
        dark: "bg-black text-white",
        link: "text-sky-500/90",
    };

    const sizes = {
        small: "py-2 px-4",
        medium: "py-4 px-5",
        large: "py-5 px-10",
    };

    const weight = {
        extralight: "font-extralight",
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
    };

    return (
        <>
            <button
                type="button"
                className={`${dinamic
                    ? buttonStyle
                    : `${colors[variant]} ${sizes[size]} ${weight[fontWeight]} rounded-full`}`
                }
                onClick={handleClick}
                onMouseEnter={() => setIsTextState && setIsTextState(true)}
                onMouseLeave={() => setIsTextState && setIsTextState(false)}
            >
                {text}
            </button>
        </>
    )
}