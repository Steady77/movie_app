import { useTypedDispatch, useTypedSelector } from 'hooks/redux';
import { selectAuth } from 'redux/auth/selectors';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { removeAuthData, setAuthData } from 'redux/auth/authSlice';
import { useEffect } from 'react';

export function useAuth() {
  const dispatch = useTypedDispatch();
  const { email, token, name } = useTypedSelector(selectAuth);

  useEffect(() => {
    const auth = getAuth();
    const unListen = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setAuthData({
            email: user.email,
            name: user.displayName || '',
            token: user.refreshToken,
          }),
        );
      } else {
        dispatch(removeAuthData());
      }
    });
    return unListen;
  }, [dispatch]);

  return {
    isAuth: !!token,
    email,
    token,
    name,
  };
}
