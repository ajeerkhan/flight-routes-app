import React from "react";
import styles from './footer.module.scss';

/**
 * Footer component for footer content display in the page.
 */
class Footer extends React.Component {
    render() {
        let d = new Date();
        let fullYear = d.getFullYear();
        return (
            <div className={styles.footer}>
                <footer>
                    <p>FlyBetter | Copyright &copy; {fullYear}. All right reserved.</p>
                </footer>
            </div>
        );
    }
}
export default Footer;