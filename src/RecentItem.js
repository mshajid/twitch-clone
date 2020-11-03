import React from 'react';
import "./RecentItem.css";

const RecentItem = ({url, title}) => {
    return (
        <div className="item">
            <iframe 
                width="400" 
                height="235" 
                src={url} 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>   
            </iframe>

            <div className="items__details">
                <img src="https://st.depositphotos.com/1062085/4174/v/450/depositphotos_41745941-stock-illustration-web-and-html-programming-flat.jpg" alt="programming html" />
                <div className="items_-detailsText">
                    <h4>{title}</h4>
                    <p>Shakeeb Sadikeen</p>
                    <p>Programming</p>
                </div>
            </div>
        </div>
    )
}

export default RecentItem
