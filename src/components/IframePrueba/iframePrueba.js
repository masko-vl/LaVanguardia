import React from 'react';
//import Hello from './iframeChildren'
import AppCapitals from '../Games/ChoseCapitals/appCapitals'

export default function SeccionVanguaridia(){
    return(
        <div>
            {/* <Hello name="CodeSandbox">
                <AppCapitals/>
            </Hello> */}
            <div>
                <iframe src="//localhost:3000/cityplay"
                    width="330px"
                    height="260px"
                    id="test"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    />
            </div>
        </div>
    )
}
    

   