import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Button, Label } from './styles';

function PayButton({ onPress, focused }) {
  return(
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={focused ? ['#fff', '#ccc'] : ['#00f66c', '#00ac4a']}
        start={[1, 0.2]}
      >
        <MaterialIcons
          name="attach-money"
          size={30}
          color={focused ? "#000" : "#fff"}
        />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}

export default PayButton;