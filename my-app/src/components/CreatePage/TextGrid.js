import React from "react";
import store from '../../store'
import { connect } from 'react-redux'
import "./TextGrid.css";

class TextGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testArray: new Array(45).fill(new Array(150).fill(0)),
      // testString: 'hello'
    };
  }
componentDidUpdate(prevProps ){
  console.log(this.props,'props');

 if(prevProps.gridText !== this.props.gridText){
    var tempArray =new Array(45).fill(new Array(150).fill(0))
    for(var i=0; i < this.props.gridText.length; i++ ){
       tempArray[0][i] = 1
    }
    this.setState({testArray: tempArray});
    console.log(this.state.testArray,'here');
  }
}

  render() {
    console.log(this.state.testArray,'testarray');
    return (
        <div className="textgrid-container">
           {this.state.testArray.map((letter, index) => (
              letter.map((m, j) => (
                  <div style={{
                    gridColumn: `${j+1} /${j+2}`,
                    gridRow:  `${(index+1)} /${(index+2)}`,
                    backgroundColor: `${(m===0 ? "#f8f8ff" : "black")}`,
                    border: "1px solid #292e30 "
                    }}>
               </div>
              ))))}
               </div>
                );
              }
            }

export default connect(mapStateToProps)(TextGrid);

function mapStateToProps (state) {
  return { gridText: state.gridText }
}
