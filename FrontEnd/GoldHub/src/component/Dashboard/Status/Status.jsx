import { useState } from "react";
import StatusCard from "../../Ui/CardStatus/CardStatus";
import styles from "./Status.module.css";
function Status() {
   // layer 1 states & Global Data
   const [states, setStates] = useState([
    {id: 1, count:120, title: "Projects"},
    {id: 2, count:12, title: "Developers"},
    {id: 3, count:1200, title: "Users"},
    {id: 4, count:120, title: "Blogs"}
   ]);
  // layer 2 (effects) API Call
  // layer 3 Handler
  // layer 4 JSX  
  return (
    <div className="py-4">
      <div className={`${styles.title} mb-4`}>Status</div>
     
      <div className="container">
        <div className="row g-3">
          {states.map((state) => (
            <div className="col-12 col-sm-6 col-lg-3" key={state.id}>
              <StatusCard count={state.count} title={state.title}/>
              </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default Status;