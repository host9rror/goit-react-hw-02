import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

function App() {
    const [review, setReview] = useState(() => {
        const savedReview = window.localStorage.getItem("saved-review");

        if (savedReview !== null) {
            return JSON.parse(savedReview);
        }

        return {
            good: 0,
            neutral: 0,
            bad: 0
        };
    });

    const totalFeedback = review.good + review.neutral + review.bad;
    const positiveFeedback = totalFeedback > 0 ? Math.round((review.good / totalFeedback) * 100) : 0;

    useEffect(() => {
        window.localStorage.setItem("saved-review", JSON.stringify(review));
    }, [review]);

    function updateFeedback(feedbackType) {
        setReview(prevReview => ({
            ...prevReview,
            [feedbackType]: prevReview[feedbackType] + 1
        }));
    }

    function resetState() {
        setReview({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    }

    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback} resetState={resetState} hasFeedback={totalFeedback > 0} />
            {totalFeedback > 0 ? (
                <Feedback review={review} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
            ) : (
                <Notification />
            )}
        </>
    )
}

export default App;
