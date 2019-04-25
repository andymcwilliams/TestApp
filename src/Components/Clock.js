import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                date: new Date(),
                style: {
                    color: 'red'
                },
                colourChange: true
            }

            this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID)        
    }

    tick() {
        this.setState({
            date: new Date()
        })  
    }

    handleClick(){
        if(this.state.colourChange){
            this.setState({
                style: {
                    color: 'blue'
                },
                colourChange: !this.state.colourChange
            })
        } else {
            this.setState({
                style: {
                    color: 'red'
                },
                colourChange: !this.state.colourChange
            })
        }

        
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <p onClick={this.handleClick}
                style={this.state.style}
                >click to change colour</p>
            </div>
        )
    }
}
export default Clock;