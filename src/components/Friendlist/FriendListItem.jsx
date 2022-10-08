import { FriendListItem, Status, Photo, Name } from "./FriendListItem.styled"

export const FriendsListItem = ({avatar, name, isOnline}) => {
    return (
        <FriendListItem>
            <Status isOnline={isOnline}></Status>
            <Photo src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </FriendListItem>
    )
}