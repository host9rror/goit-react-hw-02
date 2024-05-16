import { PropTypes } from "prop-types";
import css from "./Notification.module.css"

const Notification = () => {
    return (
        <div className={css.notificationContainer}>
            <p className={css.notificationText}>No feedback yet</p>
        </div>
    );
};

Notification.PropTypes = {
    totalFeedback: PropTypes.string.isRequired,
}

export default Notification;