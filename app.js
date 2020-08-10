
/*
const title = React.createElement(
    'h1',
    { id: 'main-title', title: 'this is a title.'},
    'My first react element!2'
);

const desc = React.createElement(
    'p',
    null,
    'I just learned how to create a React node and render it into the DOM'
);
*/

const players = [
{
    name: "Chris",
    score: 50,
    id: 1
  },
  {
    name: "Jessie",
    score: 85,
    id: 2
  },
  {
    name: "Birdie",
    score: 95,
    id: 3
  },
  {
    name: "Baby",
    score: 200,
    id: 4
  }
]

const Header = (props) =>{
    console.log(props);
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

class Counter extends React.Component{
 
    state = {
        score:0
    };

    incrementScore = () => {
        this.setState({
            score: this.state.score + 1
        });
    }
    decrementScore = () =>{
        if(this.state.score != 0){
            this.setState({
                score: this.state.score -1
            });
        }
      
    }

    render(){
        return(
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <span className="counter-score"> {this.state.score} </span>
                <button className="counter-action increment" onClick={this.incrementScore}> 
                 + </button>
            </div>
        );
    }

}

const Player = (props) =>{
    return(
        <div className="player">
            <span className={"player-name"}>
                {props.name}
            </span>
            <Counter/>
        </div>
    );
}

const App = (props) =>{
    return(
        <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers ={props.initialPlayers.length}/>
        {/* players */}
        {
           props.initialPlayers.map((player,index) => 
           <Player 
           key = {player.id}
           name ={player.name} 
           score={player.score}
           />
           ) 
        }
    
        </div>
    );
}


//const Player

ReactDOM.render(<App initialPlayers={players} />,document.getElementById('root') );
