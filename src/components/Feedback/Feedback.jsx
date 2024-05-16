import PropTypes from 'prop-types';
import css from "./Feedback.module.css"

function Feedback({ review, totalFeedback, positiveFeedback }) {
    return (
        <div className={css.optionsContainer}>
            <p className={css.optionsText}>Good: {review.good}</p>
            <p className={css.optionsText}>Neutral: {review.neutral}</p>
            <p className={css.optionsText}>Bad: {review.bad}</p>
            <p className={css.optionsText}>Total: {totalFeedback}</p>
            <p className={css.optionsText}>Positive: {positiveFeedback}%</p>
        </div>
    );
}

Feedback.propTypes = {
    review: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired
    }).isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired
};

export default Feedback;
