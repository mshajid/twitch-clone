import React from 'react';
import "./Stream.css";

const Stream = () => {
    return (
        <div className="stream" >
            <div className="stream__container">
                <div className="stream__status">
                    <div className="stream__statusContainer">
                        <div className="stream__statusContainerTop">

                            <div className="stream__statusIndicator">
                                OFFLINE
                            </div>
                            <h2>Check out the below steam from Shakeeb</h2>

                            <div className="stream_statusInfo">
                            <i className="fas fa-bell"></i>
                            <p>You will be notified when Shakeeb is Live</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="stream__videoEmbed">
                    <iframe 
                    width="550" 
                    height="295" 
                    src="https://www.youtube.com/embed/l9nh1l8ZIJQ" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Stream
