"import React, {useState} from 'react';
import _, { set } from 'lodash';

import WordCard from './WordCard';

const prepareScoreState = () => {
    return {
        attempt: 1,
        success: 0,
        fail: 0
    }
}

export default function ScoreBoard(props){

    const [state, setScore] = useState(prepareScoreState())

    const activationSetScore = is_success =>{
        if(is_success){
            setScore ({...state, 
                        success: state.success + 1})
        }
        else{
            setScore ({...state, 
                attempt: state.attempt + 1})
        }
    }
    const playAgain = () =>{
        setScore ({...state, 
            attempt: state.attempt + 1})
    }
    return (
        <div>
            <WordCard activationSetScore={activationSetScore} playAgain={playAgain} value={props.value} attempt={state.attempt}/>
            <table className='tableScore'>
                <tr>
                    <th>จำนวนครั้งเดาถูก</th>
                    <th>จำนวนครั้งที่เล่น</th>
                </tr>
                <tr >
                    <td>{state.success}</td>
                    <td>{state.attempt}</td>
                </tr>
            </table>
        </div>
    )
}