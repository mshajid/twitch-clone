import React from 'react';
import Channel from './Channel';
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h5>FOLLOWED CHANNELS</h5>
                
                <Channel avatar="https://www.upwork.com/profile-portraits/c1kkybR9dROJoAArOgWZ_Hz8u-mjhnH5gAuDbhvyw7E8r6jipteuqvcIXNZVIXUM1D" name="Shakeeb" followers="🔴820k"/>
                
                <Channel avatar="https://avatars2.githubusercontent.com/u/14110981?s=460&v=4" name="Safa" followers="🔴506k"/>
                
                <h5>RECOMMENDED CHANNELS</h5>
                
                <Channel avatar="https://qph.fs.quoracdn.net/main-thumb-1111663697-200-abjkvxxbkdkieseqgiomoqzjsiusletr.jpeg" name="Shajid" followers="🔴10k"/>
                
                <p className="sidebar__topShowMore" >Show More</p>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search to Add Friends" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
