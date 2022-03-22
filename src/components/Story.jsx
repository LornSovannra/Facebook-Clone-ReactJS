import React from 'react'
import '../css/Story.css'
import { Avatar } from '@material-ui/core'

export default function Story({ bgImage, profileSrc, title }) {
    return (
        <div style={{backgroundImage: `url(${bgImage})`}} className="story">
            <Avatar className="story-avatar" src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}
