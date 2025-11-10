import React, { useEffect, useState } from 'react'

function Type() {
    const phrases = ["Grow yourself", "Increase strength", "Exercise daily", "Go to gym", "Behave confidently"];
    const [phraseindex, setPhraseindex] = useState(0)
    const [type,setType] = useState("")

    useEffect(() => {
        const id = setInterval(() => {
            setPhraseindex((p) => (p + 1) % phrases.length)
            setType("")
        }, 3000)
        return ()=> clearInterval(id)
    }, [])

    return (
        <div>{phrases[phraseindex]}</div>
    )
}

export default Type