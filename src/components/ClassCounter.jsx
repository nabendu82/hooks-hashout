import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <>
                <h1>Class Counter - {this.state.count}</h1>
                <button onClick={this.incrementCount}>Increment</button>
            </>
        )
    }
}

export default ClassCounter
