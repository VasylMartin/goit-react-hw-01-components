import user  from '../user.json'
import PropTypes from 'prop-types'

export const Stats = ({followers, views, likes}) => {
    return <ul ClassName="stats">
    <li>
      <span ClassName="label">Followers</span>
      <span ClassName="quantity">{user.stats.followers}</span>
    </li>
    <li>
      <span ClassName="label">Views</span>
      <span ClassName="quantity">{user.stats.views}</span>
    </li>
    <li>
      <span ClassName="label">Likes</span>
      <span ClassName="quantity">{user.stats.likes}</span>
    </li>
  </ul>
}

Stats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number
}