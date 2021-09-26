import { useTranslations } from 'next-intl';
import HomeCard from './home-card';
import styles from './home-cards.module.scss';

/**
 * Component displays Home card for search criteria.
 * @param {*} props 
 * @returns 
 */
export default function HomeCards(props) {
    const t = useTranslations('content');
    const { pageName } = props;
    const resultTitle = t(`${pageName}.navCard.viewResultsTitle`);
    return (
        <>
            <ul className={styles.homepage_route}>
                <HomeCard pageLink='/flight-routes?code=dxb-lhr-1'
                    title={t(`${pageName}.navCard.todayFlightTitle`)} resultTitle={resultTitle} />

                <HomeCard pageLink='/flight-routes?code=dxb-lhr-2'
                    title={t(`${pageName}.navCard.tomorrowFlightTitle`)} resultTitle={resultTitle} />
            </ul>
        </>
    )
}