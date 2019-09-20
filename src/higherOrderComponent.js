import React from 'react';

// const higherOrderComponent = (Component) => {
//     return () => {
//         return <Component />
//     }
// }

const higherOrderComponent = (Component) => () => <Component />

export default higherOrderComponent;