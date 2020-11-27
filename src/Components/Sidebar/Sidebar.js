import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faPeopleCarry, faShoppingBasket, faComment} from '@fortawesome/free-solid-svg-icons';
// import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
const Sidebar = ({handleClient,handleAdmin}) => {
    return (
        <div>
           <div>
           <ol style={{listStyleType:"none"}}>
                <li style={{cursor: "pointer",fontWeight:"900",padding:"5px"}} onClick={handleClient}><FontAwesomeIcon style={{fontSize:"20px"}} icon={faShoppingBasket} /> <span style={{fontSize:"20px"}}>Order</span></li>
               
                <li style={{cursor: "pointer",fontWeight:"900",padding:"5px"}}  onClick={handleClient}><FontAwesomeIcon style={{fontSize:"20px"}} icon={faShoppingBag} /> <span style={{fontSize:"20px"}}>Service List</span></li>
                <li  style={{cursor: "pointer",fontWeight:"900",padding:"5px"}} onClick={handleClient}><FontAwesomeIcon style={{fontSize:"20px"}} icon={faComment} /><span style={{fontSize:"20px"}}>Review</span></li>
            </ol>
           </div>
           <div>
               <ol style={{listStyleType:"none"}}>
                   <li style={{cursor: "pointer",fontWeight:"900",padding:"5px"}} onClick={handleAdmin}>Service List</li>
                   <li style={{cursor: "pointer",fontWeight:"900",padding:"5px"}} onClick={handleAdmin}>Add Service</li>
                   <li style={{cursor: "pointer",fontWeight:"900",padding:"5px"}} onClick={handleAdmin}>Make Admin</li>
               </ol>
           </div>
        </div>
    );
};

export default Sidebar;