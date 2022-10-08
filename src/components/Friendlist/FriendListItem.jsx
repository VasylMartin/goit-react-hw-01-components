import { FriendListItem, Status, Photo, Name } from "./FriendListItem.styled"
import PropTypes from 'prop-types';

export const FriendsListItem = ({avatar, name, isOnline}) => {
    return (
        <FriendListItem>
            <Status isOnline={isOnline}></Status>
            <Photo src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </FriendListItem>
    )
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};