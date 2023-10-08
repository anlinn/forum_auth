import styles from "./comment.module.css";
import {classes} from "@/utils/class-functions";
import AnswerToComment from "@/components/answer-to-comment";
import {useId} from "react";
import SmallEditor from "@/components/small-editor";

export default function Comment({ creator, timePosted, answers, children }) {
    let renderedAnswers = [];

    for (const answer of answers) {
        renderedAnswers.push(<AnswerToComment creator={answer.creator} timePosted={answer.timePosted} answers={answer.answers}>{answer.body}</AnswerToComment>)
    }

    const createAnswerContainerID = "create-answer-container-"+useId();

    const handleAnswerClick = () => {
        const createAnswerContainer = document.getElementById(createAnswerContainerID);
        createAnswerContainer.classList.remove(styles.hidden);
    }

    const handleAbort = () => {
        const createAnswerContainer = document.getElementById(createAnswerContainerID);
        createAnswerContainer.classList.add(styles.hidden);
    }

    return <div>
        <div className={styles.commentContainer}>
            <div className={styles.commentHeaderContainer}>
                <div>
                    <span>Von </span>
                    <span className={styles.clickable}>@{creator}</span>
                    <span> um {timePosted}</span>
                </div>
            </div>
            <div className={styles.commentTextContainer}>
                {children}
            </div>
            <div className={styles.commentFooterContainer}>
                <span className={styles.clickable}>
                    {answers.length} Antworten
                </span>
                <span className={styles.dotSeparator}>
                    •
                </span>
                <span className={styles.clickable} onClick={handleAnswerClick}>
                    Antworten
                </span>
            </div>
        </div>
        <div className={classes(styles.createAnswerContainerOuter, styles.hidden)} id={createAnswerContainerID}>
            <div className={styles.arrowContainer}>
                <div className={styles.arrow}>↑</div>
            </div>
            <div className={styles.createAnswerContainerInner}>
                <div>
                    <div className={styles.createAnswerHeader}>
                        <div>
                            <span>Antwort an </span>
                            <span className={styles.clickable}>@{creator}</span>
                        </div>
                        <div>
                            <span className={styles.clickable} onClick={handleAbort}>Abbrechen</span>
                        </div>
                    </div>
                    <SmallEditor editorTitle={"Antwort Text"} minRows={10}/>
                </div>
            </div>
        </div>
        <div className={styles.answersContainer}>
            {renderedAnswers}
        </div>
    </div>;
}