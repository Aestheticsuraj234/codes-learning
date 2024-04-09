db.products.aggregate(
    [
       {
        $group:{
            _id:'$category',
            totalPriceSum:{$sum:'$price'}
        }
       }
    ]
)


db.products.aggregate([
    {
        $match:{
            category:'Category 1'
        }
    }
])


db.products.aggregate(
    [
        {
            $match:{
                price:{$gt:100}
            }
        },
       {
        $group:{
            _id:'$category',
            totalPriceSum:{$sum:'$price'}
        }
       }
    ]
)


price > 500
category $group
sum price