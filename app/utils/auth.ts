import { ADMIN_USERNAME, ADMIN_PASSWORD, TOKEN_STORAGE_KEY } from './constants';

const authenticate = (username: string, password: string): string | null => {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    return 'token-de-autenticacion';
  } else {
    return null;
  }
};

const login = (username: string, password: string): void => {
  const token = authenticate(username, password);

  if (token) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
  } else {
    console.error('Credenciales inválidas');
  }
};

const logout = (): void => {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
};

export { login, logout };