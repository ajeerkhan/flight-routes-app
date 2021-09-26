import 'jsdom-global/register';
import * as React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import HomeCards from './index';
import { NextIntlProvider } from 'next-intl';

global.__DEV__ = true;
jest.mock('next/router', () => ({
  useRouter: () => ({ locale: 'en' })
}));

const message = require("../../locales/en.json");
describe('HomeCards', () => {
  describe('HomeCards component', () => {
    it('should render without throwing an error', function () {
      const wrapper = shallow(<NextIntlProvider messages={message}>
        <HomeCards pageName="/"/>
       </NextIntlProvider>);
      
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    })
    
    it('should render HomeCards content', function () {
        const wrapper = mount(<div><NextIntlProvider messages={message}><HomeCards pageName="_home"/></NextIntlProvider>)</div>);
        expect(wrapper.text().indexOf("home-cards_homepage_route")).toBeTruthy();
      })

      it('should not render HomeCards content', function () {
        const wrapper = mount(<div><NextIntlProvider messages={message}><HomeCards pageName="_home"/></NextIntlProvider>)</div>);
        console.log(wrapper.html());
        expect(wrapper.text().indexOf("View Resutls")).toBeTruthy();
      })
      
  })  
})