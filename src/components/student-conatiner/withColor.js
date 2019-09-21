import React, { Component } from 'react';

const withColor = (Component, bColor) => {
    return (props) => {
        return <Component bColor={bColor} color="white" {...props} />
    }
}

export default withColor;