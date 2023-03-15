import React from 'react'
import GithubStreak from './GithubStreak.PNG'

const Github = () => {
  return (
    <div>
        <h1>Github</h1>
        <img style={{width:"100%"}} id="github-streak-stats" src={GithubStreak} alt="" />
        {/* check their link */}
    </div>
  )
}

export default Github