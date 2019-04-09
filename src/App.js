import React, { Component ,Fragment} from 'react';
import store from './store/store.js';
import {ONCHANGE_VALUE,ONSUBCLICK_VALUE,ONDELCLICK_VALUE} from './store/actionCreate.js';
import AppUI from './AppUI.js';
class App extends Component {
  constructor(props){
    super(props);
    this.state=store.getState();
    this._subscribe=this._subscribe.bind(this);
    this.onchange=this.onchange.bind(this);
    this.onsubclick=this.onsubclick.bind(this);
    this.ondelclick=this.ondelclick.bind(this)
    store.subscribe(this._subscribe);
  }
  _subscribe(){
    this.setState(store.getState());
  }
  onchange(e){
    const action=ONCHANGE_VALUE(e.target.value);
    store.dispatch(action);
  }
  onsubclick(){
    const action=ONSUBCLICK_VALUE();
    store.dispatch(action);
  }
  ondelclick(index){
    const action=ONDELCLICK_VALUE(index)
    store.dispatch(action);
  }
  render() {
    return (
      <Fragment>
      <AppUI value={this.state.value} list={this.state.list} onchange={this.onchange} onsubclick={this.onsubclick} ondelclick={this.ondelclick}/>
      </Fragment>
    );
  }
}

export default App;
