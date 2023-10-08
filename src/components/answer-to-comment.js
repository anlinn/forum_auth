import Comment from "@/components/comment";
import styles from "./comment.module.css";
import {useId, useState} from "react";
import CollapsedComment from "@/components/collapsed-comment";

export default function AnswerToComment({ creator, timePosted, answers, children }) {
    let [collapsed = true, setCollapsed] = useState();

    const arrowID = "arrow-" + useId();

    const handleArrowClick = (e) => {
        const arrow = document.getElementById(arrowID);
        if(collapsed){
            arrow.classList.add(styles.rotated);
        } else {
            arrow.classList.remove(styles.rotated);
        }
        setCollapsed(!collapsed);
    }

    return <div className={styles.answerContainer}>
        <div className={styles.arrowContainer} onClick={handleArrowClick}>
            <div className={styles.arrow} id={arrowID}>↑</div>
        </div>
        {
            (collapsed) ? <CollapsedComment creator={creator} timePosted={timePosted} answerCount={answers.length}/> : <Comment creator={creator} timePosted={timePosted} answers={answers}>{children}</Comment>
        }
    </div>;
}