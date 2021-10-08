import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({ title,toggleAdd,showAddBtn }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button 
      click = {toggleAdd} bgcolor={showAddBtn? 'red':'rgb(0, 45, 128)'} text={showAddBtn? 'Close': 'Add'} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title : PropTypes.string.isRequired,
}
export default Header;
