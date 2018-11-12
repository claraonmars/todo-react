class Edit extends React.Component{
    render(){
        return(
            <li>
            <input onChange={this.props.edit} value={this.props.item} id={this.props.id}/>
            <button onClick={this.props.delete} id={this.props.id}>Delete</button>
            <button onClick={this.props.done} id={this.props.id}>Task Complete</button>
            <p>{moment().format('LLL')}</p>
            </li>
        )
    }

}

class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind( this );
    this.addItem = this.addItem.bind( this );
    this.removeItem = this.removeItem.bind( this );
    this.editItem = this.editItem.bind( this );
    this.doneItem = this.doneItem.bind( this );

  }

  state = {
    list : [],
    word : "",
    class: 'normal',
    error: '',
    done : []
  }

  changeHandler(event){
    this.setState({word:event.target.value});
    console.log("change", event.target.value);

    // if input is longer than 20 => change className to warning
    if( event.target.value.length > 20){
        let warning = this.state.currentClass
        warning = 'warning'
        this.setState({class: warning, error: 'Error: Input too long'})
    }
    else{
        this.setState({class:'normal'})
    }

  }

  addItem(){
    let listarr = [...this.state.list];
    listarr.push(this.state.word);

    // push todoitem and clear out input value
    this.setState({list: listarr, word: ''});
  }

  removeItem(){
    let listarr = [...this.state.list];
    listarr.splice(event.target.id, 1);
    this.setState({list:listarr});
  }

  editItem(){
    let listarr = [...this.state.list];
    let input = event.target.value;

    listarr[event.target.id] = input;
    this.setState({list:listarr});
  }

  doneItem(){
    let donearr = [...this.state.done];
    let listarr = [...this.state.list];
    donearr.push(listarr[event.target.id]);
    listarr.splice(event.target.id, 1);

    this.setState({list:listarr, done: donearr});
  }

  render() {
      // render the list with a map() here

      console.log("rendering");
      return (
        <div className="list">
        <ul>
            {this.state.list.map((item, i) => (
            <Edit key={i} id={i} edit={this.editItem} delete={this.removeItem} item={item} done={this.doneItem}/>
          ))}
        </ul>
        <p>Done</p>
        <ul>
            {this.state.done.map((done, i) => (
            <li key={i}>
            {done}
            </li>
          ))}
        </ul>
            <p>{this.state.error}</p>
          <input className={this.state.class} onChange={this.changeHandler} value={this.state.word}/>
          <button onClick={this.addItem}>add item</button>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);

