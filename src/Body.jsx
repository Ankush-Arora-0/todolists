import "./Body.css";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import AddIcon from '@mui/icons-material/Add';
import Data from "./Data";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

const Body=()=>{
        
        const[inp,setInp]=useState("");
        const[dat,setDat]=useState([]);
        const[dis,setDis]=useState("Check List");
        const[ico,setIco]=useState(true);
    const valchan=(event)=>{
        const value= event.target.value;
        setInp(value);


    }
    const clickMe=()=>{
        setDat((oldVal)=>{
                return[...oldVal,inp];
        })
        setInp("");
        setIco(true);
    }
    const delItem=(id)=>{
        console.log(id);
        
       
               
        // setDat(updateItem);

    }

    const ch1=()=>{
        setDis("Remove all")
        
    }
    const ch2=()=>{
        setDis("Check List")
    }
    const deAll=()=>{
        setDat((oldVal)=>{
            return oldVal.filter((val,index)=>{
                return null;
        
        })
})

    }
    const edItem=(id)=>{
        let newItem = dat.find((ele,elc)=>{
            return elc===id;

        })
        setInp(newItem);

        setDat((oldVal)=>{
            return oldVal.filter((val,index)=>{
                return index!==id;
        
        })
})
        setIco(false);
        
    }

return(<div className="body1">
        <NoteAltIcon style={{width:"80px",height:"80px",margin:"30px",marginBottom:"10px"}}></NoteAltIcon>
        <h1 className="headin">add your list here 🖕</h1>
        <div className="inbut">
        <input type="text" onChange={valchan} value={inp} placeholder="✍️ Add item..."></input>
        {ico ?<AddIcon style={{position:"absolute",top:"39px",left:"268px"}} onClick={clickMe}></AddIcon>:<EditIcon style={{position:"absolute",top:"39px",left:"268px"}} onClick={clickMe}></EditIcon>} </div>
       <div className="data1" >{dat.map((val,id)=>{ 
        return(<div className="inp">
        <p>{val} <DeleteIcon className="del" onClick={()=>delItem(id)} style={{float:"right"}}></DeleteIcon><EditIcon className="edi" onClick={()=>edItem(id)} style={{float:"right"}}></EditIcon></p>
        

    </div>)
        
        })}
        <Button variant="outlined" onClick={deAll} className="delall" onMouseEnter={ch1} onMouseLeave={ch2} style={{margin:"20px auto",display:"block"}}>{dis}</Button>
            
             </div>



</div>);

}

export default Body;