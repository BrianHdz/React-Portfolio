import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.altText} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
          <a href={props.live}><strong>Name:</strong> {props.altText}</a>
          </li>
          <li>
            <a href={props.link}><strong>GitHub Repo</strong></a> 
          </li>
          <li>
            <strong>Description:</strong> {props.caption}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
