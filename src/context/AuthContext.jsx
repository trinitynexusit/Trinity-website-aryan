import { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const stored = localStorage.getItem('trinity_nexus_user');
        if (stored) {
            setUser(JSON.parse(stored));
        }
        setLoading(false);
    }, []);
    const login = (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (password.length < 6) {
                    reject(new Error('Invalid credentials'));
                    return;
                }
                const userData = {
                    id: crypto.randomUUID(),
                    email,
                    role: email.includes('admin') ? 'admin' : 'user',
                    name: email.split('@')[0],
                };
                setUser(userData);
                localStorage.setItem('trinity_nexus_user', JSON.stringify(userData));
                resolve(userData);
            }, 800);
        });
    };
    const signup = (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (password.length < 6) {
                    reject(new Error('Password must be at least 6 characters'));
                    return;
                }
                const userData = {
                    id: crypto.randomUUID(),
                    email,
                    role: 'user',
                    name: email.split('@')[0],
                };
                setUser(userData);
                localStorage.setItem('trinity_nexus_user', JSON.stringify(userData));
                resolve(userData);
            }, 800);
        });
    };
    const logout = () => {
        setUser(null);
        localStorage.removeItem('trinity_nexus_user');
    };
    return (<AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>);
}
export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx)
        throw new Error('useAuth must be used inside AuthProvider');
    return ctx;
}
