import { useEffect, useState } from "react";
import { useAuthenticationContext } from "../contexts/AuthenticationContext"


export default function FriendsList() {

    const { httpReqCreator } = useAuthenticationContext();

    const [friends, setFriends] = useState([]);

    useEffect(() => {

        httpReqCreator.get("/friends")
        .then((res) => {
            console.log(res);
            setFriends(res.data);
        })
        .catch((err) => {
            console.error(err);
        })

    }, [httpReqCreator]);

    return (
        <ul className="friends-list">
            {
                friends.map((friend) => <li>{friend.name}, {friend.email}, {friend.age}</li>)
            }
        </ul>
    )
}