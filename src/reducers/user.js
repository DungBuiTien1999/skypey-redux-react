import { generateUser } from '../helper/static-data';

export default function user(state = generateUser(), action) {
    return state;
}