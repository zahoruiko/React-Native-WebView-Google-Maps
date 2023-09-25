import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

function App() {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <WebView
        originWhitelist={['*']}
        source={{
          html: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29850.944562540655!2d13.403302245542873!3d52.51727515176674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1695666343579!5m2!1sde!2sde" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        }}
      />
    </SafeAreaView>
  );
}

export default App;
