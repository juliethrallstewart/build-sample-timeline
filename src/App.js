import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import Context from './contexts/Context'
import './reset.css';
import './App.css';
import Data from '../src/assets/twitter-data/timeline.json'
import TimelineComponent from '../src/components/TimelineComponent'

function App() {

  const [timeline, setTimeline] = useState([])

  const [user, setUser] = useState([])

  const getTimeline = () => {
    setTimeline(Data.timeline)
  }

  const getUser = () => {
    setUser(Data.user)
  }

  useEffect(() => {
    getTimeline()
    getUser()
  }, [])


  return (
    <Context.Provider value={{timeline, setTimeline, user}}>
      <div className="App">
        <TimelineComponent />
        {/* <Switch>
          <Route exact path="/" component={}/>
          <Route></Route>
        </Switch> */}
      </div>
    </Context.Provider>
  );
}

export default App;
