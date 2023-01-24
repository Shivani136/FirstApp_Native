import React, { useCallback, useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import OfflineNotice from "./app/component/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
//import Screens from "./app/component/Screens";
import { navigationRef } from "./app/navigation/rootNavigation";


export default function App() {
  const [user, setUser] = useState("");
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  // timer=()=> {
  //   setTimeout(() => {
  //     navigation.navigate('Welcome');
  //   }, 1000);
  //   setTimeout(() => {
  //     navigation.navigate('SignIn');
  //   }, 10000);
  // }

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await restoreUser();
      } catch (error) {
        console.log("Error loading app", error);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onNavigationContainerReady = useCallback(async () => {
    if (isReady) await SplashScreen.hideAsync();
  }, [isReady]);

  if (!isReady) return null;

  return (
    <>
     {/* <Screens> */}
     <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer
        ref={navigationRef}
        theme={navigationTheme}
        onReady={onNavigationContainerReady}
      >
        {user ? <AppNavigator /> : <AuthNavigator />}
        {/* <AppNavigator /> */}
      </NavigationContainer>
     </AuthContext.Provider>
     {/* </Screens> */}
    </>
  );
}
