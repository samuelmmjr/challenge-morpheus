const { Users } = require('../model/users');

const create = async (data) => {
    const { fullName } = data;
    // console.log(data)
    await Users.create({ fullName });
    return { status: 201, message: 'Usuário criado com sucesso' };
}

const getAll = async () => {
    const users = await Users.findAll();
    return { status: 200, data: users }
}

module.exports = { create, getAll };
