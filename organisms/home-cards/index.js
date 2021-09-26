import { useTranslations } from 'next-intl';
import HomeCards from '../../molecules/home-cards';

/**
 * Home Cards organism to show the flight search criteria section, 
 * being referred in home page.
 * @param {*} props 
 * @returns 
 */
export default function HomeCardsContainer(props) {
    const t = useTranslations('content');
    const { pageName } = props;
    return (
        <>
            <div className="page_title">
                <h1>{t(`${pageName}.title`)}</h1>
            </div>
            <HomeCards pageName={pageName} />
        </>
    );
}