import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a:10
        }
        console.log("Constructor");
    }

    componentDidMount(){
        console.log("Component Did Mount");
        this.setState({
            a:20
        })
    }

    componentDidUpdate = (prevProps, prevSteps) => {
        console.log("Component Did Update")


    }
    shouldComponentUpdate(){
        console.log("Should Component Update")
        return true;
    }


  render() {
    console.log("Render");

    return <div>




    </div>;
  }
}


export default Test;