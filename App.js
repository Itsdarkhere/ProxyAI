import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { Router } from './routes/Router';
// import * as Splash from "expo-splash-screen";

// Instruct SplashScreen not to hide yet, we want to do this manually
// Splash.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
// });

export default function App() {
  // We cannot access redux state in the same component that holds the provider
  // So -> Router
  // wrap Router in SplashScreen if you want to 
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    height: '100%',
  },
});
