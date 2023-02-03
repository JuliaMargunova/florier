import React from "react";
const BreadcrumbList = () => {
    return (
        <ol vocab="https://schema.org/" typeof="BreadcrumbList" className="bread-crumb">

            <li property="itemListElement" typeof="ListItem">
                <a property="item" typeof="WebPage" href="http://florier-api.somee.com/">
                    <span property="name" >Флорьер</span>
                </a>
                <meta property="position" content="1" />
            </li>
        </ol>
    )
}

export default BreadcrumbList;