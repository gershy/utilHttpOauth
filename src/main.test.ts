import { testRunner } from '../build/utils.test.ts';
import './main.ts';

// Type testing
(async () => {
  
  type Enforce<Provided, Expected extends Provided> = { provided: Provided, expected: Expected };
  
  type Tests = {
    1: Enforce<{ x: 'y' }, { x: 'y' }>,
  };
  return 0 as any as Tests;
  
})();

testRunner([
  
  { name: 'not implemented', fn: async () => {
    
    // TODO: Implement!
    
  }}
  
]);