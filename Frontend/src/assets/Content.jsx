import React from "react";
import NewOrder from "../Components/NewOrder/NewOrder";

const Language = {
    Pages: [
        {
            route: "/NewOrder",
            component: <NewOrder />,
            condition: (CRObject) => false
        }
    ]

}


export default Language;