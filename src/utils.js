//utilsjs
export default class Utils {
  static getEndDate = () => {
    var time = new Date();
    time.setDate(time.getDate() + 30);
    return time.toLocaleDateString();
  };
}
