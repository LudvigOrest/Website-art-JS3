import React from "react";

function Filtered({ pBody }) {
    return(
        <container>
            <div class="navbar-margin"></div>
            <div class="filter-div">
                <p class="filter-p" content={pBody}>{pBody}</p>
            </div>
        </container>
    );
};

export default Filtered;