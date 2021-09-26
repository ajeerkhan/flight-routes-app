import { useTranslations } from 'next-intl';

/***
 * Component to display the Flight Search Criteria section.
 * Being used in home page for initiating user search flow.
 */
export default function HomeCard(props) {
    const t = useTranslations('content');
    const { pageLink, title, resultTitle } = props;
    return (
        <>
            <li>
                <a href={pageLink}>
                    <span>{title}</span>
                    <span>{resultTitle}</span>
                </a>
            </li>
        </>
    )
}