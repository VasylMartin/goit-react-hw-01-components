import { Card, CardDescription, UserImg, UserName, UserTag, UserLocation, UserStats, UserStat, StatLabel, StatQuantity} from "./Profile.styled";
import PropTypes from 'prop-types';

export const Profile = ({avatar, username, tag, location, stats}) => {
    return (
        <Card>
    <CardDescription>
        <UserImg src={avatar} alt={username} />
        <UserName>{username}</UserName> 
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
    </CardDescription>
    <UserStats>
        <UserStat>
            <StatLabel>Followers</StatLabel>
            <StatQuantity>{stats.followers}</StatQuantity>
        </UserStat>
        <UserStat>
            <StatLabel>Views</StatLabel>
            <StatQuantity>{stats.views}</StatQuantity>
        </UserStat>
        <UserStat>
            <StatLabel>Likes</StatLabel>
            <StatQuantity>{stats.likes}</StatQuantity>
        </UserStat>
    </UserStats>
</Card> 
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};