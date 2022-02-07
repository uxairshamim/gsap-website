import "../styles/TextSection.css";
import React from 'react';


class TextSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {

      return (
        <div className='text-sec'>
            <h2>own your plug</h2>
            <h1>own your plug</h1>
            <h2>own your plug</h2>
            {/* <div className='words-circle-box'>
                <img  />
            </div> */}
        </div>
      );
    }
  }


  export default TextSection;
  