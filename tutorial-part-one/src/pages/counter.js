import React from "react";
import Link from "gatsby-link";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            increment: 1,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({increment: Number(e.target.value)})
    }

    render() {

        return (
            <div style={{color: "tomato"}}>
                <nav>
                    <Link to="/"> Home </Link>|
                    <Link to="/page-2"> Page Two </Link>|
                    <Link to="/page-3"> Page Three </Link>
                </nav>
                <h1>Counter</h1>
                <p>Current Count: {this.state.count}</p>
                <h3>Increment:</h3>
                <input type="number" 
                    placeholder={this.state.increment}
                    onChange={this.handleChange}
                    name="increment" 
                    id="increment" 
                    step="1" />
                <p>
                    <button onClick={() => 
                        this.setState(prevState => ({
                            count: prevState.count + this.state.increment,
                        }))
                    }>PLUS</button>
                    <button onClick={() =>
                        this.setState(prevState => ({
                            count: prevState.count - this.state.increment,
                        }))
                    }>MINUS</button>
                </p>
            </div>
        )
    }
}

export default Counter;