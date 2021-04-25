import React, {Component} from 'react';



class Vote extends Component {

    state = {
        php : 0 ,
        python : 0 , 
        go : 0 ,
        java : 0 
    }


    php = () => {
        this.setState({php : this.state.php + 1})
    }

    python = () => {
        this.setState({python : this.state.python + 1})
    }

    go = () => {
        this.setState({go : this.state.go + 1})
    }

    java = () => {
        this.setState({java : this.state.java + 1})
    }


    render(){
        return  <div className="main">
                    <h1>Vote Your Language</h1>
                        <div className="vote">
                                <span>{this.state.php}</span>
                                <span>Php</span>   
                                <span className="con"><button className="green" onClick = {this.php}>Click Here</button></span>
                        </div>
                        <div className="vote">
                                <span>{this.state.python}</span>
                                <span>Python</span>   
                                <span className="con"><button className="green" onClick = {this.python}>Click Here</button></span>
                        </div>
                        <div className="vote">
                                <span>{this.state.go}</span>
                                <span>Go</span>   
                                <span className="con"><button className="green" onClick = {this.go}>Click Here</button></span>
                        </div>
                        <div className="vote">
                                <span>{this.state.java}</span>
                                <span>java</span>   
                                <span className="con"><button className="green" onClick = {this.java}>Click Here</button></span>
                        </div>
                </div>
    }
}

export default Vote ;