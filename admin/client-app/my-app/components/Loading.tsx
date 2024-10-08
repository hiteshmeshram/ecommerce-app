"use client"
import React, {  useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
export const Loading = ()=>{
    const [progress,setProgress] = useState(50)
    
    return(
      
        <div className='min-h-1'>
            <LoadingBar color="red" progress={progress}
        onLoaderFinished={() => setProgress(0)} />
        </div>
    
    )
}