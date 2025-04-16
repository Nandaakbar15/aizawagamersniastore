/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Helmet } from 'react-helmet';

export default function PageTitle({title}) {
    return (
        <Helmet>
            <title>{title} | Aizawa Gamersmania Store</title>
        </Helmet>
    );
}