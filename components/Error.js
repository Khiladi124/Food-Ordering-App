import { useRouteError } from "react-router-dom"; // this is a hook
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
            <h1>OOPs.... Error Occured</h1>
            <h2>{err.data}</h2>
            <h2>{err.status +": " +err.statusText}</h2>
        </div>
    )
}
export default Error;