import React from 'react'

function LabelText(props) {
    return (
        <div className="form-row">
            <label htmlFor={props.name}> {props.label}: </label>
            <input type="text" id={props.name} onChange={props.onChange} value={props.value}/>
        </div>
    );
    }

export class StudentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstName: "", lastName: "", year: "" };
        this.saveClicked = this.saveClicked.bind(this);
        this.changeText = this.changeText.bind(this);
        
    }
    
    saveClicked = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    changeText = (e) => {
        this.setState(
        {[e.target.id]: e.target.value});
    }

    //onChange = (e) => this.setState({ [e.target.name]: e.target.value });
            
    render() {
        return (
            
             <form>
                <LabelText label="First name" name="firstName" onChange={this.changeText} value={this.state.firstName}/>
                <LabelText label="Last name" name="lastName" onChange={this.changeText} value={this.state.lastName}/>
                <LabelText label="Year" name="year" onChange={this.changeText} value={this.state.year}/>   
                
                <button onClick={this.saveClicked}> Save </button>

                <button>Clear</button>
            </form>
        );
    }

}
export default StudentInfo

/*function LabelText(props) {
    return (
        <div className="form-row">
            <label htmlFor={props.name}>{props.label}:</label>
            <input type="text" id={props.name}/>
        </div>
    );
   }*/

//<LabelText label="First name" name="firstName"/>
//<LabelText label="Last name" name="lastName" />
//                <LabelText label="Year" name="year" />
/*<form onSubmit={this.onSubmit}>
                
                <input
                    label="First name" 
                    type="text" 
                    name="firstName" 
                    placeholder="First" 
                    value={this.state.props}
                    onChange={this.onChange}
                />

                <input
                    label="Last name" 
                    type="text" 
                    name="lastName" 
                    placeholder="Last" 
                    value={this.state.props}
                    onChange={this.onChange}
                />

                <input
                    label="Year" 
                    type="text" 
                    name="year" 
                    placeholder="year" 
                    value={this.state.props}
                    onChange={this.onChange}
                />
                */
/*render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="title" 
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Todo ..." 
          value={this.state.title}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
          style={{flex: '1'}}
        />
      </form>
    )
  }
}*/



/*
import React from 'react'

function LabelText(props) {
    return (
        <div className="form-row">
            <label htmlFor={props.name}>{props.label}:</label>
            <input type="text" id={props.name}/>
        </div>
    );
   }
   

export const StudentInfo = class StudentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstName: "", lastName: "", year: "" };
    }
    
    
    render() {
        return (
            <form>
                <LabelText label="First name" name="firstName"/>
                <LabelText label="Last name" name="lastName" />
                <LabelText label="Year" name="year" />
                
                <button>Save</button>
                <button>Clear</button>
            </form>
        );
    }

}


*/