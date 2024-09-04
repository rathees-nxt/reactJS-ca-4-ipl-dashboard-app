// Write your code here
import {Component} from 'react'
import './index.css'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const format = data.teams.map(eachData => ({
      id: eachData.id,
      name: eachData.name,
      imageUrl: eachData.team_image_url,
    }))
    this.setState({teamData: format, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {teamData, isLoading} = this.state
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="ipl-dashboard">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo-img"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            this.renderLoader()
          ) : (
            <ul className="team-list-items">
              {teamData.map(team => (
                <TeamCard key={team.id} teamData={team} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
