/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { DefaultPipe } from './Default.pipe';

describe('Pipe: Defaulte', () => {
  let pipe :DefaultPipe;
  beforeEach(()=>{
     pipe = new DefaultPipe();
  });
  it('Providing no value to return fallback', () => {
    expect(pipe.transform('','xyz',true)).toBe('xyz');
  });

  it('Providing Actual value of First parameter', () => {
    expect(pipe.transform('Jab','xyz',true)).toBe('Jab');
  });
});
