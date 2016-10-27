import { sayHello } from '../modules/module-1.js';
import { sayBye } from '../modules/module-3.js';

export default function init() {
    sayHello();
    sayBye();
}