import React from 'react'
import Guj1 from './Gujarati/Guj1'
import Guj2 from './Gujarati/Guj2'
import Guj3 from './Gujarati/Guj3'


export default function GujaratiMain() {
    return (
        <>
            <Guj1 />
            <div className="flex">
                <Guj2 />
                <Guj3 />
            </div>
        </>
    )
}