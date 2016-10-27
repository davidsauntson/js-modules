import * as module1 from '../modules/module-1.js';
import { sayBye } from '../modules/module-3.js';

export default function init() {
    module1.sayHello();
    module1.shutup();
    sayBye();
}