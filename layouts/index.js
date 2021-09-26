import Navigation from '../molecules/navigation';
import styles from './layout.module.scss';
import Footer from '../molecules/footer';
/**
 * Layout component to have website layout for pages.
 * @param {*} props 
 * @returns 
 */
export default function Layout(props) {
    return (
        <>
            <main>
                <div className={styles.flight_container}>
                    <Navigation />
                    {props.children}
                </div>
            </main>
            <Footer />
        </>
    );
}