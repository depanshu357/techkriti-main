import React,{useState} from 'react';
// import { singleFileUpload } from '../data/api';
import {useAuth} from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom'
import { storage } from "../../firebase";
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';

// import './styles.css';
// import { useNavigate } from 'react-router-dom';

export default function FileUpload(props){
    const [hide, setHide] = useState(false)
//     const [progress, setProgress] = React.useState(0);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((oldProgress) => {
//         if (oldProgress === 100) {
//           return 0;
//         }
//         const diff = Math.random() * 10;
//         return Math.min(oldProgress + diff, 100);
//       });
//     }, 500);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);
        //progress circular
    const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  // progress linear
//   const [progress, setProgress] = React.useState(0);
//   const [buffer, setBuffer] = React.useState(10);

//   const progressRef = React.useRef(() => {});
//   React.useEffect(() => {
//     progressRef.current = () => {
//       if (progress > 100) {
//         setProgress(0);
//         setBuffer(10);
//       } else {
//         const diff = Math.random() * 10;
//         const diff2 = Math.random() * 10;
//         setProgress(progress + diff);
//         setBuffer(progress + diff + diff2);
//       }
//     };
//   });

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       progressRef.current();
//     }, 500);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);
    // const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [filePath, setFilePath] = useState(null);
    const {currentUser} = useAuth();
    const [success,setSuccess] = useState(false)
    const navigate = useNavigate()
    const [percent,setPercent] = useState(0);
    const handleChange = (e) => {
        setFile(e.target.files[0]);
        // setFilePath(e.target.files[0].filePath)
    }
    function handleUpload(e){
        // window.location.reload()
        if (!file) {
            alert("Please upload an image first!");
        }
        const storageRef = ref(storage, `/files/${file.name}-${Date.now()}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPercent(percent);
            },
            (err) => console.log(err,"error"),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    window.location.reload()
                    console.log(url,"url got");
                    const imageurl = url
                    const data = {
                        teamid: props.teamId,
                        imageurl : imageurl
                    }
                    // navigate('/')
                    axios.post('http://localhost:9000/api/singleFile',data).then((res)=>{
                        console.log(res)
                    }).catch((err)=>console.log(err))

                });
            }
        );
    };

   
        // console.log(e.target.file[0]);
        // setSuccess(false)
        // const formData = new FormData();
        // // const formData2 = new FormData();
        // formData.append('taskid',props.taskid)
        // formData.append('file', singleFile);
        // await singleFileUpload(formData,props.taskid,props.taskname,props.taskpoints,currentUser.uid).then((resp)=>{
        //     console.log(resp)
        //     console.log(singleFile);
        // }).catch((er)=>console.log(er));
        
    return (
        <div>
        <Stack direction="row" spacing={3}>
            <input className='button-68' type="file" onChange={handleChange} accept="/image/*" />
            
            <Button disabled={hide} className='button-68' onClick={handleUpload}>Upload</Button>
            <CircularProgress color='success' variant="determinate" value={percent} />
            </Stack>
            {/* <LinearProgress variant="buffer" value={percent} /> */}
        </div>
    );
}

 
// function App() {
//     // State to store uploaded file
//     const [file, setFile] = useState("");
 
//     // progress
//     const [percent, setPercent] = useState(0);
 
//     // Handle file upload event and update state
//     function handleChange(event) {
//         setFile(event.target.files[0]);
//     }
 
//     const handleUpload = () => {
    
// }