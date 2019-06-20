import {Link} from "react-router-dom";

import BlankContainer from "../testContainer.js";
import {Subscribe} from "unstated";

export default function(props) {
    console.log(props);
    return (
        <Subscribe to={[BlankContainer]}>
            {blank =>(
                <div>
                This is profile <br/>
                {blank.state.text}<br/>
                <Link to="/">Link to homepage</Link>
            </div>
            )}
        </Subscribe>

    )
}