import { Card } from "./components";
import { USER } from "../../../../core/user";

export default function Follow() {
    return (
        <>
            <div className="w-[355px] text-white rounded-2xl border border-gray-700/80">
                <h1 className="text-2xl font-bold p-3 px-4">A quién seguir</h1>
                <div>
                    {
                        USER.map(({ id, name, username, initialIsFollowing }) => {
                            return (
                                <Card
                                    key={id}
                                    name={name}
                                    username={username}
                                    initialIsFollowing={initialIsFollowing}
                                />
                            )
                        })
                    }
                </div>
                <div className="text-sky-500 p-4 hover:bg-gray-600/40 hover:rounded-b-2xl">
                    <button type="button">Mostrar más</button>
                </div>
            </div>
        </>
    )
}