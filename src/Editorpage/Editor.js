import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import UpdateIcon from '@mui/icons-material/Update';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Editor.css'
import db from '../firebase';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';

const IndexPage = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [javascript, setJavascript] = useState('');
  const [projectName, setProjectName] = useState('');
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      db.collection('projects')
        .doc(id)
        .get()
        .then(doc => {
          if (doc.exists) {
            setHtml(doc.data().html);
            setCss(doc.data().css);
            setJavascript(doc.data().javascript);
            setProjectName(doc.data().projectName);
          }
        });
    }
  }, [id]);

  const handleSave = () => {
    if (id) {
      db.collection("projects").doc(id).update({
        html,
        css,
        javascript,
        projectName,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp()

      });
    } 
    else if(html && css ||javascript && projectName) {
      db.collection("projects").add({
        html,
        css,
        javascript,
        projectName,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };

  return (
    <>
      <Navbar />

      <div className="editor-container">
        <div className="inputs-container">

          <TextField
            style={{marginBottom:20}}
            placeholder="Write your HTML..."
            className='input1'
            value={html}
            id="standard-multiline-static"
            label="HTML"
            multiline
            rows={9}
            defaultValue="Default Value"
            variant="standard"
            onChange={(e) => setHtml(e.target.value)}
          />
          <TextField
            placeholder="Write your CSS..."
            className='input1'
            style={{marginBottom:20}}
            value={css}
            id="standard-multiline-static"
            label="CSS"
            multiline
            rows={9}
            defaultValue="Default Value"
            variant="standard"
            onChange={(e) => setCss(e.target.value)}
          />
          <TextField
            placeholder="Write your JAVASCRIPT..."
            className='input1'

            value={javascript}
           
            id="standard-multiline-static"
            label="JAVASCRIPT"
            multiline
            rows={9}
            defaultValue="Default Value"
            variant="standard"
            onChange={(e) => setJavascript(e.target.value)}
          />
        </div>
        <div className='right-container'>
          <div className="preview-container">
            <div
              className="html-preview"

            />
            <style>{css}</style>
            <iframe
              srcDoc={`
            <html>
              <head>
                <style>
                  ${css}
                </style>
              </head>
              <body>
                ${html}
                <script>
                  ${javascript}
                </script>
              </body>
            </html>
          `}
            />
          </div>
          <div className="nav-link"><Input
           
            type="text"
            placeholder="Enter project name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          /><Button onClick={handleSave} >Save current<UpdateIcon style={{ marginLeft: "5",  }} /></Button></div>

        </div>
      </div> </>
  );
};

export default IndexPage;
