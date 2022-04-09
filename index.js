import { AppRegistry, Platform } from "react-native";
import { registerRootComponent } from "expo";
import App from "./App";
import { name as appName } from "./app.json";
import './commands'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
if (Platform.OS == "android") {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent(appName, () => App);
}

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})