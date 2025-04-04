import React, { useState } from 'react'
import HookMouse from './HookMouse'

const MouseContainer = () => {
    const [display, setDiplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDiplay(!display)}>Toggle display</button>
            {display && <HookMouse />}
        </div>
    )
}

export default MouseContainer