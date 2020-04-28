import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import {robots} from './robots';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }


    // updating states after we fetch whatever the users are
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')

            // then we making some response with json 
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))    
    }
    


    // this is not a react function so we need arrow bracket
    onSearchChange = (event) =>　{
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        // if robot.length is not equal to 0 it will return <div>
        return ! robots.length ? 
            <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends!</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );       
    }
} 

export default App;