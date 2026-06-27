function getSelectedkey(user, targetKeys){
    const result = {};
    
    function getKey(source, target, path, index = 0){
        const key = path[index];
        
        if(index === path.length - 1){
            target[key] = source[key];
            return;
        };
        
        target[key] = target[key] || {};
        
        getKey(
            source[key],
            target[key],
            path,
            index + 1
        );
    };
    
    targetKeys.forEach(item => {
        getKey(user, result, item.split('.'));
    });
    
    return result
};

const user = {
  name: "Amit",
  age: 30,
  city: "Delhi",
  role: "Developer",
  add: {
      contact: "8955525555",
      email: "greet@gmail.com"
  }
};
console.log(getSelectedkey(user, ["name", "add.contact"]));