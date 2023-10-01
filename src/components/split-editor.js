import styles from "./small-editor.module.css";
import stylesSplit from "./split-editor.module.css";

import {useId} from "react";
import {unified} from "unified";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import rehypeClassNames from "rehype-class-names";
import rehypeHighlight from "rehype-highlight";
import {classes} from "@/utils/class-functions";
import {autoResizeTextarea} from "@/utils/textarea-functions";

export default function SplitEditor({ editorTitle, placeholder, minRows }){
    const previewContainerId = "previewContainer-" + useId();
    const textareaId = "textarea-" + useId();
    const columnSeparatorId = "columnSepatator-" + useId();

    const placeholderText = (placeholder) ? placeholder : "Hier kommt dein toller Text hin";

    const toggleEditorView = () => {
        const previewContainer = document.getElementById(previewContainerId);
        const textarea = document.getElementById(textareaId);
        const columnSeparator = document.getElementById(columnSeparatorId);

        textarea.classList.remove(styles.hidden);
        previewContainer.classList.add(styles.hidden);
        columnSeparator.classList.add(styles.hidden);
    }

    const togglePreviewView = async () => {
        const previewContainer = document.getElementById(previewContainerId);
        const textarea = document.getElementById(textareaId);
        const columnSeparator = document.getElementById(columnSeparatorId);

        await populatePreviewView(textarea, previewContainer);

        textarea.classList.add(styles.hidden);
        previewContainer.classList.remove(styles.hidden);
        columnSeparator.classList.add(styles.hidden);
    }

    const toggleSplitView = async () => {
        const previewContainer = document.getElementById(previewContainerId);
        const textarea = document.getElementById(textareaId);
        const columnSeparator = document.getElementById(columnSeparatorId);

        await populatePreviewView(textarea, previewContainer);

        textarea.classList.remove(styles.hidden);
        previewContainer.classList.remove(styles.hidden);
        columnSeparator.classList.remove(styles.hidden);
    }

    const populatePreviewView = async (textarea, previewContainer) => {
        const previewContent = await unified()
            .use(remarkParse)
            .use(remarkMath)
            .use(remarkRehype)
            .use(rehypeHighlight)
            .use(rehypeClassNames, {
                p: styles.previewP,
                code: "hljs"
            })
            .use(rehypeKatex)
            .use(rehypeStringify)
            .process(textarea.value);

        previewContainer.innerHTML = (previewContent.value !== "") ? previewContent : placeholderText;
    }

    const handleChange = async () => {
        const previewContainer = document.getElementById(previewContainerId);
        const textarea = document.getElementById(textareaId);
        await populatePreviewView(textarea, previewContainer);

        console.log("CHANGE!")

        autoResizeTextarea(textarea);
    }

    return <div className={styles.editorContainer}>
        <div className={styles.editorHeader}>
            <span className={styles.editorTitle}>{(editorTitle) ? editorTitle : "Split Editor"}</span>
            <div className={styles.viewButtonsContainer}>
                <button className={styles.viewButton} onClick={toggleSplitView}>Split</button>
                <span className={styles.viewButtonsSeparator}>•</span>
                <button className={styles.viewButton} onClick={toggleEditorView}>Editor</button>
                <span className={styles.viewButtonsSeparator}>•</span>
                <button className={styles.viewButton} onClick={togglePreviewView}>Preview</button>
            </div>
        </div>
        <div className={stylesSplit.contentArea}>
            <textarea onChange={handleChange} className={classes(styles.actualEditorArea, stylesSplit.actualEditorArea)} id={textareaId} placeholder={placeholderText} rows={(minRows) ? minRows : 10}></textarea>
            <span className={stylesSplit.columnSeparator} id={columnSeparatorId}></span>
            <div className={classes(styles.previewContainer, stylesSplit.previewContainer)} id={previewContainerId}>
                Hier kommt dein toller Text hin
            </div>
        </div>
    </div>;
}