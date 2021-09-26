import 'jsdom-global/register';
import * as React from 'react';
import expect from 'expect';
import { shallow, mount, render, ReactWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import FlightCard from './index';
import { NextIntlProvider, useTranslations } from 'next-intl';

global.__DEV__ = true;
jest.mock('next/router', () => ({
  useRouter: () => ({ locale: 'en' })
}));
const message = require("../../../locales/en.json");


const jsonData = require("../../../pages/api/routes/flight_schedule.json");
const flightCards = jsonData?.data?.flightRouteResponse?.routes;
const flightCard = flightCards && flightCards.length > 0 ? flightCards[0] : {};

describe('FlightCard', () => {
  describe('FlightCard component', () => {
    it('should render without throwing an error', function () {
      const wrapper = shallow(
        <NextIntlProvider messages={message}>
          <FlightCard flightCard={flightCard} index={1} />
        </NextIntlProvider>);
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    })

    it('should render FlightCard content', function () {
      const wrapper = mount(<div>
        <NextIntlProvider messages={message}>
          <FlightCard flightCard={flightCard} index={1} />
        </NextIntlProvider>);
      </div>);
      expect(wrapper.find('.flight_card')).toBeTruthy();
    })
  })
})