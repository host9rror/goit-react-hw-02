import PropTypes from 'prop-types';
import css from "./Feedback.module.css"

function Feedback({ review, totalFeedback, PositiveFeedback }) {
    return (
        <div className={css.optionsContainer}>
            <p className={css.optionsText}>Good: {review.good}</p>
            <p className={css.optionsText}>Neutral: {review.neutral}</p>
            <p className={css.optionsText}>Bad: {review.bad}</p>
            <p className={css.optionsText}>Total: {totalFeedback}</p>
            <p className={css.optionsText}>Positive: {PositiveFeedback}%</p>
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
    PositiveFeedback: PropTypes.number.isRequired
};

export default Feedback;
