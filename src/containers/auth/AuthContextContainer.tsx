import React, { useState } from 'react';
import { AuthProvider } from './AuthContext';
import { withRouter, RouteComponentProps } from 'react-router';
import { AuthStateInterface } from './AuthInterface';
import { TOKEN } from '../../constants';


const AuthContextContainer: React.FunctionComponent<RouteComponentProps> = ({ history, children }) => {
    const defaultAuthState: AuthStateInterface = {
        isAuthenticated: false,
        token: '',
    }

    const [state, setState] = useState<AuthStateInterface>(defaultAuthState)

    const authenticateUser: (token: string) => void = (token: string): void => {
        localStorage.setItem(TOKEN, token);
        setState(prev => {
            return {
                ...prev,
                isAuthenticated: true,
                token: token
            }
        })
    }

    const logoutUser: () => void = (): void => {
        localStorage.removeItem(TOKEN);
        setState(prev => {
            return {
                ...prev,
                isAuthenticated: false,
            }
        })
    }

    const checkAuthentication: () => boolean = (): boolean => {
        return !!localStorage.getItem(TOKEN);
    }

    return (
        <AuthProvider value={{ isAuthenticated: state.isAuthenticated, authenticateUser, logoutUser, checkAuthentication }}>{children}</AuthProvider>
    );
}

export default withRouter(AuthContextContainer);