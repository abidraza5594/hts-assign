import React, { useState ,useEffect} from 'react';
import styles from './Profile.module.css';
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
    localStorage.clear()
    navigate("/")
  };
  useEffect(()=>{
    if (!localStorage.getItem("email") && !localStorage.getItem("password")) {
        navigate("/")
      } 
  },[])

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <h2 className={styles.profileTitle}>Profile</h2>
        <div className={styles.profileInfo}>
          <div className={styles.profileField}>
            <label className={styles.profileLabel}>Email:</label>
            <div className={styles.profileValue}>{localStorage.getItem("email")}</div>
          </div>
          <div className={styles.profileField}>
            <label className={styles.profileLabel}>Password:</label>
            <div className={styles.profileValue}>{localStorage.getItem("password")}</div>
          </div>
        </div>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
