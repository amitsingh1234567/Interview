function getSelectedkey(obj, keys) {
    const result = {};

    function makeKeyValue(source, destination, path, index = 0) {
        const key = path[index];

            if(index === path.length - 1) {
                destination[key] = source[key];
                return;
            };

            destination[key] = destination[key] || {};

            makeKeyValue(
                source[key],
                destination[key],
                path, 
                index + 1
            );
    };

    keys.forEach(item => {
        makeKeyValue(obj, result, item.split('.'))
    });

    return result;
}

const user = {
  name: "Amit",
  age: 30,
  city: "Delhi",
  role: "Developer",
  add: {
      contact: "8955525555",
      email: "greet@gmail.com",
      details: {num: "refre34"}
  }
};

console.log(getSelectedkey(user, ['name', 'age', 'add.details.num']))