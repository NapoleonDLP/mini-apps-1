class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (

      <form>
        <label>
          Name:
            <input type="text" name="name" />
          Email:
            <input type="text" name="email" />
          Password:
            <input type="text" name="email" />
          </label>
          <input type="submit" value="Submit" />
      </form>

    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));