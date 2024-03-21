import React from 'react'
import Eng1 from './English/Eng1'
import Eng2 from './English/Eng2'
import Eng3 from './English/Eng3'

export default function EnglishMain() {
    return (
        <>
            <Eng1 />
            <div className="flex">
                <Eng2 />
                <Eng3 />
            </div>
        </>
    )
}