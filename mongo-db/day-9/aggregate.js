db.products.aggregate(
    [
       {
        $group:{
            _id:'$category',
            totalPrice:{$sum:'$price'},
            avgPrice:{$avg:'$price'},
            maxPrice:{$max:'$price'},
            minPrice:{$min:'$price'}

        }
       }
    ]
)


// db.products.aggregate([
//     {
//         $match:{
//             category:'Category 1'
//         }
//     }
// ])


// db.products.aggregate(
//     [
//         {
//             $match:{
//                 price:{$gt:100}
//             }
//         },
//        {
//         $group:{
//             _id:'$category',
//             totalPriceSum:{$sum:'$price'}
//         }
//        }
//     ]
// )


// // price > 500
// // category $group
// // sum price

// map




// *$Match


db.user.aggregate([
    {
        $match:{
            subscriberCount:{gte:20000}
        }
    }
])