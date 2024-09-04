// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, imageUrl} = teamData
  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="team-card-item">
        <div className="team-card">
          <img className="card-image" src={imageUrl} alt={`${name}`} />
          <p className="card-heading">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
