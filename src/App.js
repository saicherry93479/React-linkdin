import React,{useEffect} from 'react'
import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './Components/Login'
import Header from './Components/Header'
import Home from './Components/Home'
import {getUserAuth} from './actions'
import {connect} from 'react-redux'

function App(props) {

  useEffect(() => {
      props.getUserAuth();
   
  }, [])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login></Login>
          </Route>
          <Route path="/home">
            <Header></Header>
            <Home></Home>

          </Route>
        </Switch>
      </Router>
     
      
    </div>
  )
}
const mapStateToProps =(state)=>{
  return {

  }
}

const mapStateToDispacth=(dispatch)=>({
  getUserAuth:()=>dispatch(getUserAuth())

})


export default   connect(mapStateToProps,mapStateToDispacth)(App)
