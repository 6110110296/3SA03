import React, { useState, useEffect} from 'react'; 

export default function ResetGameCard(props) { 
    const [active, setActive] = useState(false);

    const activate = () => { 
        if(!active){
            setActive(true)
            props.resetGame()
        }
    } 

    useEffect(() => {
        setActive(false);
    })    

    const className = 'card'
    // let className = `card ${active ? 'activeCard': ''}`
    // if(props.completed == true){
    //     className =  `card ${active ? 'winCard': ''}`
    // }

    return ( 
        <div className={className} onClick={activate}>Play Again</div>
    )     
}