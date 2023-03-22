import React from 'react'
import GithubStreak from './images/GithubStreak.PNG'

const Github = () => {

  
  return (
    <div>
        <div class="react-activity-calendar">
            <h1>Github</h1>
            {/* <img style={{width:"100%"}} id="github-streak-stats" src={GithubStreak} alt="" /> */}
        </div>
        {/* check their link */}
        {/* <p>GitHub streak stats</p> */}

        <div >          
          <img id="github-streak-stats"  src="https://streak-stats.demolab.com/?user=NehaP0&theme=radical" alt="img" />
        </div>

        {/* <p>GitHub top languages</p> */}
        <div>
          <img  id="github-top-langs" src="" alt="img" />
          {/* Not done yet */}
        </div>

        <p>GitHub stats</p>
        <div>          
          <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=NehaP0&show_icons=true&theme=radical" alt="img" />
        </div>


    
    </div>
  )
}

export default Github