import 'jsdom-global/register';
import * as React from 'react';
import expect from 'expect';
import { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Layout from './index';
import { NextIntlProvider, useTranslations } from 'next-intl';

global.__DEV__ = true;
jest.mock('next/router', () => ({
  useRouter: () => ({ locale: 'en' })
}));
const message = require("../locales/en.json");

describe('Layout', () => {
  describe('Layout component', () => {
    it('should render without throwing an error', function () {
      const wrapper = shallow(<NextIntlProvider messages={message}><Layout /></NextIntlProvider>);
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    })
    
    it('should render layout content', function () {
        const wrapper = mount(<div><NextIntlProvider messages={message}><Layout /></NextIntlProvider></div>);
        expect(wrapper.find('Search Results'));
      })
  })  
})