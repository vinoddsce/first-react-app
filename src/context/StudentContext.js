import React from 'react';

const StudentContext = React.createContext();

export const StudentsProvider = StudentContext.Provider;
export const StudentsConsumer = StudentContext.Consumer;

