
/**
 * Simple authentication utility for demo purposes
 * In a real application, you would use a proper authentication system
 */

export const setOwnerStatus = (isOwner: boolean) => {
  localStorage.setItem('isOwner', isOwner ? 'true' : 'false');
};

export const isOwner = (): boolean => {
  return localStorage.getItem('isOwner') === 'true';
};

export const login = (username: string, password: string): boolean => {
  // For demo purposes, hardcoded credentials
  if (username === 'admin' && password === 'admin123') {
    setOwnerStatus(true);
    return true;
  }
  return false;
};

export const logout = () => {
  setOwnerStatus(false);
};
