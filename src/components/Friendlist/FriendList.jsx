import { FriendsList } from "./FriendList.styled"
import { FriendsListItem } from "./FriendListItem"

export const FriendList = ({friends}) => {
    return (
        <FriendsList>
            {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
        />
        ))}
        </FriendsList>
    )
}