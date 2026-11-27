import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';
import { api } from '../lib/api';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: 'CUSTOMER' | 'MANAGER' | 'ADMIN';
}

interface AuthContextValue {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Contas mock de demonstração caso o backend ou banco de dados não estejam conectados
const DEMO_USERS: Record<string, { user: AuthUser; password: string }> = {
  'cliente@misho.com': {
    password: '123456',
    user: {
      id: 'mock-user-1',
      name: 'Kenji Sato',
      email: 'cliente@misho.com',
      role: 'CUSTOMER',
    },
  },
  'gerente@misho.com': {
    password: '123456',
    user: {
      id: 'mock-user-2',
      name: 'Sayuri Tanaka',
      email: 'gerente@misho.com',
      role: 'MANAGER',
    },
  },
  'admin@misho.com': {
    password: '123456',
    user: {
      id: 'mock-user-3',
      name: 'Mestre Masashi',
      email: 'admin@misho.com',
      role: 'ADMIN',
    },
  },
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Restore session on mount
  useEffect(() => {
    const stored = localStorage.getItem('misho_token');
    const storedUser = localStorage.getItem('misho_user');
    if (!stored) return;

    setToken(stored);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        return;
      } catch {
        // Fallback para chamada na API
      }
    }

    api
      .get<AuthUser>('/auth/me')
      .then((u) => {
        setUser(u);
        localStorage.setItem('misho_user', JSON.stringify(u));
      })
      .catch(() => {
        // Se falhar e não tiver usuário em cache, limpa
        if (!storedUser) {
          localStorage.removeItem('misho_token');
          setToken(null);
        }
      });
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const res = await api.post<{ token: string; user: AuthUser }>('/auth/login', {
        email,
        password,
      });
      localStorage.setItem('misho_token', res.token);
      localStorage.setItem('misho_user', JSON.stringify(res.user));
      setToken(res.token);
      setUser(res.user);
    } catch {
      // Fallback gracioso para usuários demonstrativos locais
      const demo = DEMO_USERS[email.toLowerCase().trim()];
      if (demo && demo.password === password) {
        const mockToken = `mock-token-${demo.user.role.toLowerCase()}-${Date.now()}`;
        localStorage.setItem('misho_token', mockToken);
        localStorage.setItem('misho_user', JSON.stringify(demo.user));
        setToken(mockToken);
        setUser(demo.user);
        return;
      }

      // Verifica se é um usuário recém cadastrado localmente no browser
      const customUsersRaw = localStorage.getItem('misho_custom_users');
      if (customUsersRaw) {
        try {
          const customUsers = JSON.parse(customUsersRaw);
          const found = customUsers.find(
            (u: { email: string; password: string }) =>
              u.email.toLowerCase() === email.toLowerCase().trim() && u.password === password,
          );
          if (found) {
            const userObj: AuthUser = {
              id: found.id || `custom-${Date.now()}`,
              name: found.name,
              email: found.email,
              role: found.role || 'CUSTOMER',
            };
            const mockToken = `mock-token-custom-${Date.now()}`;
            localStorage.setItem('misho_token', mockToken);
            localStorage.setItem('misho_user', JSON.stringify(userObj));
            setToken(mockToken);
            setUser(userObj);
            return;
          }
        } catch {
          // ignora
        }
      }

      throw new Error('E-mail ou senha inválidos');
    }
  }, []);

  const register = useCallback(
    async (name: string, email: string, password: string) => {
      try {
        await api.post('/auth/register', { name, email, password });
      } catch {
        // Salva mock local para permitir login imediato mesmo sem banco conectado
        const customUsersRaw = localStorage.getItem('misho_custom_users') || '[]';
        const customUsers = JSON.parse(customUsersRaw);
        customUsers.push({
          id: `custom-${Date.now()}`,
          name,
          email,
          password,
          role: 'CUSTOMER',
        });
        localStorage.setItem('misho_custom_users', JSON.stringify(customUsers));
      }
    },
    [],
  );

  const logout = useCallback(() => {
    localStorage.removeItem('misho_token');
    localStorage.removeItem('misho_user');
    setToken(null);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, token, isAuthenticated: !!user, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
