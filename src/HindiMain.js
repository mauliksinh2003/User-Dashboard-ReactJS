import React from 'react'
import Hin1 from './Hindi/Hin1'
import Hin2 from './Hindi/HIn2'
import Hin3 from './Hindi/HIn3'



export default function GujaratiMain() {
    return (
        <>
            <Hin1 />
            <div className="flex">
                <Hin2 />
                <Hin3 />
            </div>
        </>
    )
}