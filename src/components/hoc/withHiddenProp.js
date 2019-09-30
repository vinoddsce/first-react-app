import React, { Component } from 'react';

const withHiddenProp = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            if (this.props.hidden) {
                return null;
            } else {
                return <WrappedComponent {...this.props} />;
            }
        }
    };
}

export default withHiddenProp;