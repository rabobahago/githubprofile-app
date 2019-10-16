import React, {useState } from 'react';
import Display from './Dispay';
import Button from './Button';
function App() {
        const [counter, setCounter] = useState(0);
        const changeValue = (increaseValue) =>setCounter(counter + increaseValue);
        return(
            <div>
                <Button onClickFunc= {changeValue} increaseValue={1} />
                <Button onClickFunc= {changeValue} increaseValue={5}/>
                <Button onClickFunc= {changeValue} increaseValue={10}/>
                <Button onClickFunc= {changeValue} increaseValue={100}/>
                <Display message = {counter}/>
            </div>
        );
    }
export default App