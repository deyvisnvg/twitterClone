import { useState } from "react";
import { Button } from "../../../../../../components";

interface USER {
    name: String;
    username: String,
    initialIsFollowing: boolean;
}

export default function Card({ name, username, initialIsFollowing }: USER) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const [isTextState, setIsTextState] = useState(false);

    const text = !isFollowing ? "Seguir" : isTextState ? "Dejar de seguir" : "Siguiendo";

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    return (
        <>
            <div className="flex gap-x-4 items-center justify-between p-2 px-4 hover:bg-gray-600/40">
                <div className="flex gap-4">
                    <img src={`https://unavatar.io/${username}`} alt="" width={30} height={30} className="rounded-full" />
                    <div>
                        <p className="font-bold">{name}</p>
                        <p className="text-sm text-gray-400 -m-1">@{username}</p>
                    </div>
                </div>
                <Button
                    text={text}
                    handleClick={handleClick}
                    setIsTextState={setIsTextState}
                    isFollowing={isFollowing}
                    dinamic
                />
            </div>
        </>
    )
}