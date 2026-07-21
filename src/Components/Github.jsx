import React from 'react'
import GitHubCalendar from 'react-github-calendar'

const Github = () => {
  const customTheme = {
    dark: ['#1e1c32', '#6b1d44', '#b32b62', '#ec407a', '#ff79b0'],
  }

  return (
    <div id='github'>
      <h3>Github</h3>
      
      <div className="calendar-container">
        <div className="react-activity-calendar">
          <GitHubCalendar 
            username="NehaP0"
            colorScheme="dark"
            theme={customTheme}
            blockSize={14}
            blockMargin={5}
            fontSize={14}
          />
        </div>
      </div>

      <div id="makeitflex">
        <div className="stat-card-wrapper">
          <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=NehaP0&theme=radical" alt="GitHub Streak Stats" />
        </div>
        <div className="stat-card-wrapper">
          <img id="github-top-langs" src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs?username=NehaP0&theme=radical" alt="GitHub Top Languages" />
        </div>
        <div className="stat-card-wrapper">          
          <img id="github-stats-card" src="https://github-readme-stats-sigma-five.vercel.app/api?username=NehaP0&show_icons=true&theme=radical" alt="GitHub Stats Card" />
        </div>
      </div>
    </div>
  )
}

export default Github