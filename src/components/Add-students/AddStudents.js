import React from "react";
import { Drawer} from "../index";
import Input from "../input/input";
import index from "./index.css";
function AddStudents(){
    return <div>
    
    <form className="form">
        
        <Input
      type="text"
      placeholder="Student Name"
    />
   
    <Input
      type="text"
      placeholder="Enrollment"
    />
    <Input
      type="email"
      placeholder="Email"
    />
    <Input
      type="number"
      placeholder="Attendence"
    />
    <button type="submit">Submit</button>
    </form>
    </div>
}

export default AddStudents;