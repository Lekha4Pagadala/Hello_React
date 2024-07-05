
//functional component which returns piece of jSx.
//class components have render which return piece of jsx

//class based component creating to learn name of the class and using extend  the react component will  make the 
//react to know that this is class based component


//this react.component is class given by react which Userclass will inherit properties from this this react.component
//comes from importing React 

import React from "react";
class UserClass extends React.Component{
//inorder to receive props inside constructor and defintiely should use super(props) if not written super (props)
// we get error and why should we use we should know?
// bcoz  it is the only place to set up our initial state and bind event handlers before the React component mounts.
// By using super(props), we ensure that the constructor props are correctly passed to the parent constructor,
// allowing us to access this.


//if we have to create state variables in constructor in functional components we import useState 
//but in past times there is no such so 
    constructor(props){
   super(props);
   this.state={
    count:0,
//multiple state variables we can just give by giving comma and add unless like functionall
//where we create one more const count2 =useState(1); but how do we set the state var in class component
// this state variable is a big object
    // count2:1
   };
   console.log(this.props.name+"Child constructor");
    }

    //component did mount class is called
    componentDidMount(){
        console.log(this.props.name+"child component Didmount")
    }

 //render method return piece of jSX
 //while rendering which means component is mounted in browser
 //loading a class component means instance of that class is created
 render(){
    console.log(this.props.name+"child render");
    const {name,location} =this.props;
    const {count,count2}=this.state;
    return(
        <div className="user-card"> 
        <h2>Count (class):{count}</h2>
       
        {/* <h2>Count (class):{count2}</h2> */}

         {/* lets create increasing count by clicking button */}

         <button onClick={()=>{
            //we dont uupdate state var like this.state.count=this.state.count+1 whichh is wrong 
            //we dont update state variables directly
            //then how we will do we use this.setState
            //behind this set state count variable goes above and updates only this ccount var and rerender the component
            this.setState({
                count: this.state.count+1,
            });
         }}>Count Increase</button>
        <h1>Name :{name}</h1>
        <h3>{location}</h3>
        <h4>Contact:lekhapagadala@4</h4>
    </div>
    );
 }
}

export default UserClass;

