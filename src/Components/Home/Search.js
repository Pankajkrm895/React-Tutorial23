import React, { Component } from "react";
import "./Search.css";

const base_Url = "http://3.17.216.66:4000";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      location: [],
    }
  }

  renderCity = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <option value={item.state_id} key={item.state_id}>
            {item.state}
          </option>
        )
      })
    }
  }

  handleCity = (event) => {
  let stateId = event.target.value
  fetch(`${base_Url}/restaurant?stateId=${stateId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log({ restaurant: data });
      this.setState({ restaurant: data });
    });
  }

  renderRest = (data) =>{
    console.log(data)
    if(data){
      return data.map((item)=>{
        return (
          <option value={item.restaurant_id} key={item.restaurant_id}>{item.restaurant_name} | {item.address}</option>
        )
      })
    }
  }

  render() {

    return (
      <div id="search">
        <div id="logo">
          <span>Pk!</span>
        </div>
        <div id="heading">Search place near to me!</div>
        <div id="dropdown">
          <select onChange={this.handleCity}>
            <option>----Select City----</option>
            {this.renderCity(this.state.location)}
          </select>
          <select className="restSelect">
            <option>----Select restaurants----</option>
            {this.renderRest(this.state.restaurant)}
          </select>
        </div>
      </div>
    );
  }

  // Api calling on page load
  componentDidMount() {
    fetch(`${base_Url}/location`, { method: "GET" })
      // return Promise
      .then((res) => res.json())
      // return data
      .then((data) => {
        this.setState({ location: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default Search;
