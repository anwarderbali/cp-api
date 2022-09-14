import './user.css'
const Card = ({ user }) => {
    return (
        <div className='card'> 
            <span>Id: {user.id}</span>
            <span>Id: {user.email}</span>
            <span>Id: {user.name}</span>
            <span>Id: {user.username}</span>
        </div>
    )

}

export default Card;