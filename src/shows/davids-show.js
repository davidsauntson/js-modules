import { sayHello } from '../modules/module-1.js';
import { saySomething } from '../modules/module-2.js';
import { sayBye } from '../modules/module-3.js';

export default function init() {
    sayHello();
    saySomething('this show is the best');
    sayBye();
}
