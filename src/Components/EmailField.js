import React from 'react'

export default function EmailField() {
    return (<>
    <div className="mail-container">
    <p className="header">Follow Us</p>  
        <div className="mail-field" >
            <input  className="input-group-text" type="text"/>
            <button className="btn">Mail</button>
        </div>
        <button className="btn">Fb</button>
            <button className="btn">Twitter</button>
            <button className="btn">Insta</button>
            <button className="btn">Youtube</button>
            <button className="btn">Pinterest</button>
        </div>
        </>
    )
}
