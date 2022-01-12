const userService = require('../service/users');

const create = async (req, res, next) => {
    try {
        console.log('aqui 1', req.body)
        const { status, message, error } = await userService.create(req.body);
        if (error) {
            return res.status(status).json({ message: error });
        }
        return res.status(status).json({ message });
    } catch (error) { next({ status: 500, error }); }
}

const getAll = async (_req, res) => {
    const { status, data, message } = await userService.getAll();
    if (message) return res.status(status).json(message);

    return res.status(status).json(data);
}

module.exports = { create, getAll };
