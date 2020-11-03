import React from 'react';
import "./Profile.css";
import RecentItem from './RecentItem';

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__topLeft">
                <img src="https://www.upwork.com/profile-portraits/c1kkybR9dROJoAArOgWZ_Hz8u-mjhnH5gAuDbhvyw7E8r6jipteuqvcIXNZVIXUM1D" alt="UpWork ID" />

                <div className="profile__topLeftDetails">
                        <h1>Shakeeb Dev</h1>
                        <h3>820k followers</h3>
                </div>
            </div>

            <div className="profile__topRight">
                <i className="fas fa-heart graybg"></i>
                <i className="fas fa-bell graybg"></i>
                <i className="fas fa-ellipsis-v"></i>
            </div>

            <div className="profile__menu">
                <h2 className="active">Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Video</h2>
                <h2><i className="fas fa-arrow-up"></i></h2>
                <h2>Chat</h2>
            </div>

            <div className="profile__recent">
                <h2>Recent broadcasts</h2>
                <div className="profile__recentItems">
                    <RecentItem
                        url={'https://www.youtube.com/embed/eI4an8aSsgw'}
                        title={'Precalculus Course'}
                    />
                      <RecentItem
                        url={'https://www.youtube.com/embed/Iu3RR-b7Nzw'}
                        title={'Photo Presentation'}
                    />
                      <RecentItem
                        url={'https://www.youtube.com/embed/jrTMMG0zJyI'}
                        title={'Lofi Samurai Japanese Mix'}
                    />
                      <RecentItem
                        url={'https://www.youtube.com/embed/UMKWijxv0kE'}
                        title={'10 Years of Coding in 10 Min'}
                    />
                </div>

                <div className="profile__categories">
                  
                        <h2>Shakeeb's recently streamed Categories</h2>
                        <div className="img__container">
                            <img src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20%26%20Technology.jpg" alt="programming html" />
                            
                            <img src="https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2021-285x380.jpg" />

                            <img src="https://static-cdn.jtvnw.net/ttv-boxart/VALORANT-285x380.jpg" />

                            <img src="https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-285x380.jpg" />

                            <img src="https://static-cdn.jtvnw.net/ttv-boxart/Fitness%20&%20Health-285x380.jpg" />
                           
                        </div>
                        
                    
                </div>
            </div>
        </div>
    )
}

export default Profile;
