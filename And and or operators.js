db.teachers.find({})
db.products.find({})
db.user.find({})
db.userDetails.find({})
db.newUsers.find({})
db.order.find({})





db.teachers.find({
    $and: [
        {
            age: {
                $gt: 40
            }
        },
        {
            gender: { $in: ["male"] }
        }
    ]
})

db.teachers.find({
    $and: [
        { age: { $gt: 25 } },
        {
            $or: [
                { name: "Jane Smith" },
                { name: "Michael Johnson" }
            ]
        }
    ]
});

db.teachers.updateOne(
  { name: "John Doe" },
  {
    $set: {
      age: 36
    }
  }
);


db.teachers.updateMany(
  { name: "New Delhi" },
  {
    $set: {
      name: "Michael Johnson"
    }
  }
);














