import { useTranslations } from 'next-intl';
import format from "../../../utils/helper";
import styles from './flight-card.module.scss';
import Button from '../../../atoms/button';
/**
 * Flight Card component displays individual flight routes of the routes.
 * @param {*} props 
 * @returns 
 */
export default function FlightCard(props)
{
 const t = useTranslations('content');
 const {flightCard, index, onSelection, selectionState, pageName} = props;
 const clickHander = (id, e) => {
    onSelection(id);
  }
return(
<div className={`${styles.flight_card} ${selectionState?' card-selected': ""}`} key={index}>
    <div className={styles.flight_card_info}>
        <div className={styles.flight_timing_label}>
            <span>{t(`${pageName}.card.departureTitle`)}</span>
            <span>{t(`${pageName}.card.arrivalTitle`)}</span>
        </div>
        <div className={styles.flight_airport}>
            <span>{flightCard?.display?.origin}</span>
            <span>{flightCard?.display?.destination}</span>
        </div>
        <div className={styles.flight_terminal}>
            <span>{flightCard?.display?.departureTerminal}</span>
            <span>{flightCard?.display?.arrivalTerminal}</span>
        </div>
        <div className={styles.flight_date}>
            <span>{format(flightCard?.display?.deptDate)}</span>
            <span>{format(flightCard?.display?.arrDate)}</span>
        </div>
        <div className={styles.flight_time}>
            <span>{flightCard?.display?.deptTime}</span>
            <span>{flightCard?.display?.arrTime}</span>
        </div>
    </div>
    <div className={styles.flight_card_action}>
        <div className={styles.flight_tail_img}>
            <img src={`/${(flightCard?.operator)}.svg`.toLowerCase()} alt={flightCard?.operator}/>
        </div>
        <div className={styles.action_airport_code}>
            <span>{flightCard?.origin}</span><span>-</span><span>{flightCard?.destination}</span>
        </div>
        <div className={`${styles.action_cta} ${selectionState?'.action_cta-selected': ""}`}>
            <Button onClick={(e)=>clickHander(index, e)} className={`${selectionState?"action_cta selected": ""}`} title={t(`${pageName}.card.ctaTitle`)}></Button>
        </div>
    </div>
</div>
)}