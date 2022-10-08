import { FriendsList } from "./FriendList.styled"
import { FriendsListItem } from "./FriendListItem"
import PropTypes from 'prop-types'

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

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        })
    ),
};