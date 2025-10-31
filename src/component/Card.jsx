import ProfilePic from '../assets/BaneProfilePic.png'
import Button from './Button'
import PropTypes from 'prop-types'

function Card({ name = "Ravenly Tab" }) {

    return (
        <div className="card">
            <img className='card-image' src={ProfilePic} alt="Andi Riswanda"></img>
            <h2>{name}</h2>
            <p>I Play Games And Draw :)</p>
            <Button />
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string
}
export default Card