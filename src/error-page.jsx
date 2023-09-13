import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-pager">
            <h1>Oops!</h1>
            <p>Soory, an unexpected error has ocurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
