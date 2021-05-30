import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
const API_URL = 'http://3.236.131.141:5000';

class HttpService {
  static async header() {
    const token = await AsyncStorage.getItem('jwt');

    return {
      jwt: `${token}`,
      'content-type': 'application/x-www-form-urlencoded',
    };
  }

  static async formData(url, formData) {
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    return await axios.post(`${API_URL}${url}`, formData, config).then((resp) => resp);
  }

  static async post(url, params = {}) {
    const token = await AsyncStorage.getItem('jwt');
    const res = await axios({
      method: 'post',
      url: `${API_URL}${url}`,
      data: params,
      headers: {
        jwt: token,
      },
    });

    return res;
  }

  static async get(url, params = {}) {
    const header = await this.header();
    const body = {
      body: params,
    };
    const paramWithHeader = { header, body };

    const response = await axios
      .get(`${API_URL}${url}`, paramWithHeader)
      .then((res) => res)
      .catch((e) => console.log(e));
    return response;
  }
}

export default HttpService;
