// Write your code here
import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfMatch,
      result,
      secondInnings,
      umpires,
      venue,
    } = latestMatch
    return (
      <div className="latest-match-card-container">
        <h1 className="latest-heading">Latest Match</h1>
        <div className="latestmatch-card">
          <div className="match-logo-container">
            <div className="latest-match-details">
              <p className="match-name">{competingTeam}</p>
              <p className="match-date">{date}</p>
              <p className="match-venue">{venue}</p>
              <p className="match-result">{result}</p>
            </div>
            <img
              className="match-logo-img"
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
            />
          </div>
          <div className="latest-match-info">
            <div className="match-info">
              <p className="match-label-innings">First Innings</p>
              <p className="match-text-innings">{firstInnings}</p>
            </div>
            <div className="match-info">
              <p className="match-label-innings">Second Innings</p>
              <p className="match-text-innings">{secondInnings}</p>
            </div>
            <div className="match-info">
              <p className="match-label-innings">Man Of The Match</p>
              <p className="match-text-innings">{manOfMatch}</p>
            </div>
            <div className="match-info">
              <p className="match-label-innings">Umpires</p>
              <p className="match-text-innings">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
