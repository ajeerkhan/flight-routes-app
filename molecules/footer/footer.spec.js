import 'jsdom-global/register';
import * as React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Footer from './index';

describe('Footer', () => {
  describe('Footer component', () => {
    it('should render without throwing an error', function () {
      const wrapper = shallow(<Footer />);
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    })
    
    it('should render Footer content', function () {
        const wrapper =  mount(<div><Footer /></div>);
        expect(wrapper.text().includes("Copyright")).toBeTruthy()
      })
  })  
})