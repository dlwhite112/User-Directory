import React from 'react'

export default function Wrapper(props) {
    return (
        <div>
            <main className="wrapper">{props.children}</main>
        </div>
    )
}
