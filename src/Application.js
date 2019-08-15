import React, {Component} from 'react';
//import HighScore from './HighScore';
import Button from './components/button';
import './css/style.css';

class Application extends Component {

    constructor(props){
        super(props);

        this.state = {
            // count : 0,
            // overTen: false
            current: '0',
            previous: []
        }
    }

    // handleClick = () => {
    //     this.setState({count: this.state.count + 1});
    // }

    // resetCount = (e) => {
    //     this.setState({
    //         count: 0,
    //         overTen: false
    //     });
    // }

    // componentDidUpdate(props, state){
    //     if(this.state.count > 10 && this.state.count !== state.count && !this.state.overTen){
    //         console.log("Updating overTen")
    //         this.setState({overTen: true});
    //     }
    // }

    reset = () => {
        this.setState({result: '0'});
    }

    addToCurrent = (symb) => {
        this.setState({current: this.state.current + symb});
    }

    render(){
        const buttons = [
            {symbol: 'C', cols: 3, action: this.reset},
            {symbol: '/', cols: 1, action: this.addToCurrent},
            {symbol: '7', cols: 1, action: this.addToCurrent},
            {symbol: '8', cols: 1, action: this.addToCurrent},
            {symbol: '9', cols: 1, action: this.addToCurrent},
            {symbol: '*', cols: 1, action: this.addToCurrent},
            {symbol: '4', cols: 1, action: this.addToCurrent},
            {symbol: '5', cols: 1, action: this.addToCurrent},
            {symbol: '6', cols: 1, action: this.addToCurrent},
            {symbol: '-', cols: 1, action: this.addToCurrent},
            {symbol: '1', cols: 1, action: this.addToCurrent},
            {symbol: '2', cols: 1, action: this.addToCurrent},
            {symbol: '3', cols: 1, action: this.addToCurrent},
            {symbol: '+', cols: 1, action: this.addToCurrent},
            {symbol: '0', cols: 2, action: this.addToCurrent},
            {symbol: '.', cols: 1, action: this.addToCurrent},
            {symbol: '=', cols: 1, action: this.addToCurrent},
        ];
        return (
            <div className="App">
                {/* <h1>You clicked the button {count} times</h1>
                <HighScore 
                    overTen={this.state.overTen}
                    onReset={this.resetCount}
                />
                <span>
                    <button onClick={() => this.handleClick()}>Click Me</button>
                </span> */}

                <input className="result" type="text" value={this.state.current}/>

                {buttons.map((btn, i) => {
                    return <Button symbol={btn.symb} cols={btn.cols} action={(symbol) => btn.action} />
                })}

            </div>
        );
    }
}

export default Application;