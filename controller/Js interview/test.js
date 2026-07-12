function diffObjects(oldObj, newObj) {
  const result = {
    added: {},
    removed: {},
    changed: {}
  };

  for (const key in oldObj) {
    if (!(key in newObj)) {
      result.removed[key] = oldObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      result.changed[key] = {
        oldValue: oldObj[key],
        newValue: newObj[key]
      };
    }
  }

  for (const key in newObj) {
    if (!(key in oldObj)) {
      result.added[key] = newObj[key];
    }
  }

  return result;
};


const oldConfig = {
  theme: "light",
  language: "en",
  notifications: true
};

const newConfig = {
  theme: "dark",
  language: "en",
  autoSave: true
};

console.log(diffObjects(oldConfig, newConfig));