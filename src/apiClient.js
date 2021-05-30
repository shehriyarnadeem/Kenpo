import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
export const useAxios = axios.create({
  baseURL: 'http://3.236.131.141:5000',
});

export const apiClient = async (configs) => {
  const token = await AsyncStorage.getItem('jwt');
  const config = {
    ...configs,
    headers: {
      jwt: token,
    },
  };
  const response = await useAxios.request(config);
  return response;
};
