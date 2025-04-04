import React, { useEffect, useState } from 'react'

const HookLifecycle = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect -Updating document title')
        document.title = `Hook ${count} times`
    },[count])

    return (
        <>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count+ 1)}>Hook {count} times</button>
        </>
    )
}

export default HookLifecycle