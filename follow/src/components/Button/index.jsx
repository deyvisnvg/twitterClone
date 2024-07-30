import classNames from "classnames";

export default function Button({
    handleClick,
    isFollowing = false,
    setIsTextState,
    text,
    dinamic = false,
    variant = "link",
    size = "small",
}) {
    /*const buttonStyle = classNames(
        "rounded-2xl py-2 text-sm",
        {
            "border-2 text-white hover:text-red-600 hover:border-red-600 w-40": isFollowing,
            "bg-white px-5 hover:bg-gray-200": !isFollowing,
        }
    )*/

    /* const buttonStyle = classNames(
        "rounded-2xl py-2 text-sm",
        {
            "border-2 text-white hover:text-red-600 hover:border-red-600 w-40": isFollowing,
            "bg-white px-5 hover:bg-gray-200": !isFollowing,
        }
    ) */


    const buttonStyle = classNames(
        "rounded-2xl h-9 text-sm",
        {
            "border-2 text-white hover:text-red-600 hover:border-red-600 w-40": isFollowing,
            "bg-white px-5 hover:bg-gray-200 text-black font-bold": !isFollowing
        }
    )

    const colors = {
        default: "bg-white text-black",
        primary: "bg-blue-600 text-white",
        secondary: "bg-gray-500 text-white",
        success: "bg-green-500 text-white",
        danger: "bg-red-500 text-white",
        warning: "bg-yellow-500 text-black",
        info: "bg-sky-400 text-white",
        light: "bg-slate-200 text-black",
        dark: "bg-black text-white",
        link: "text-blue-700",
    };

    const sizes = {
        small: "py-2 px-2",
        medium: "py-4 px-5",
        large: "py-5 px-10",
    };

    return (
        <>
            <button
                //className="text-blue-700"
                className={`${dinamic ? buttonStyle : colors[variant]} ${sizes[size]}`}
                onClick={handleClick}
                onMouseEnter={() => setIsTextState(true)}
                onMouseLeave={() => setIsTextState(false)}
            >
                {text}
            </button>
        </>
    )
}