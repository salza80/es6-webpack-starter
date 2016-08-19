import ConsoleLogger from './ConsoleLogger';
import HelloWorld from './classes/HelloWorld';

let logger = new ConsoleLogger('Hello from the ConsoleLogger').logToConsole();

console.log(HelloWorld.sayHello());