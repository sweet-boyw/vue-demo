/*
 * @Author: your name
 * @Date: 2022-04-15 00:07:22
 * @LastEditTime: 2022-04-21 10:00:46
 * @LastEditors: Please set LastEditors
 * @Description: 文件下载
 * @FilePath: \managesystem\src\utile\download.js
 */
const downloadFile = (fileStream, name, extension, type = "") => {
    const blob = new Blob([fileStream], {type});
    const fileName = `${name}.${extension}`;
    if ("download" in document.createElement("a")) {
      const elink = document.createElement("a");
      elink.download = fileName;
      elink.style.display = "none";
      elink.href = URL.createObjectURL(blob);
      document.body.appendChild(elink);
      elink.click();
      URL.revokeObjectURL(elink.href);
      document.body.removeChild(elink);
    } else {
      navigator.msSaveBlob(blob, fileName);
    }
  };
  // 数据流下载设置请求头responseType:'blob'

  export default downloadFile