import React from 'react'

function LabelText(props) {
    return (
    <div className="form-row">
    
    <label htmlFor={props.name}> {props.label}: </label>
    <input type="text" id={props.name} onChange={props.onChange} value={props.value} />
    
    </div>
    
    );
}

export const StudentInfo = class StudentInfo extends React.Component {
    constructor(props) {
        
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            year: ""};
        this.saveClicked = this.saveClicked.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
        this.changeText = this.changeText.bind(this);
        this.onAddStudent = this.onAddStudent.bind(this);
    } 
            
    saveClicked = (e) => { 
        e.preventDefault(); 
        console.log(this.state);
    };

     
    changeText(e){this.setState({[e.target.id]: e.target.value});
    
    }
    render() {
        return (
        <form>
            <input value={this.state.someValue} onChange={this.handleChange}/>
            <LabelText label="First name" name="firstName" onChange={this.changeText} value={this.state.firstName} />
            <LabelText label="Last name" name="lastName" />
            <LabelText label="Year" name="year" />
            
                
                
                <button onClick={this.saveClicked}>Save</button>
                <button>Clear</button>
                
        </form>
        )
    }
   
   
    
  }

//export const StudentInfo =  class StudentInfo


 // <LabelText label="First name" name="firstName" onChange={this.changeText} value={this.state.firstName}  
//export const StudentInfo =  
//<button>Save</button>    
//<input value={this.state.someValue} onChange={this.handleChange}/>
/*
 saveClicked = (e) => {
        e.preventDefault();
        console.log(this.state);
    }   


export const StudentInfo = () => {
    return (
        <form>
            <LabelText label="First name" name="firstName"/>
            <LabelText label="Last name" name="lastName" />
            <LabelText label="Year" name="year" />
        
            <button>Save</button>
            <button>Clear</button>
        </form>

       
       
       
    )
}
*/
