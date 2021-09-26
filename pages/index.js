import React from "react";
import HomeCards from '../organisms/home-cards';
import { formatPageName } from '../utils/helper';

/**
 * The home page of the application.
 * @param {*} props 
 * @returns 
 */
export default function Home(props) {
  const { pageName } = props;
  return (
    <>
      <HomeCards pageName={pageName} />
    </>
  );
};

Home.getInitialProps = async function getInitialProps(ctx) {
  const { locale } = ctx;
  const pageName = formatPageName(ctx.pathname);
  ctx.appData = {}
  const messages = require(`../locales/${locale}.json`);
  ctx.messages = messages;
  return ({
    appData: ctx.appData,
    messages,
    pageName
  }
  )
};