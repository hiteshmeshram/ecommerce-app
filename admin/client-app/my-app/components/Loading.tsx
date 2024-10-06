"use client"
import React, { useRef, useState } from 'react';
import Loader from "react-js-loader";
import LoadingBar from 'react-top-loading-bar'
export const Loading = ()=>{
    const [progress,setProgress] = useState(50)
    
    return(
        // <div className="item w-full">
        //             <Loader type="rectangular-ping" bgColor="gray" color="purple"  size={1000} />
        // </div>
    <div className='min-h-1'>
        <LoadingBar color="red" progress={progress}
    onLoaderFinished={() => setProgress(0)} />
    </div>
    
    )
}