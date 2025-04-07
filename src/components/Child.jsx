import React from 'react'
import { ChannelContext, UserContext } from '../App'

const Child = () => {
    return (
        <UserContext.Consumer>
            {user => {
                return (
                    <ChannelContext.Consumer>
                        {channel => {
                            return (
                                <>
                                    <h1>Child Component</h1>
                                    <h2>Hello {user} from {channel}</h2>
                                </>
                            )
                        }}
                    </ChannelContext.Consumer>
                )
            }}
        </UserContext.Consumer>
    )
}

export default Child