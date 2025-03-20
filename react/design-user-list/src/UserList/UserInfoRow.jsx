import React from "react"

const style={
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '10px',
        backgroundColor: 'yellow',
}

const UserInfoRow=({name, img, email})=>{
    return(
        <div  style={{...style}}>
            <img src={img} alt={name} style={{borderRadius : "5px"}}/>
           <span><b>{name}</b></span>
          
           <span role="presentation">
           <address>
           <a href={`mailto:${email}`} aria-label="Send Email">&#9993;</a>
           </address>
            </span>
            
        </div>
    )
}

export default UserInfoRow;