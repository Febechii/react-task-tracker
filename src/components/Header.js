import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title = 'Task Tracker', onAdd, showAdd }) => {
  return (
    <header className = 'header'>
      <h1>{title}</h1>
      <Button 
      color = {showAdd? 'red' : 'green'}
      text = {showAdd? 'Close': 'Add'} 
      onClick = {onAdd}/>
    </header>
  )
}

/*Header.defaultProps = {
    title: 'Task Tracker',
}*/

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
/*//CSS in J
const headingStyle = {
    color: 'red', 
    backgroundColor: 'black',
}
    */

export default Header
