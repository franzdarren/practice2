import React from 'react'

export default function Practice5() {
    return (
        <div>
            <Pill color="pink" text="ASD" />
            <Pill color="red" text="SAD" />
            <Pill color="blue" text="DW" />
            <Pill color="green" text="FE" />
            <Pill/>
        </div>
    )
}

function Pill({color = "grey", text = "DEFAULT"}) {
    return(
        <div style={{
            backgroundColor: color,
            borderRadius: "5px",
            padding: "4px 12px",
            display: "inline-block",
            margin: "4px",
            color: "white"
        }}>{text}</div>
    )

}
