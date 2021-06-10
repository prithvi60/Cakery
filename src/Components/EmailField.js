import React from 'react'

export default function EmailField() {
    return (<>
    <div className="mail-container">
    <p className="header-mail">Follow Us</p>  
        <div className="mail-field" >
            <input  className="input-group-text" type="text"/>
            <button className="btn">Mail</button>
        </div>
        <button className="soc-btn">Fb</button>
            <button className="soc-btn">Twitter</button>
            <button className="soc-btn">Insta</button>
            <button className="soc-btn">Youtube</button>
            <button className="soc-btn">Pinterest</button>
        </div>
        </>
    )
}
