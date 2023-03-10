import React, { useState, useEffect } from 'react';
import './Project.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";
import RateReviewIcon from '@mui/icons-material/RateReview';
import Button from '@mui/material/Button';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { db,auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
const SavedProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [user1] = useAuthState(auth)

  useEffect(() => {
    db.collection("projects").orderBy('timeStamp', 'desc' ).onSnapshot((snapshot) => {
      setProjects(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  const handleClick = (project) => {
    setSelectedProject(selectedProject === project.id ? null : project.id);
  };

  return (
    <>
    <Navbar/>
    <div className="saved-projects-container">
       
      <ul className='saved-projects-card-container'>
      {projects.filter(project => project.user === user1.displayName).map((project) => ( 
   <li className={`saved-project-card ${selectedProject === project.id ? 'expanded' : ''}`} key={project.id} onClick={() => handleClick(project)}>
   <div className='saved-projects-card-container-top'><h3 className='saved-projects-card-container-top-h3'>{project.projectname}</h3><Link className='saved-project-edit-button' to={`/edit/${project.id}`} >  
   <Button >View {project.projectname}<ViewInArIcon style={{marginLeft:"5"}}/></Button></Link>
   <Button onClick={() => db.collection('projects').doc(project.id).delete()}>Delete<DeleteIcon style={{marginLeft:"5"}}/></Button></div>
   <p > <h4>HTML</h4> {project.html}</p>
   <p><h4>CSS</h4> {project.css}</p>
    <p><h4>JavaScript</h4> {project.javascript}</p>
  
  </li>
))}

         
      </ul>
    </div></>
  );
};

export default SavedProjectsPage;
