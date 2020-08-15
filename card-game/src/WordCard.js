import React, {useState} from 'react';
import _ from 'lodash';

import CharacterCard from './CharacterCard';
import ResetGameCard from './ResetGameCard';

const prepareStateFormWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

const shuffleWord = word =>{
    let new_word = _.shuffle(Array.from(word))
    return 
}

export default function WordCard(props){

    let [state, setState] = useState(prepareStateFormWord(props.value))

    const activationHandler = c =>{
        console.log(`${c} has been activated.`)
        
        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!')
                setState({...state, completed: true})
            }else{
                console.log('reset, net attempt')
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        }
    }

    const resetGame = () =>{
        console.log('Game was reset.')
        const new_word = prepareStateFormWord(props.value)
        setState({
            ...state, 
            word: new_word.word,
            guess: new_word.guess, 
            chars: new_word.chars,
            completed: new_word.completed,
            attempt: state.attempt + 1
        })
        console.log('attempt: ', state.attempt)
    }
    return (
        <div>
            {
                state.chars.map((c, i) =>
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt} completed={state.completed}/>
                )
            }
            <ResetGameCard resetGame={resetGame}/>
        </div>
    )
}