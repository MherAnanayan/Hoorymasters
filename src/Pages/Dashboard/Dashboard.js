import React, { useEffect, useState } from "react";
import Gravatar from "react-gravatar";
import "./Dashboard.scss";
import { connect } from "react-redux";


import { useHistory } from "react-router-dom";

import { AiOutlineFileSearch } from "react-icons/ai";


    
const Dashboard = () => {
    

    return (
        <div className="dashboard">
            <div className="header">
                <div className="userInfo">
                    <Gravatar className="avatar"  />
                    <div className="name-email">
                        <div className="name">{`'{user.firstName} {user.lastName}'`}</div>
                        <div className="email">{'user.email'}</div>
                    </div>
                </div>
                <button  text="Logout" className="logout">
                    
                </button>
            </div>
            <div className="content">
                <div className="search-container">
                    <input
                        
                        
                        className="search-input"
                        type="text"
                        placeholder="Search"
                    />
                    <AiOutlineFileSearch size={20} className="search-icon" />
                </div>

                
                <div className="add-new-btn">
                    + Add new Workspace
        </div>
            </div>
        </div>
    );

    }
const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = {
   
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
