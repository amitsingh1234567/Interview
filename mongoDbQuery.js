/*
$age => Read the value of the age field.

{
  $lookup: {
    from: "products",
    localField: "orders.productId",
    foreignField: "_id",
    as: "product"
  }
} ===>  Take the value from the orders.productId field of the current document. 
CurrentDocument.orders.productId, which is 201

One $ ($field) → field of the current document being processed.
Two $$ ($$variable) → variable created using let.

* */




db.getCollection("products").find({})

db.getCollection("order").find({})

db.getCollection("user").find({})



db.getCollection("user").aggregate([
    {
        $lookup: {
            from: "order",
            localField: "_id",
            foreignField: "userId",
            as: "wallets"
        } 
    },
    {
        $addFields: {
            totalAmount: {
                $sum: "$wallets.amount"
            }
        }
    },
    {
        $project: {
            wallets: 0
        }
    }
]);




db.getCollection("order").aggregate([
    {
        $group: {
            _id: "$userId",
            totalAmount: { $sum: "$amount" }
        }
    },
    {
        $lookup: {
            from: "user",
            localField: "_id",
            foreignField: "_id",
            as: "user"
        }
    },
    {
        $unwind: "$user"
    },
    {
        $project: {
            user: 1,
            totalAmount: 1            
        }
    }
]);



db.getCollection("user").aggregate([
  {
    $lookup: {
      from: "order",
      localField: "_id",
      foreignField: "userId",
      as: "orders"
    }
  },
  {
    $unwind: "$orders"
  },
  {
    $lookup: {
      from: "products",
      localField: "orders.productId",
      foreignField: "_id",
      as: "product"
    }
  },
  {
    $unwind: "$product"
  },
  {
    $group: {
      _id: "$_id",
      name: { $first: "$name" },
      email: { $first: "$email" },
      orders: {
        $push: {
          orderId: "$orders._id",
          productId: "$orders.productId",
          productName: "$product.name",
          quantity: "$orders.quantity",
          amount: "$orders.amount"
        }
      }
    }
  }
]);



//************************** GROUP ********************************* */
db.getCollection("teachers").find({})
db.getCollection("userDetails").find({})


db.getCollection("teachers").aggregate([
    {
        $match: { gender: "female" }
    }
])

db.getCollection("teachers").aggregate([
    {
        $group: {
            _id: {
                age: "$age",
                gender: "$gender"
            },
            totalPeople: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: 0,
            age: "$_id.age",
            gender: "$_id.gender",
            totalPeople: 1
        }
    }
]);

db.getCollection("teachers").aggregate([
    {
        $group: { _id: "$age", name: { $push: "$$ROOT" } }
    }
])


db.getCollection("teachers").aggregate([
    {
        $match: { gender: "male" }
    },
    {
        $group: { _id: "$age", count: { $sum: 1 } }
    },
    {
        $sort: { count: -1 }
    }
])


db.getCollection("userDetails").aggregate([
    {
        $unwind: "$Hobbies"
    },
    {
        $group: { _id: "$age", hoobies: { $push: "$Hobbies" }, user: { $addToSet: "$name" } }
    },
    {
        $project: {
            _id: 0,
            age: "$_id",
            hoobies: 1,
            user: 1
        }
    },
    {
        $sort: {
            age: 1
        }
    },
    {
        $skip: 2
    },
    {
        $limit: 4
    }
])

db.getCollection("userDetails").aggregate([
//    {
//        $match: {
//            age: 24
//        }
//    },
    {
        $group: {
            _id: "$age",
            totalPeople: { $sum: 1 },
            user: {
                $push: {
                    name: "$name",
                    age: "$age",
                    identity: "$identity"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            age: "$_id",
            totalPeople: 1
        }
    }
]);

db.getCollection("userDetails").aggregate([
    {
        $group: {
            _id: {
                age: "$age",
                gender: "$gender"
            },
            totalPeople: { $sum: 1 }
        }
    }
]);


/********************************LOOOKUP USING PIPELINE AS CONDITION********************************* */
db.user.aggregate([
    {
        $lookup: {
            from: "order",
            let: { userId: "$_id" },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $eq: ["$userId", "$$userId"]
                        }
                    }
                },
                {
                    $lookup: {
                        from: "products",
                        localField: "productId",
                        foreignField: "_id",
                        as: "product"
                    }
                },
                {
                    $unwind: "$product"
                },
                {
                    $project: {
                        _id: 1,
                        quantity: 1,
                        product: 1
                    }
                }
            ],
            as: "orders"
        }
    }
])


