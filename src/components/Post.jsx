import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'

export default function Post({profilePic, image, username, timestamp, message}) {
    return (
        <Wrapper>
            <div className="post-top">
                <Avatar src={profilePic} className="post-avatar"/>
                <div className="post-top-info">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post-bottom">
                <p>{message}</p>
            </div>

            <div className="post-image">
                <img src={image} alt="" />
            </div>

            <div className="post-options">
                <div className="post-option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post-option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post-option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post-option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 0 40px 0;
    border-radius: 15px;
    background: white;
    box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);

    img{
        width: 100%;
        margin-bottom: 5px;
        cursor: pointer;
    }

    .post-top{
        display: flex;
        padding: 15px;
        align-items: center;
    }

    .post-avatar{
        margin: 0 10px 0 0;
    }

    .post-top-info{
        h3{
            font-size: medium;
        }

        p{
            color: grey;
            font-size: small;
        }
    }

    .post-bottom{
        padding: 15px 25px;
    }

    .post-options{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: small;
        border-top: 1px solid lightgray;
        color: gray;
        cursor: pointer;
        padding: 15px;
    }

    .post-option{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        flex: 1;

        p{
            margin-left: 10px;
        }

        &:hover{
            background: #eff2f5;
            border-radius: 10px;
        }
    }
`