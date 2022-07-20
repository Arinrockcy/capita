import Navbar from "./components/Navbar";
import "./css/common.css";
import "./css/styles.css";
import Dashboard from './pages/Dashboard'
import Home from "./pages/Home";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Component } from "react";
import Footer from "./components/Footer";
import {logIn, logOut, isLoggedIn} from './store/action/login'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      data: null,
      error: null
    };
  }

  async componentDidMount() {
    this.props.isLoggedIN();
    const response = await fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });
      if (response.status >= 300) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
  
      this.setState({ loading: false, data: data });
  }
  render() {
    const { data, error, loading } = this.state;
    return <BrowserRouter>
    <div id="page-home" className="home">
    <Navbar user={data} />
    <div id="main-content" className="main-content-wrapper">
     <Routes>
        <Route
          path="/"
          element={ <Home  {...this.state}/> }
        />
        <Route path="/dashboard"
          element={!data ? <Navigate to="/" /> : <Dashboard/>}/>
      </Routes>
      <Footer></Footer>
      </div>
    </div>
  </BrowserRouter>
  }
}
const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(logOut),
  stopAction: () => dispatch(logIn),
  isLoggedIN: () => dispatch(isLoggedIn)
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

