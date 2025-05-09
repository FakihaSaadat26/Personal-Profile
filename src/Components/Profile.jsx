
import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <header className="profile-header">Fakiha Saadat</header>

      <section className="profile-section">
        <h2 className="section-title">Basic Information</h2>
        <p><strong>Name:</strong> Fakiha Saadat</p>
        <p><strong>Address:</strong> Islamabad, Pakistan</p>
        <p><strong>Contact:</strong> 0335-7031222</p>
        <p><strong>Email:</strong> fakiha.saadat@gmail.com.com</p>

      </section>

      <section className="profile-section">
        <h2 className="section-title">Educational Background</h2>
 
       
         <h3>Matric</h3>
         <p><strong>Science Group</strong> — Army Public School (2018-2020)</p>
         <h3>Intermediate</h3>
         <p><strong>FSC (Science-Group)</strong> — Punjab COllege For Women (2020-2022)</p>
         <h3>Bachelors</h3>
         <p><strong>BS Computer Science</strong></p>
         <p><strong>Degree:</strong> BS Computer Science</p>
        <p><strong>University:</strong> National University of Sciences and Technology (NUST)</p>
        <p><strong>Semester:</strong> 4th</p>
        <p><strong>Interests:</strong> Web Development, AI/ML</p>
      </section> 


      <section className="profile-section">
        <h2 className="section-title">Projects</h2>
        <ul className="project-list">
          <li>Tic-Tac-Toe Game (HTML, CSS, JS)</li>
          <li>Amazon Clone (HTML, CSS)</li>
          <li>Space Invader Game (Java OOP)</li>
          <li>Rock-Paper-Scissor (Javascript)</li>
          <li>Pathfinding Visualizer (C++ with SFML)</li>
        </ul>
      </section>

      <section className="profile-section">
        <h2 className="section-title">Certificates</h2>
        <ul className="project-list">
          <li>Swimming</li>
          <li>Debates</li>
          <li>Annual Results</li>
          <li>Competitions</li>
        </ul>
      </section>

      <section className="profile-section">
        <h2 className="section-title">Interests</h2>
        <ul className="project-list">
          <li>Reading</li>
          <li>Swimming</li>
          <li>Playing Badminton</li>
          <li>Cycling</li>
          <li>Programming</li>
        </ul>
      </section>
    </div>
  );
};

export default Profile;
