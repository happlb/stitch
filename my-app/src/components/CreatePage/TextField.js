import React from "react";
import store from '../../store'
import { connect } from 'react-redux'
import { updateGridText } from '../../store/reducers/textWidget'
import "./TextField.css";

const { dispatch } = store


class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       gridText: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({gridText: event.target.value});
    updateText(event,  event.target.value)
  }
  

  render() {
    return (
        <div className="textfield-container">
            <textarea 
      value={this.state.gridText} 
      onChange={this.handleChange}
      placeholder="Type something here!">
    </textarea>
               </div>
                );
              }
            }


export default (TextField)


export const updateText = (e, gridText) => {
     e.preventDefault()
    dispatch(updateGridText(gridText))
}
            
