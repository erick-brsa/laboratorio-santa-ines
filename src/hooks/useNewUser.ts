import { useContext } from 'react';
import NewUserContext from '@/context/new-user/NewUserContext';

export const useNewUser = () => useContext(NewUserContext)
