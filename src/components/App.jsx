import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";

function App() {
    const [review, setReview] = useState(() => {
        const savedReview = window.localStorage.getItem("saved-review");

        if (savedReview !== null) {
            return JSON.parse(savedReview)
        }

        return {
            good: 0,
            neutral: 0,
            bad: 0
        };
    });

    useEffect(() => {
        window.localStorage.setItem("saved-review", JSON.stringify(review));
    }, [review]);

    function updateFeedback(feedbackType) {
        switch (feedbackType) {
            case "good":
                setReview({
                    ...review,
                    good: review.good + 1,
                })
                break;
            case "neutral":
                setReview({
                    ...review,
                    neutral: review.neutral + 1,
                })
                break;
            case "bad":
                setReview({
                    ...review,
                    bad: review.bad + 1,
                })
                break;
            default:
                break;
        }
    }

    function resetState() {
        setReview({
            good: 0,
            neutral: 0,
            bad: 0,
        })
    }

    const hasFeedback = review.good > 0 || review.neutral > 0 || review.bad > 0;


    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback} resetState={resetState} hasFeedback={hasFeedback} />
            <Feedback review={review} />
        </>
    )
}

export default App;
