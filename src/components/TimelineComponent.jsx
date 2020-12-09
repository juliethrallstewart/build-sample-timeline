import React, {useContext, useState} from 'react';
import Context from '../contexts/Context'
import SparkleImg from '../assets/twitter-data/images/sparkles.png'


const TimelineComponent = () => {

    const {timeline, user, setTimeline} = useContext(Context)
    
    const [tweetButtonDisabled, setTweetButtonDisabled] = useState(true)

    const [tweetText, setTweetText] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        setTweetButtonDisabled(true)

        if (tweetText.tweet) {
            setTimeline([tweetText, ...timeline])
            setTweetText({...tweetText, "user": {
                "name": "",
                "handle": "",
                "image": "",
            },
                "tweet": "",
                "replies": 0,
                "retweets": 0,
                "likes": 0,
                "created": "2020-10-27T22:14:26Z"
            })
        }
        
    }

    const handleChange = (e) => {
        setTweetText({...tweetText, "user": {
            "name": user.name,
            "handle": user.handle,
            "image": user.image,
        },
            "tweet": e.target.value,
            "replies": 0,
            "retweets": 0,
            "likes": 0,
            "created": "2020-10-27T22:14:26Z"
        })
    }

    const handleTweetTextBoxClick = (e) => {
        setTweetButtonDisabled(false)

    }

    const randomNumberGenerator = () => {
        return Math.floor(Math.random() * (59 - 1) + 1)
    }

    var res = String.fromCharCode(2022)
    console.log(res, "RES")
    
    return (
        timeline.length > 0 && user ? 
        <div className="home-container">
            <div className="timeline-container-header">
                <div>Home</div>
                <div><img className="sparkle-icon" src={SparkleImg}></img></div>
            </div>
            <div className="user-container">
                <div className="user-image-container">
                    <img className="user-home-profile-pic" src={require(`../assets/twitter-data/images/${user.image}`).default} alt={user.name}></img>
                </div>
                <div className="tweet-container">
                    <div className={tweetButtonDisabled ? "user-tweet-input-container-no-border" : "user-tweet-input-container-border"}>
                        <form id="tweet-form" onSubmit={handleSubmit} onClick={handleTweetTextBoxClick}>
                            <textarea 
                                type="textarea"
                                name="search"
                                placeholder="What's happening?"
                                onChange={handleChange}
                                value={tweetText.tweet}
                                className="tweet-text-area"
                            ></textarea>
                        </form>
                        <img className={!tweetButtonDisabled ? "user-tweet-visibility-status" : "user-tweet-status-hidden"}src={require('../assets/twitter-data/images/tweetVisibilityStatus.png').default}></img>
                    </div>
                    <div className="user-social-media-container">
                        <div className="user-social-media-icons-container">
                            <a href="/" className="user-icon"><img className="user-social-media-icons-img" src={require('../assets/twitter-data/images/picture.png').default}></img></a>
                            <a href="/" className="user-icon"><img className="user-social-media-icons-img" src={require('../assets/twitter-data/images/gif.png').default}></img></a>
                            <a href="/" className="user-icon"><img className="user-social-media-icons-img" src={require('../assets/twitter-data/images/poll.png').default}></img></a>
                            <a href="/" className="user-icon"><img className="user-social-media-icons-img" src={require('../assets/twitter-data/images/emoji.png').default}></img></a>
                            <a href="/" className="user-icon"><img className="user-social-media-icons-img" src={require('../assets/twitter-data/images/schedule.png').default}></img></a>
                        </div>
                        <div className="user-tweet-submit-btn-container">
                            <button form="tweet-form" onSubmit={handleSubmit} disabled={tweetButtonDisabled} className={!tweetButtonDisabled ? "user-tweet-btn-active" : "user-tweet-btn-disabled"}>Tweet</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="timeline-container">
                {timeline.map((item, idx) => {
                    return (
                        <div className="timeline-tweet-container" key={idx}>
                            <div className="timeline-user-image-container">
                                <img className="timeline-profile-pic" src={require(`../assets/twitter-data/images/${item.user.image}`).default} alt={item.user.name}></img>
                            </div>
                            <div className="timeline-tweet-box">
                                <div className="timeline-user-info-box">
                                    <div className="timeline-user-info">
                                        <p className="timeline-user-name">{item.user.name}</p>
                                        <p className="timeline-user-handle">@{item.user.handle}</p>
                                        <p className="timeline-faux-minutes">{'\u2022'} {randomNumberGenerator()}</p>
                                    </div>
                                    <div className="timeline-more-icon-box">
                                        <img className="timeline-social-media-icons-img" src={require('../assets/twitter-data/images/dots.png').default}></img>
                                    </div>
                                </div>
                                <div className="timeline-tweet-displayed">
                                    <p>{item.tweet}</p>
                                </div>
                                <div className="timeline-info-icons-container">
                                    <div className="timeline-icon-box">
                                        <img className="timeline-social-media-icons-img" src={require('../assets/twitter-data/images/comment.png').default}></img>
                                        <p className="timeline-icon-stat">{item.replies}</p>
                                    </div>
                                    <div className="timeline-icon-box">
                                        <img className="timeline-social-media-icons-img" src={require('../assets/twitter-data/images/retweet.png').default}></img>
                                        <p className="timeline-icon-stat">{item.retweets}</p>
                                    </div>
                                    <div className="timeline-icon-box">
                                        <img className="timeline-social-media-icons-img" src={require('../assets/twitter-data/images/like.png').default}></img>
                                        <p className="timeline-icon-stat">{item.likes}</p>
                                    </div>
                                    <div className="timeline-icon-box">
                                        <img className="timeline-social-media-icons-img" src={require('../assets/twitter-data/images/share-tweet.png').default}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div> : <div>Loading...</div>
    )
}

export default TimelineComponent;

// "name": "Steven G. Rogers",
// "handle": "cap",
// "image": "uieCVci1_400x400.jpg"
// },
// "tweet": "You get hurt, hurt them back. You get killed... walk it off.",
// "replies": 124,
// "retweets": 63,
// "likes": 1123,