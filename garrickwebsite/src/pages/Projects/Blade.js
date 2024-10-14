import React from 'react';
import './Blade.css';  // Make sure to import the CSS file

function Project() {
  return (
    <div className="project-container">
      <h1 className="project-title">Blade</h1>
      <h3 className="project-subtitle">2D Platformer Featuring Parry Combat and Exploration</h3>

      <div className="project-overview">
        <h4>Project Title & Overview</h4>
        <p>Title: Blade</p>
        <p>Overview: A 2D platformer featuring parry combat and exploration</p>
        <p>Role: Project Lead</p>
      </div>

      <div className="project-vision">
        <h4>Design Vision & Objectives:</h4>
        <p>Game Inspirations and Research:</p>
        <ul>
          <li>Gameplay and Combat</li>
          <ul>
            <li>Hollow Knight (movement, combat, and enemies)</li>
            <li>Sekiro (combat and parry system)</li>
            <li>Celeste (movement)</li>
          </ul>
          <li>Story</li>
          <ul>
            <li>Soulsborne franchise</li>
          </ul>
        </ul>
        <p>
          <strong>Design Vision:</strong> My design philosophy for the game was to create something that has a lot of combat depth and allows players to show their skill.
        </p>
        <p>
          <strong>Key Objective:</strong> My objective was to push my limits as a game designer by combining my favorite elements from video games into something new. This includes Sekiro's parrying system and a progression system similar to Hollow Knight.
        </p>
      </div>

      <div className="project-core-mechanics">
        <h4>Core Gameplay Mechanics</h4>
        <p>
          The core combat gameplay is that you must parry the enemy. Every time you parry an enemy or attack them while they are guarded, they will take stagger damage. Once they reach max stagger, they will become vulnerable to damage. After a short recovery period, their guard will build back up and the combat loop will repeat. The goal is to have players feel like they are fighting an enemy that can fight back, similar to Sekiro.
        </p>
        <p>
          Once you have a small duel and emerge victorious, a small window of vulnerability opens where you can deal the most damage in a short time.
        </p>
      </div>

      <div className="project-design-process">
        <h4>Design Process</h4>
        <p>(Add more details here about your design process if needed)</p>
      </div>

      <div className="project-challenges">
        <h4>Challenge & Solutions</h4>
        <p>(Describe challenges and solutions here)</p>
      </div>

      <div className="project-enemies">
        <h4>Enemy and Boss Design</h4>
        <p>(Describe enemy and boss design here)</p>
      </div>

      <div className="project-system-design">
        <h4>System Design</h4>
        <p>(Describe system design elements here)</p>
      </div>
    </div>
  );
}

export default Project;
