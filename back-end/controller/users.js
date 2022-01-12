const userService = require('../service/users');

const create = async (req, res, next) => {
    try {
        const { status, message, error } = await userService.create(req.body);
        console.log('aqui 1', req.body)
        if (error) {
            return res.status(status).json({ message: error });
        }
        return res.status(status).json({ message });
    } catch (error) { next({ status: 500, error }); }
}



module.exports = { create };