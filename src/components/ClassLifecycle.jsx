import React, { Component } from 'react'

class ClassLifecycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            console.log('Updating document title')
            document.title = `${this.state.count} times`
        }
    }

    render() {
        return (
            <>
                <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click {this.state.count} times
                </button>
            </>
        )
    }
}

export default ClassLifecycle
