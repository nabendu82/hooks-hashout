import React, { useEffect, useState } from 'react'

const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('HookMouse logMousePosition');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('HookMouse useEffect');
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log('HookMouse unmounting')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])

    return (
        <div>
            <h1>Hook X - {x}, Y - {y}</h1>
        </div>
    )
}

export default HookMouse