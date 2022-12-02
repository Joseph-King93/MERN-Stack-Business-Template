module.exports = {
    create
};

function create(req, res) {
    // Baby step...
    res.json({
        user: {
            name: req.body.name,
            email: req.body.email
        }
    });
    console.log(user)
}