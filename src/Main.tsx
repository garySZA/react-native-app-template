import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import IonIcon from 'react-native-vector-icons/Ionicons';
import { CounterScreen } from './presentation/screens';

const iconProvider = (props: React.ComponentProps<typeof IonIcon>) => <IonIcon { ...props }/>;

export const Main = () => {
    return (
        <PaperProvider
          settings={{
            icon: iconProvider,
          }}
        >
          <SafeAreaView style={ styles.container }>
            <CounterScreen />
          </SafeAreaView>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
