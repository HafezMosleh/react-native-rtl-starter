import React, { useEffect } from 'react';
import { View, Text, I18nManager, StyleSheet } from 'react-native';

export default function App() {
  useEffect(() => {
    if (!I18nManager.isRTL) {
      I18nManager.forceRTL(true);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>سلام دنیا! این یک قالب راست‌چین است.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  text: { fontSize: 20, fontFamily: 'Vazirmatn' }
});
