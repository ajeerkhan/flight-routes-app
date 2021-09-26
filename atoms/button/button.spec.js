import 'jsdom-global/register';
import * as React from 'react';
import expect from 'expect';
import { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Button from './index';

describe('Atom', () => {
  describe('Button', () => {
    it('should render without throwing an error', function () {
      const wrapper = shallow(<Button />);
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    })
    
    it('should render type as button', function () {
        const wrapper = mount(<div><Button title="click me!" type="button" onClick={()=>{}} /></div>);
        expect(wrapper.find('button'));
      })
  })  
})