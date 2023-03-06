import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

// Form Validatiaon
import * as Yup from 'yup';
const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'should be max of 16 characters')
    .required('Length is required!'),
});

const App = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(4);
  const [isPassGenerated, setIsPassGenrated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(true);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const genratePasswordString = (): string => {
    //
    let raw_string = '';
    const raw_lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const raw_upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const raw_numbers = '1234567890';
    const raw_symbols = '!@#$%^&*()';

    lowerCase ? (raw_string += raw_lowerCase) : null;
    upperCase ? (raw_string += raw_upperCase) : null;
    numbers ? (raw_string += raw_numbers) : null;
    symbols ? (raw_string += raw_symbols) : null;

    return raw_string;
  };

  const createPassword = (pwdLength: number): string => {
    isPassGenerated ? setPassword('') : null;
    let characters = genratePasswordString();
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * passwordLength);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setPasswordLength(4);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
    setIsPassGenrated(false);
  };

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
