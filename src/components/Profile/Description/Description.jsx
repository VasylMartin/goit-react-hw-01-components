import user from '../user.json'
import PropTypes from 'prop-types'


export const Description = ({username, tag, location, avatar}) => {
    return <div className="description">
    <img
      src={user.avatar}
      alt={user.username}
      className="avatar"
    />
    <p className="name">{user.username }</p>
    <p className="tag">@{user.tag}</p>
    <p className="location">{user.location}</p>
  </div>
}

Description.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string
}