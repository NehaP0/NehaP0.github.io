import React from 'react'
import GitHubCalendar from 'react-github-calendar'

const Github = () => {

  
  return (
    <div id='github' >
            <h3>Github</h3>
        <div class="react-activity-calendar">
            <GitHubCalendar username="NehaP0"/>
        </div>
      <div id="makeitflex">
        <div>
                 
          <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=NehaP0&theme=radical" alt="img" />
        </div>

        
        <div>
          <img  id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=NehaP0&theme=radical" alt="img" />
          
        </div>

        
        <div>          
          <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=NehaP0&show_icons=true&theme=radical" alt="img" />
        </div>

        </div>


    
    </div>
  )
}

export default Github