const { Users } = require('../model/users');

async function create(data) {
    const { fullName } = data;
    await Users.create({ fullName });
    return { status: 201, message: 'Usuário criado com sucesso' };
}
module.exports = { create };
