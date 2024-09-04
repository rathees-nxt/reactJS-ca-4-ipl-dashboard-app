// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {matchData: [], isLoading: true, matchClassName: ''}

  componentDidMount() {
    this.getTeamMatch()
  }

  getTeamMatch = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        id: data.latest_match_details.id,
        manOfMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(each => ({
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        date: each.date,
        firstInnings: each.first_innings,
        id: each.id,
        manOfMatch: each.man_of_the_match,
        matchStatus: each.match_status,
        result: each.result,
        secondInnings: each.second_innings,
        umpires: each.umpires,
        venue: each.venue,
      })),
    }
    this.setState({
      matchData: formatedData,
      isLoading: false,
      matchClassName: id,
    })
  }

  renderTeamMatches = () => {
    const {matchData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchData
    return (
      <div className="team-matches">
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-img"
        />
        <LatestMatch latestMatch={latestMatchDetails} />
        <ul className="recent-matches-list">
          {recentMatches.map(eachMatch => (
            <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-cont">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading, matchClassName} = this.state
    return (
      <div className={`team-match-container ${matchClassName}`}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
