import { AppDispatch } from 'redux/store';
import { RootState } from 'redux/store';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
