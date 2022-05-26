import React from 'react'
class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = { 'Username': 'Dhiraj' };
        this.changeState = this.changeState.bind(this);
    }
    changeState() {
        this.setState({ 'Username': 'John' });
    }
    render() {
        return (
            <div>
                <button onClick={this.changeState}>Change State</button>
                <h2>{this.state.Username}</h2>
            </div>
        )
    }
}

export default Dashboard;