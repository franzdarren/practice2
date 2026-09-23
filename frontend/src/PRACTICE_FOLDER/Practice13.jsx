import {React, useState} from 'react'
import './Practice13.css'

export default function Practice13() {
    const tweets = [
        {
            "id": "t005",
            "author": { "name": "CSS Wizard", "handle": "flexboxgoblin", "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=flexboxgoblin", "verified": true },
            "content": "centered a div on the first try today. i do not know what i did. i am afraid to refresh.",
            "createdAt": "2026-09-23T04:18:00Z",
            "likes": 33921, "retweets": 11203, "replies": 842, "image": null
        },
        {
            "id": "t006",
            "author": { "name": "Anime Screencaps", "handle": "framesofanime", "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=framesofanime", "verified": false },
            "content": "no context frame. rate the composition.",
            "createdAt": "2026-09-23T03:02:00Z",
            "likes": 9210, "retweets": 2011, "replies": 156, "image": "/images/frame.svg"
        },
        {
            "id": "t007",
            "author": { "name": "Darren", "handle": "franzdarren", "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=franzdarren", "verified": false },
            "content": "been up 24 hours building a react app at work while pretending to study. this is fine.",
            "createdAt": "2026-09-23T02:44:00Z",
            "likes": 412, "retweets": 38, "replies": 61, "image": null
        },
        {
            "id": "t008",
            "author": { "name": "API Status Bot", "handle": "apidownbot", "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=apidownbot", "verified": true },
            "content": "ALERT: upstream returning 504 on all uncached endpoints. cached responses still serving. we are aware.",
            "createdAt": "2026-09-23T01:30:00Z",
            "likes": 88, "retweets": 214, "replies": 501, "image": null
        }
    ]

    return (
        <>
            {tweets.map((tweet) =>
                <TweetCard key={tweet.id} tweet={tweet}/>
            )}
        </>
    )
}

//COMPONENTS    
const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC"
})

function formatDate(isoString) {
    return dateFormatter.format(new Date(isoString)) + " UTC"
}

function TweetCard({ tweet }) {
    const [numOfLikes, setNumOfLikes] = useState(tweet.likes)
    const [liked, setLiked] = useState(false);
    const [retweeted, setRetweeted] = useState(false);

    return (
        <div className='tweet-card'>
            <img className='avatar' src={tweet.author.avatar} alt={tweet.author.name} />

            <div className='tweet-body'>
                <div className='tweet-header'>
                    <span className='identity'>
                        <h2 className='name'>{tweet.author.name}</h2>
                        {tweet.author.verified && <span className='verified' title='Verified'>✓</span>}
                        <span className='handle'>@{tweet.author.handle}</span>
                    </span>
                    <time className='created-at' dateTime={tweet.createdAt}>
                        {formatDate(tweet.createdAt)}
                    </time>
                </div>

                <p className='content'>{tweet.content}</p>

                <div className='tweet-media'>
                    {tweet.image && (
                        <img className='tweet-image' src={tweet.image} alt='' loading='lazy' />
                    )}
                </div>

                <div className='tweet-stats'>
                    <span className='stat stat--reply'><span className='stat__icon'>🗨</span>{tweet.replies}</span>
                    <span className='stat stat--retweet'><span className='stat__icon'>🔁</span>{tweet.retweets}</span>
                    <span onClick={()=> setLiked(true)} className='stat stat--like'><span className='stat__icon'>♥</span>{tweet.likes}</span>
                </div>
            </div>
        </div>
    )
}


