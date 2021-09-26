import 'jsdom-global/register';
import * as React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import FlightRoutes from './index';
import { NextIntlProvider } from 'next-intl';

global.__DEV__ = true;
jest.mock('next/router', () => ({
  useRouter: () => ({ locale: 'en' })
}));

const message = require("../../locales/en.json");
const jsonData = require("../../pages/api/routes/flight_schedule.json");
const flightRoutes = jsonData?.data?.flightRouteResponse?.routes;
describe('FlightRoutes', () => {
  describe('FlightRoutes component', () => {
    it('should render without throwing an error', function () {
      const wrapper = shallow(<NextIntlProvider messages={message}>
        <FlightRoutes />
       </NextIntlProvider>);
      
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    })
    
    it('should render FlightRoutes content', function () {
        const wrapper = mount(<div><NextIntlProvider messages={message}><FlightRoutes routes={flightRoutes} /></NextIntlProvider>)</div>);
        expect(wrapper.text().indexOf("flight-cards_search_results")).toBeTruthy();
      })

      it('should not render FlightRoutes content', function () {
        const wrapper = mount(<div><NextIntlProvider messages={message}><FlightRoutes  /></NextIntlProvider>)</div>);
        console.log(wrapper.html());
        expect(wrapper.text().indexOf("button")==-1).toBeTruthy();
      })
  })  
})