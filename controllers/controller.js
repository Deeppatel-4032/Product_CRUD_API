
const getdata_controller = (req, res) => {
    let obj = {
        id : "kjehf456ferbg",
        nmae : "Deep",
        lname : "patel",
        age : 23,
        gender : "male",
        email : "deep@gmail.com",
        address : [
            {
                city : "Banglore",
                state : "karnataka"
            },
            {
                city : "Pune",
                state : "Maharashtra"
            }
        ]
    }

    console.log("obj >>>>>>>>", obj);
    res.json(obj)
}

module.exports = {
    getdata_controller
}