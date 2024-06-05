import PropTypes from 'prop-types'
import './Header.css'

const Header = ({title}) => {
  return (
    <div>{title}</div>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;

