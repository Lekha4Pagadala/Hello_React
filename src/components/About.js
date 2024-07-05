//class based component explanation
//refer README.md
import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

//we will learn the class based components 
class About extends Component{
    constructor(props){
        super(props);
            console.log("Parent constructor");
    }
//see this parent -child component lifecycle in README.md file

// componentDidMount is used to make API calls.But why we should have API calls inside componentDidMount????

//generally in prev we do api calls in useEffect why will we do .Check page 3 in book end of page 
//-------------------
//we dont want to wait for API to render the component so react wants to quickly render it then render the component
// and thne make API call so now constructor is called and render is called now my component is rendered
//now we make api call in the compoentnDidMount  so that the page renders the compnent and while fetching data
//from API we would have the page ready in browser and then meanwhile we would have got data

    componentDidMount(){
        console.log("parent component Didmount")
        //api calls
    }

    render(){
        console.log("Parent Render")
    return(
            <div>
                <h1>About</h1>
                <h2>This is about page to be loaded</h2>
                {/* <User name ={"Lekha (function)"} /> */}
                <UserClass  name ={"First (class component)"} location={"Hyderabad (class)"}/>

{/* lets see if we have 2 instances of a same class(with name Lekha &Sai durga) we created andhow will this get rendered 2 instances  */}
 {/* remaining explanation in README.md file */}
                <UserClass  name ={"second (class component)"} location={"USA (class)"}/>

            </div>
    );
}
}

export default About;


//this below one is functional based component -------

// import User from "./User";
// import UserClass from "./UserClass";
// //we will learn the class based components 
// const About=()=>{
//     return(
//             <div>
//                 <h1>About</h1>
//                 <h2>This is about page to be loaded</h2>
//                 {/* <User name ={"Lekha (function)"} /> */}
//                 <UserClass  name ={"Lekha (class component)"} location={"Hyderabad (class)"}/>
//             </div>
//     );
// }

// export default About;