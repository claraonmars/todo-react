class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind( this );
    this.addItem = this.addItem.bind( this );

  }

  state = {
    list : [],
    word : ""
  }

  changeHandler(event){
    this.setState({word:event.target.value});
    console.log("change", event.target.value);
  }

  addItem(){
    let listarr = [...this.state.list];
    listarr.push(this.state.word);
    // push todoitem and clear out input value
    this.setState({list: listarr, word: ''});
  }

  render() {
      // render the list with a map() here

      console.log("rendering");
      return (
        <div className="list">
        <ul>
            {this.state.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
          <input onChange={this.changeHandler} value={this.state.word}/>
          <button onClick={this.addItem}>add item</button>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);

