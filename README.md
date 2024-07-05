#Hello React

//the parts of web page 

//header
 //-logo
 //-Nav items
 
//Body 
//  -search
//   -restaurant container
        //restaurant card
            //-Img
            //-name of restaurant,star rating ,cuisine,deliveryTime
//Footer
  //copyright
  //links
  //address
  //contact


2 types of export

-1. default export /import 
export default Component;
import  Component from "/path";

-2. named export/import
 export const var_name="";
 import {var_name} from "/path";
only use named import/export only doing multiple exports if its one only default we can use

//if we use both default and named export at a time for one component then it doesnt give any error

# React Hooks

they are normal JS utility functions written by FB developers
how did we get when we install node modules we got all these
2 very imp hooks

 - useState() - Super powerful state variables in react 
 - useEffect() - 

 generally we see import react from React these are present in nodemodules exported so we can import


# React routing types

//two types of routing can be done 
: server side and client side routing in webapps

1) client side : but we arre not doing server side it already has the content it just loads the contact page component bot doing network call we will do thsi when we call it from api
This is one of the reason for Single Page application

2) server side: u make network call and the page contact.js coming from server side 
we hage index.html or contact.js it makes network call and gets the data from contact.js and displays this is 
server side routing

# Class & function components

//functional component which returns piece of jSx.
//class components have render which return piece of jsx

// about us is parent component and userclass is child 
//when we render the parent about us and starts loading while it founds the child compoennt and now it goes to 
//userclass component  whenever  this class instantiated first constructor is called adn then render is called

lifcycle of class based component this way it executes like below
constructor->render>componentDidMount
suppose parent and child components there like inside about userclass component which is child

//lifecycle of parent-child class based component
when compnent is loaded then it calls parent const and it calls render method while rendering it sees the child userClass component it goes inside and sees the constructor and render method it gets rendered once mounting of this component is mounted and now componentDidMount is called (this gets call when component is mounted successfully ) and now parent  componentdidMount is called

parent constructor->parent render-> child constructor->child render
-> child componentDidMount->parent componentDidMOunt

suppose 2 instances of a class in ABout.js with names lekha & sai durga inside parent component About.js.how
will be the lifecycle of this parent and 2 child components.???

parent constructor->parent render->1st child constructor->1st child Render
->2nd child constructor->2nd child render->
1st child componentDidMOunt->2nd child componentDidMOunt->parent componentDidMOunt

why this way is becoz of 2 phases render and commit phase where in render phase(constructorand render gets called)
and then in commit (componentDidMOunt gets called)
so thats why first in render phase once parent gets rendered and found 2 child it will render these 2 components after render phase done then it commits all the components (1stchild,2nd child and parent)

why it is doing like above ?
Dom manipulation is very costly so react does this rendering first and render phase will be very fast bcoz it compare using diff algo and updates virtual dom to real dom and it does it very fast but commit phase will take time 