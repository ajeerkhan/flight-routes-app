import Head from 'next/head'
import { useTranslations } from 'next-intl';
import FlightRoutes from '../../organisms/flight-routes';
import {createURL, formatPageName} from '../../utils/helper'; 
import {APP_ENV} from '../../utils/constants';

/**
 * This is page for flight routes search results page.
 * @param {*} props 
 * @returns 
 */
export default function PageFlightRoutes(props) {
  const {routes, pageName} = props;
  const t = useTranslations('content');
  return (
    <>
    <Head>
      <title>{t("common.title")} | {t(`${pageName}.title`)}</title>
    </Head>
    <FlightRoutes routes={routes} pageName={pageName}/>
    </>
  )
};

PageFlightRoutes.getInitialProps = async function getInitialProps(ctx) {
  const {locale} = ctx;
  const {code, rc} = ctx.query;
  let recordCount = parseInt(APP_ENV.SHOW_RECORDS_COUNT);
  if(typeof recordCount !== "number")
     recordCount = 10;

  if(!!rc && (typeof parseInt(rc)) === "number" ) {
    console.log('querystring check in');
    let qRecordCount = parseInt(rc);
    if(qRecordCount < recordCount)
      recordCount = qRecordCount;
  }
  console.log('APP_ENV.SHOW_RECORDS_COUNT ', APP_ENV.SHOW_RECORDS_COUNT, recordCount)
  const qResults = [];
  if(Array.isArray(code))
    code.map(q=>{qResults.push(`code=${q}`); return q;});
   else
    qResults.push(`code=${code}`);
    
  const qParams = qResults.join('&');

  const pageName = formatPageName(ctx.pathname);
  const apiRoutesEndpoint = APP_ENV.API_ROUTES_ENDPOINT || '/api/routes/flight-routes';
  const apiRoutesEndpointUrl = createURL(`${apiRoutesEndpoint}${!!qParams? `?${qParams}`: ''}`);
  console.log('getinitialprops@Page',apiRoutesEndpointUrl);

  const flightRoutesRes = await fetch(apiRoutesEndpointUrl);
  const flightRoutes = await flightRoutesRes.json();
  const routesStore = [];
  if(Array.isArray(flightRoutes)){
    flightRoutes.map(routeSet => {
      routesStore.push(...(routeSet?.data?.flightRouteResponse?.routes));
    })
  }
  //apply count filter

  ctx.appData = routesStore.filter((route, index)=> index < recordCount);
  const messages = require(`../../locales/${locale}.json`);
  ctx.messages = messages;
  return( {
          routes: ctx.appData,
          messages,
          pageName
      }
  )
}