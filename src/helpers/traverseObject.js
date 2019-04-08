const traverseObject = obj => {
  new Promise(resolve => {
    Object.keys(obj).forEach(key => {
      if (obj.hasOwnProperty(key)) {
        console.log(key);
        traverseObject(obj[key]);
      }
    });
  });
};

module.exports = traverseObject;
