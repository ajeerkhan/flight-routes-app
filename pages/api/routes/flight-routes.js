
import flightRoutes from './flight_schedule.json';
/**
 * This is API for handling flight routes.
 * Accepts filter crieria as querystring, and returns flight routes that meets the criteria.
 * # handles below scenarios #
 * No data available for search |No matching found for criteria | any unhandled exception 
 * @param {*} param
 * @param {*} res 
 */
export default function handler({ query: { code } }, res) {
  /**
   * Possible scenario
   * No data available for search |No matching found for criteria | any unhandled exception 
   */
  try {
    /**
     * Scenario: No data available for search.
     */
    if (!flightRoutes) {
      res.status(404).json({
        code: '1001', //no record in db
        message: `No records available for code: ${code}.`
      })
    }

    /**
     * Scenario: No is available for search
     */
    const searchCriteria = Array.isArray(code) ? code.map(c => c.toLowerCase()) : [code?.toLowerCase()];
    const filtered = flightRoutes?.data?.filter((r) => searchCriteria.includes(r?.route?.toLowerCase()));
    const filteredData = Array.isArray(filtered) ? filtered.map(r => {
      return ({
        "data": {
          ...r
        }
      });
    })
      :
      [];

    if (filteredData.length > 0) {
      res.status(200).json(filteredData);
    } else {
      res.status(404).json({
        code: '1002', //No matching
        message: `No records found for code: ${code}.`
      })
    }
  }
  catch (e) {
    res.status(500).json({
      code: '1002', //exceptions
      message: `No records found for code: ${code}.`
    })
  }
}
