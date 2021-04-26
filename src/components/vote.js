import React, {Component} from 'react';

class Test extends Component {
    constructor (props){
        super(props)
        this.state = {
            lang : [
            {id : 1 , name : "Php" ,    val : 0},
            {id : 2 , name : "Python" , val : 0},
            {id : 3 , name : "Go" ,     val : 0},
            {id : 4 , name : "Java" ,   val : 0}
        ]
        }
    }

    increment (i) {
        this.state.lang[i].val++;
        this.setState({
            lang : this.state.lang
        });
    }
    
    render(){
        return  <div className="main">
                    <h1>Vote Your Language</h1>
                        <div className="root">
                                {this.state.lang.map((item , i) =>
                                <div key = {i} className="vote">
                                    <span>{item.val}</span> 
                                    <span>{item.name}</span>
                                    <span className="con"><button onClick= {this.increment.bind(this , i)}>Click Here</button></span>
                                </div>)}             
                        </div>
                </div>
    }
}
export default Test ;