import React, {Component} from 'react';
import Button from './components/button';
import './css/style.css';

class Application extends Component {

    constructor(props){
        super(props);

        this.state = {
            current: '0',
            previous: [],
            nextIsReset: false
        }
    }

    reset = () => {
        this.setState({current: '0', previous: [], nextIsReset: false});
    }

    addToCurrent = (symb) => {
        if(["/", "*", "+", "-"].indexOf(symb) > -1){
            let {previous} = this.state;
            previous.push(this.state.current + symb);
            this.setState({previous, nextIsReset: true});
        }
        else{
            if((this.state.current === "0" && symb !== ".") || this.state.nextIsReset){
                this.setState({current: symb, nextIsReset: false});
            }else{
                this.setState({current: this.state.current + symb});
            }
        }
    }

    calculate = (symb) => {
        let {current, previous} = this.state;
        if(previous.length > 0){
            current = eval(String(previous[previous.length - 1] + current));
            this.setState({current, previous: [], nextIsReset: true})
        }
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
            {symbol: '=', cols: 1, action: this.calculate},
        ];
        return (
            <div className="App">
            
                {this.state.previous.length > 0 ? 
                    <div className="floaty-last">{this.state.previous[this.state.previous.length - 1]}</div>
                    :
                    null
                }

                <div>
                    <input className="result" type="text" value={this.state.current}/>
                </div>

                {
                    buttons.map((btn, i) => {
                        return <Button key={i} symbol={btn.symbol} cols={btn.cols} action={(symbol) => btn.action(symbol)} />
                    })
                }

            </div>
        );
    }
}

export default Application;