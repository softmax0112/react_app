import React from 'react';
import { AuthInterface, defaultAuthContext } from './AuthInterface';

export const AuthContext = React.createContext<AuthInterface>(defaultAuthContext);
export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;