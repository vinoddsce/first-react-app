import React from 'react';

const DepartmentContext = React.createContext();

export const DepartmentProvider = DepartmentContext.Provider;
export const DepartmentConsumer = DepartmentContext.Consumer;

