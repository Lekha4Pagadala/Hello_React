import { useRouteError } from "react-router-dom";
// this is custom error pages
//another feature react router dom gives access to important HOOK , hook is a fn that hook is
//useRouteError import it in error.js page why this becoz it give clear mention of error msg understnads it 
//exact where error occurs

const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
            <h1>OOPS !!! Something went wrong</h1>
            {/* this  we are writing err.status we have imported useRouteError and console.log(err) in console 
            page we can see diff parameters with status error msg and can use here with err.status etc */}
            <h3>{err.status} </h3>
            <h4>{err.statusText}</h4>
        </div>
    );
}

export default Error;