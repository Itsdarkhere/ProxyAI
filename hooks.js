import { useDispatch, useSelector } from "react-redux";

// To be used throughout the app, instead of traditional useDispatch & useSelector
export const useAppDispatch = useDispatch;
export const useAppSelector= useSelector