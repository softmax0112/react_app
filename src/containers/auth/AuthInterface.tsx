export interface AuthInterface {
    isAuthenticated: boolean;
    authenticateUser: (token: string) => void;
    logoutUser: () => void;
    checkAuthentication: () => boolean;
}

export const defaultAuthContext: AuthInterface = {
    isAuthenticated: false,
    authenticateUser: (token: string) => {},
    logoutUser: () => {},
    checkAuthentication: () => false
}

export interface AuthStateInterface {
    isAuthenticated: boolean;
    token: string;
}