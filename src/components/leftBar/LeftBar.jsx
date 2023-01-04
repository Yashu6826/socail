import React from 'react';
import Friends from '../../assets/friends.png'
import Groups from '../../assets/groups.png'
import Market from '../../assets/store.png'
import Watch from '../../assets/clock.png'
import Memories from '../../assets/video.png'
import Gaming from '../../assets/controller.png'
import Events from '../../assets/gallery.png'
import Gallery from '../../assets/gallery.png'
import Videos from '../../assets/video.png'
import Messages from '../../assets/messaging.png'
import Fund from '../../assets/funds.png'
import Tutorials from '../../assets/tutorial.png'
import Courses from '../../assets/courses.png'
import './leftBar.scss';

export default function Leftbar() {
  return (
    
      <div className="leftBar">
        <div className="container">
          <div className="menu">
            <div className="user">
              <img
                // src={currentUser.profilePic}
                alt=""
              />
               <span>yashraj</span> 
            </div>
            <div className="item">
              <img src={Friends} alt="" />
              <span>Friends</span>
            </div>
            <div className="item">
              <img src={Groups} alt="" />
              <span>Groups</span>
            </div>
            <div className="item">
              <img src={Market} alt="" />
              <span>Marketplace</span>
            </div>
            <div className="item">
              <img src={Watch} alt="" />
              <span>Watch</span>
            </div>
            <div className="item">
              <img src={Memories} alt="" />
              <span>Memories</span>
            </div>
          </div>
          <hr />
          <div className="menu">
            <span>Your shortcuts</span>
            <div className="item">
              <img src={Events} alt="" />
              <span>Events</span>
            </div>
            <div className="item">
              <img src={Gaming} alt="" />
              <span>Gaming</span>
            </div>
            <div className="item">
              <img src={Gallery} alt="" />
              <span>Gallery</span>
            </div>
            <div className="item">
              <img src={Videos} alt="" />
              <span>Videos</span>
            </div>
            <div className="item">
              <img src={Messages} alt="" />
              <span>Messages</span>
            </div>
          </div>
          <hr />
          <div className="menu">
            <span>Others</span>
            <div className="item">
              <img src={Fund} alt="" />
              <span>Fundraiser</span>
            </div>
            <div className="item">
              <img src={Tutorials} alt="" />
              <span>Tutorials</span>
            </div>
            <div className="item">
              <img src={Courses} alt="" />
              <span>Courses</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  

