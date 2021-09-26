import 'jsdom-global/register';
import * as React from 'react';
import expect from 'expect';
import { shallow, mount} from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import HomeCard from './index';
import { NextIntlProvider, useTranslations } from 'next-intl';

global.__DEV__ = true;
jest.mock('next/router', () => ({
  useRouter: () => ({ locale: 'en' })
}));
const message = require("../../../locales/en.json");

describe('HomeCard', () => {
  describe('HomeCard component', () => {
    it('should render without throwing an error', function () {
      const wrapper = shallow(
        <NextIntlProvider messages={message}>
          <HomeCard pageLink="/pageLink" title="Home Cards" resultTitle = "Search Results" />
        </NextIntlProvider>);
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    })

    it('should render HomeCard content', function () {
      const wrapper = mount(<div>
        <NextIntlProvider messages={message}>
          <HomeCard pageLink="/pageLink" title="Home Cards" resultTitle = "Search Results" />
        </NextIntlProvider>);
      </div>);
      expect(wrapper.text().indexOf('pageLink')).toBeTruthy();
      expect(wrapper.text().indexOf("View Resutls")).toBeTruthy();
    })
  })
})