import styles from "./comment.module.css";
import {classes} from "@/utils/class-functions";

export default function CollapsedComment({ creator, timePosted, answerCount}){
    return <div className={classes(styles.commentContainer, styles.collapsed)}>
        <div className={styles.commentHeaderContainer}>
            <div>
                <span>Von </span>
                <span className={styles.clickable}>@{creator}</span>
                <span> um {timePosted}</span>
            </div>
            <div>
                <span className={styles.clickable}>{answerCount} Antworten</span>
            </div>
        </div>
    </div>
}