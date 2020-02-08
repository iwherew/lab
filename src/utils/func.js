/**
 * @description 单数 转 双数，如：5=>05
 * @param {number} v - 数字
 * @return {string}
 */
function doubleNum(v) {
  return v < 10 ? '0' + v : v
}

/**
 * @description 将时间戳转换为格式化的时间
 * @param {string} timestamp - 时间戳
 * @param {number} type - 选择格式的类型
 * @return {string} - 格式化后的时间
 */
export function transformTime(timestamp, type = 1) {
  if (timestamp) {
    let time = new Date(timestamp);
    let YY = time.getFullYear(); //getFullYear方法以四位数字返回年份
    let M = time.getMonth() + 1; // getMonth方法从 Date 对象返回月份 (0 ~ 11)，返回结果需要手动加一
    let D = time.getDate(); // getDate方法从 Date 对象返回一个月中的某一天 (1 ~ 31)
    let h = time.getHours(); // getHours方法返回 Date 对象的小时 (0 ~ 23)
    let m = time.getMinutes(); // getMinutes方法返回 Date 对象的分钟 (0 ~ 59)
    let s = time.getSeconds(); // getSeconds方法返回 Date 对象的秒数 (0 ~ 59)
    let MM = doubleNum(M);
    let DD = doubleNum(D);
    let hh = doubleNum(h);
    let mm = doubleNum(m);
    let ss = doubleNum(s);

    if (type === 1) {
      return YY + '-' + MM + '-' + DD;
    } else {
      return `${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
    }
  } else {
    return '';
  }
}
