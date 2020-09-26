import React, { useEffect, useState } from "react";
import Gravatar from "react-gravatar";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { AiOutlineFileSearch } from "react-icons/ai";
import LogoutButton from '../../resources/icons/Logout';
import "./Dashboard.scss";
import { Logout } from "../../resources/icons";



    
const Dashboard = (user) => {
    

    return (

        <div className="dashboard">
            <div className="header">
                <div className="userInfo">
                    <Gravatar className="avatar" />
                    <div className="name-email">
                        <div className="name">{`'${user.firstname} ${user.lastname}'`}</div>
                        <div className="email">{user.email}</div>
                    </div>
                </div>
                <button  text="Logout" className="logout">
                   { "Logout"}
                    <LogoutButton/>
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
    firstname: state.Registrapplay.registrData.firstname,
    lastname: state.Registrapplay.registrData.lastname,
    email: state.Registrapplay.registrData.email,
   
});

const mapDispatchToProps = {
   
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
