import React from 'react'

export default function Slab({header,para}) {
    return (
        <div className="slab-container">
            <h1>{header} </h1>
            <p> {para} / {header}</p>
        </div>
    )
}
