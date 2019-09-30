import Spinner from "./Spinner";
import React, { Component } from 'react';

const withLoadingSpinner = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            if (!this.props.data) {
                return <Spinner />;
            } else {
                return <WrappedComponent {...this.props} />;
            }
        }
    };
}

export default withLoadingSpinner;