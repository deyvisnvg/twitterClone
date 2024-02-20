import { Card } from "./Card";

const users = [
    {
        id: 1,
        name: "Kiko Beats Royal",
        username: "kikobeats",
        isFollowing: true,
    },
    {
        id: 2,
        name: "Deyvis Valdez",
        username: "deyvisnvg",
        isFollowing: false,
    },
    {
        id: 3,
        name: "Chema Alonso",
        username: "chemaalonso",
        isFollowing: true,
    },
    {
        id: 4,
        name: "S4vitar",
        username: "S4vitar",
        isFollowing: false,
    }
]

export default function TwitterFollowCard() {
    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center">
                <div className="bg-twitter p-7 rounded-3xl">
                    <h2 className="text-white text-3xl font-bold py-2">A quién seguir</h2>
                    <div>
                        {
                            users.map(({ id, name, username, isFollowing }) => {
                                return (
                                    <Card
                                        key={id}
                                        name={name}
                                        username={username}
                                        initialIsFollowing={isFollowing}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}