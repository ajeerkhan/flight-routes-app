import { Fragment } from 'react';
import FlightCards from '../../molecules/flight-cards';

/**
 * Flight Routes Organims to display the flight routes of a page.
 * @param {*} props 
 * @returns 
 */
export default function FlightRoutes(props) {
    const { routes, pageName } = props;
    if (!routes)
        return null;
    return (
        <Fragment>
            <FlightCards flightCards={routes} pageName={pageName} />
        </Fragment>
    );
}