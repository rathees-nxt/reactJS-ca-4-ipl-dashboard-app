// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  console.log(matchDetails)
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="card-logo"
      />
      <p className="card-name">{competingTeam}</p>
      <p className="card-result">{result}</p>
      <p className={`card-status ${matchStatus}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
