import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import Input from '../../Components/Input';
import {setAuth} from '../../redux/Auth/actions';
import {loginApi} from '../../services/login';
import {setStorageItem} from '../../helpers/asyncStorage';
import styles from './style';

function Login() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);

  const onChangeValues = (name, value) => {
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const loginUser = async () => {
    // we should validate user info but I skip it
    if (username && password) {
      const body = {
        username,
        password,
      };
      try {
        setSubmitLoading(true);
        const res = await loginApi(body);
        setStorageItem('token', res.token);
        dispatch(setAuth(res.token));
      } catch (err) {
        // error handeling
        setSubmitLoading(false);
        console.log(err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Input
        value={username}
        label="username"
        name="username"
        onChange={onChangeValues}
      />
      <Input
        value={password}
        label="password"
        name="password"
        onChange={onChangeValues}
      />
      <Button title="Submit" onPress={loginUser} disabled={submitLoading} />
    </View>
  );
}

export default Login;
