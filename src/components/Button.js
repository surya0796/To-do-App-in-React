import PropTypes from 'prop-types'

const Button = ({ bgcolor, text, click }) => {
    return (
        <div>
            <button 
            onClick = {click}
            style={{ backgroundColor: bgcolor }}
             className="btn">
             {text}
             </button>
        </div>
    )
}
Button.defaultProps = {
    bgcolor: 'black',
    text: 'Add'
}
Button.propTypes = {
    bgcolor: PropTypes.string,
    text: PropTypes.string,
    click: PropTypes.func
}

export default Button
