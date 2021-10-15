import Sequelize from './../libs/sequelize';
import userSchema from './models/user';
import { complete, fail } from '../utils/Log';

const sequelize = new Sequelize();
const user = sequelize.define('user', userSchema);

Promise.all([user])
    .then((responses) => complete('Creation process', responses))
    .catch(({ message }) => fail('Creation process', message));
