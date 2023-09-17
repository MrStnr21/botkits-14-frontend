import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux';
import { AppDispatch, AppThunk, RootState } from '../types/index';

export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;

export const useAppDispatch = () => dispatchHook<AppDispatch & AppThunk>();
