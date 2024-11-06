import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FAB } from 'react-native-paper';

import { globalStyles } from '../theme';
import { useCounterStore } from '../store';

export const CounterScreen = () => {
    const count = useCounterStore( state => state.count );
    const increase = useCounterStore( state => state.increase );
    const reset = useCounterStore( state => state.reset );

    return (
        <View style={ globalStyles.centerContainer }>
            <Text style={ styles.title }>Template App</Text>
            <Text style={ globalStyles.title }>{ count }</Text>

            <FAB
                onPress={ () => increase( 1 ) }
                onLongPress={ () => reset() }
                style={ globalStyles.fab }
                icon="add-outline"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        color: 'tomato',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: 20,
    },
});
