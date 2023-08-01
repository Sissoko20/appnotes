/* eslint-disable @typescript-eslint/naming-convention */
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'appnotes',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    PushNotifications: {
      pluginId: 'cordova-plugin-fcm-with-dependecy-updated',
      config: {
        ANDROID_FIREBASE_SERVICES_VERSION: '20.0.0'
      }
    }
  }
};



export default config;
