import React from 'react';
import Hello from './iframeChildren'
import AppCapitals from '../Games/ChoseCapitals/appCapitals'

export default function SeccionVanguaridia(){
    return(
        <div>
            <Hello name="CodeSandbox">
                <AppCapitals/>
            </Hello>
        </div>
    )
}
    

   