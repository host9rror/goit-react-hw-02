import PropTypes from 'prop-types';
import css from "./Feedback.module.css"

function Feedback({ review }) {
    const totalFeedback = review.good + review.neutral + review.bad;
    const PositiveFeedback = totalFeedback > 0 ? Math.round((review.good / totalFeedback) * 100) : 0;

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
    }).isRequired
};

export default Feedback;
