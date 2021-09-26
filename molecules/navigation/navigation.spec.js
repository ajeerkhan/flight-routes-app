import 'jsdom-global/register';
import * as React from 'react';
import expect from 'expect';
import { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Navigation from './index';
import { NextIntlProvider, useTranslations } from 'next-intl';
global.__DEV__ = true;
jest.mock('next/router', () => ({
  useRouter: () => ({locale: 'en'})
}));
const message = require("../../locales/en.json");

describe('Navigation', () => {
  describe('Navigation component', () => {
    it('should render without throwing an error', function () {
      const wrapper = shallow(
        <NextIntlProvider messages={message}>
          <Navigation />
        </NextIntlProvider>);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    })
    
    it('should render Footer content', function () {
        const wrapper = mount(
          <NextIntlProvider messages={message}>
            <Navigation />
          </NextIntlProvider>);
        expect(wrapper.find('header')).toBeTruthy()
      })
  })  
})