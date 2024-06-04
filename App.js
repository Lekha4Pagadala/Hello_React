// below one takes 3 args one is which tag to create , object which empty for now 
//what is   heading below? if we do console.log(heading) in browser console u can see react element
//what is react element?? Heading is not h1 tag here its just obj
//react element is nothing but JS object  and also something as props are the children (attributes,"hello world..")
const heading= React.createElement("h1",
{id:"heading"},
"Hello world from react");
//    we need to tell react where is the root ,c reating an element is core thing of react
//below one creates root for react library
  const root= ReactDOM.createRoot(document.getElementById("root"));

  // we are passing react element ,this render needs to take this heading obj and creat h1 tag and create it inside root
 // root.render(heading);  //here we have to render instead of appendchild 

//   react comes with a adv of manipulating dom completely even html written here 
//whats that empty obj. this obj is a place u give attributes to ur tags like h1 tag should need id then 
//we write there and we can give any attribute like xyz="abc"

// how to create the structure like below in react like nested elements
/*

<div id="parent">
        <div id="child">
        <h1  id="h1">  Am h1 tag 
        <h2> am h2 tag</h2>  how to add this sibling to the h1 and child of child id of div 
        //we have to convert into array
        </h1>
        </div> 

         <div id="child">
            <h1  id="h1">  Am h1 tag 
            <h2> am h2 tag</h2>  how to add this sibling to the h1 and child of child id of div 
            //we have to convert into array
            </h1>
            </div> 

</div>
*/


// ReactElement(Object)=> HTML that browser understands || react elem creates object
const parent=React.createElement("div",{id: "parent"},[React.createElement("div",{id: "child"},

// we have written in form of array as it has 2 child h1 and h2 where h1 has sibling h2

//but giving this browser console will have error that "react.development.js:199 Warning: Each child 
//in a list should have a unique "key" prop."
[React.createElement("h1",{id: "h1"},"Iam a h1 tag"),React.createElement("h2",{},"Iam a h2 tag")]
),React.createElement("div",{id: "child2"},
[React.createElement("h1",{id: "h1"},"Iam a h1 tag"),React.createElement("h2",{},"Iam a h2 tag"),
]),
]);

// above code is so much mess but if we have even more tags to be created it is big mess so we can
//have  JSX we wont use react.create Element if its JSX the above is core react 

// instead of rendering heading tag lets do for parent , converts into html elemt
//it is putting parent to root tag

// suppose we have already h1 tag in with Hi react then this render will replace with the elements we have 
// created here if we had so many tags inside div then it will "replace" but not "append" 
//with this tag it shows hi react
//for seconds and then bcoz of elements created in script so it will load react dom into App and 
//executes this code line by line it will render the parent inside root
root.render(parent);

//react is js library where in those links it will have JS object

//simply by creating small element and add those CDN links and can easily work with react
//react can work inside small div element 
//suppose  we have tags above the id= "root"div  or below it then those will be there available it wont replace