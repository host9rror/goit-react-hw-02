import PropTypes from 'prop-types';

import css from "./Options.module.css"

const Options = ({ updateFeedback, resetState, hasFeedback  }) => {
    return (
        <div className={css.optionsContainer}>
            <ul className={css.optionsList}>
                <li className={css.optionsItem}>
                    <button onClick={() => updateFeedback('good')}>Good</button>
                    <button onClick={() => updateFeedback('neutral')}>Neutral</button>
                    <button onClick={() => updateFeedback('bad')}>Bad</button>
                    {hasFeedback && <button onClick={resetState}>Reset</button>}
                </li>
            </ul>
        </div>
    );
}

Options.propTypes = {
    updateFeedback: PropTypes.func.isRequired,
    resetState: PropTypes.func.isRequired,
    hasFeedback: PropTypes.func.isRequired
};

export default Options;