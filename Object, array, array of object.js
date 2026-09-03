db.users.find({})
db.newUsers.find({})


db.newUsers.find({
    age: { $gt: 20 },
    "address.city": { $eq: "Delhi" }
});

db.newUsers.find({
    skills: "MongoDB"
});

db.newUsers.find({
    "address.country": { $eq: "India" },
    skills: {
        $in: ["MongoDB", "Angular"]
    }
});


db.newUsers.find({
    "orders.product": "Laptop"
});


db.newUsers.find({
    "orders.price": {
        $gt: 60000
    }
});

db.newUsers.find({
    orders: {
        $elemMatch: {
            product: "Laptop",
            price: {
                $gt: 40000
            }
        }
    }
});

db.newUsers.find({
    orders: {
        $elemMatch: {
            $and: [
                {
                    $or: [
                        { product: "Laptop" },
                        { product: "Mouse" }
                    ]
                },
                {
                    price: { $gt: 1000 }
                }
            ]
        }
    }
});

const product = await Product.findOneAndUpdate(
    {
        _id: productId,
        stock: { $gt: 0 }
    },
    {
        $inc: { stock: -1 }
    },
    {
        new: true
    }
);

// Update Document
//=======> Update Objects <========
db.user.updateOne(
  { _id: 1 },
  {
    $set: {
      "address.city": "Noida"
    }
  }
);

db.user.updateOne(
  { _id: 1 },
  {
    $set: {
      "address.city": "Gurgaon",
      "address.state": "Haryana"
    }
  }
);

//==========> Update an Array <==========
db.user.updateOne(
  { _id: 1 },
  { 
    $push: {
      skills: "Angular"
    }
  }
);


db.user.updateOne(
  { _id: 1 },
  {
    $push: {
      skills: {
        $each: ["Express", "NestJS"]
      }
    }
  }
);

// Update only if a specific skill exists
db.user.updateOne(
  {
    _id: 1,
    skills: "Node.js"
  },
  {
    $push: {
      skills: "Express"
    }
  }
);

//Can we use arrayFilters with skills?
db.user.updateMany(
  {},
  {
    $set: {
      "skills.$[skill]": "NestJS"
    }
  },
  {
    arrayFilters: [
      {
        skill: "Node.js"
      }
    ]
  }
);

db.user.updateOne(
  { _id: 1 },
  {
    $pull: {
      skills: "Node.js"
    }
  }
);


db.user.updateOne(
  { _id: 1 },
  {
    $pullAll: {
      skills: ["JavaScript", "MongoDB"]
    }
  }
);


//=======> Update an Array of Objects <========

db.users.find({})
db.newUsers.find({})

//Update Laptop price
db.user.updateOne(
  {
    "orders.product": "Laptop"
  },
  {
    $set: {
      "orders.$.price": 55000
    }
  }
);

//Increase Mouse quantity
db.user.updateOne(
  {
    "orders.product": "Mouse"
  },
  {
    $inc: {
      "orders.$.quantity": 1
    }
  }
);

//Update all order prices
db.user.updateOne(
  { _id: 1 },
  {
    $inc: {
      "orders.$[].price": 1000
    }
  }
);

//Update all orders whose price is less than 5000
db.user.updateOne(
  {},
  {
    $set: {
      "orders.$[order].quantity": 10
    }
  },
  {
    arrayFilters: [
      {
        "order.price": {
          $lt: 5000
        }
      }
    ]
  }
);

db.user.updateOne(
  {
    _id: 1
  },
  {
    $inc: {
      "order.$[order].quantity": 1,
      "order.$[order].price": 500
    },
    $set: {
      "order.$[order].status": "updated"
    }
  },
  {
    arrayFilters: [
      {
        "order.product": "Laptop",
        "order.price": { $lt: 5000 }
      }
    ]
  }
);

//Update only Delhi users
db.user.updateMany(
  {
    "address.city": "Delhi"
  },
  {
    $inc: {
      "orders.$[order].price": 1000
    }
  },
  {
    arrayFilters: [
      {
        "order.price": {
          $lt: 5000
        }
      }
    ]
  }
);

db.user.updateMany(
  {},
  {
    $set: {
      "orders.$[order].quantity": 5
    }
  },
  {
    arrayFilters: [
      {
        "order.product": "Laptop",
        "order.price": {
          $gt: 40000
        }
      }
    ]
  }
);

db.user.updateMany(
  {},
  {
    $inc: {
      "orders.$[order].quantity": 1
    }
  },
  {
    arrayFilters: [
      {
        $or: [
          { "order.product": "Laptop" },
          { "order.product": "Mouse" }
        ]
      }
    ]
  }
);

//Remove an object from the array
db.user.updateOne(
  { _id: 1 },
  {
    $pull: {
      orders: {
        product: { $in: ["Mouse", "Keyboard"] }
      }
    }
  }
);
  
db.user.updateOne(
  { _id: 1 },
  {
    $pullAll: {
      skills: ["Node.js", "MongoDB"]
    }
  }
);

db.user.updateOne(
  { _id: 1 },
  {
    $pull: {
      orders: {
        product: "Mouse"
      }
    }
  }
);

//Add a new order
db.user.updateOne(
  { _id: 1 },
  {
    $push: {
      orders: {
        product: "Keyboard",
        price: 3000,
        quantity: 1
      }
    }
  }
);

db.user.updateOne(
  { _id: 1 },
  {
    $push: {
      orders: {
        $each: [
          {
            product: "Keyboard",
            price: 3000,
            quantity: 1
          },
          {
            product: "Monitor",
            price: 15000,
            quantity: 2
          },
          {
            product: "Headphones",
            price: 2500,
            quantity: 1
          }
        ]
      }
    }
  }
);

//Update Using Multiple Conditions
//Increase Laptop price only if quantity is 1
db.user.updateOne(
  {
    orders: {
      $elemMatch: {
        product: "Laptop" ,
        quantity: 1
      }
    }
  },
  {
    $inc: {
      "orders.$.price": 5000
    }
  }
);


db.user.updateMany(
  {
    $expr: {
      $gt: ["$age", 25]
    }
  },
  {
    $inc: {
      salary: 5000
    }
  }
);





/*
Update nested object
$set: {
  "address.city": "Noida"
}

Add to array
$push: {
  skills: "Angular"
}

Remove from array
$pull: {
  skills: "Node.js"
}

Update first matching array object
$set: {
  "orders.$.price": 55000
}

Update all array objects
$inc: {
  "orders.$[].price": 1000
}

Update selected array objects
$set: {
  "orders.$[order].quantity": 5
}
with =>
arrayFilters: [
  {
    "order.product": "Laptop"
  }
]
*/

