class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //because were using onChange this updates at every stroke
  handleChange(event) {
    // event.preventDefault();
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:3000/submit', {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Accept": "text/plain",
        "Content-Type": 'application/json'
      }
    }).then((response) => response.json())
      .then()
      .catch(error => console.log(error));
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
            <input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
          Email:
            <input id="email" type="text" value={this.state.email} onChange={this.handleChange} />
          Password:
            <input id="password" type="text" value={this.state.password} onChange={this.handleChange} />
          Address:
            <input id="address" type="text" value={this.state.address} onChange={this.handleChange} />
          City:
          <input id="city" type="text" value={this.state.city} onChange={this.handleChange} />
          State:
          <input id="state" type="text" value={this.state.state} onChange={this.handleChange} />
          Zip code:
          <input id="zipCode" type="text" value={this.state.zipCode} onChange={this.handleChange} />
          Phone number:
          <input id="phoneNumber" type="text" value={this.state.phoneNumber} onChange={this.handleChange} />
          Credit card number:
          <input id="creditCard" type="text" value={this.state.creditCard} onChange={this.handleChange} />
          Expiration date:
          <input id="expiryDate" type="text" value={this.state.expiryDate} onChange={this.handleChange} />
          CVV:
          <input id="cvv" type="text" value={this.state.cvv} onChange={this.handleChange} />
          Billing zip code:
          <input id="billingZipCode" type="text" value={this.state.billingZipCode} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
      </form>

    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));