import { useContext } from 'react';

import { UserContext } from '../Context/UserContext';

export function useUserContext() {
  const userContext = useContext(UserContext);
  return userContext;
}