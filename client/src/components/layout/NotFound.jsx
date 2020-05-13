import React, { Fragment } from 'react'

const NotFound = () => {
    return (
        <Fragment>
            <h1 className="large text-primary">
                <i className="fas fa-exclamation-triangle"/>
                    Page Not Found
            </h1>
            <p className="medium">Sorry, this page does not exists</p>
        </Fragment>
    )
}

export default NotFound;