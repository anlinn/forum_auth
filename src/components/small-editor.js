import styles from "./small-editor.module.css";
import {useId} from "react";
import {unified} from "unified";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import rehypeClassNames from "rehype-class-names";
import rehypeHighlight from "rehype-highlight";
import {autoResizeTextarea} from "@/utils/textarea-functions";

export default function SmallEditor({ editorTitle, placeholder, minRows }){
    const previewContainerId = "previewContainer-" + useId();
    const textareaId = "textarea-" + useId();

    const placeholderText = (placeholder) ? placeholder : "Hier kommt dein toller Text hin";

    const toggleEditorView = () => {
        const previewContainer = document.getElementById(previewContainerId);
        const textarea = document.getElementById(textareaId);

        textarea.classList.remove(styles.hidden);
        previewContainer.classList.add(styles.hidden);
    }

    const togglePreviewView = async () => {
        const previewContainer = document.getElementById(previewContainerId);
        const textarea = document.getElementById(textareaId);

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

        textarea.classList.add(styles.hidden);
        previewContainer.classList.remove(styles.hidden);
    }

    const handleChange = () => {
        const textarea = document.getElementById(textareaId);
        autoResizeTextarea(textarea);
    }

    return <div className={styles.editorContainer}>
        <div className={styles.editorHeader}>
            <span className={styles.editorTitle}>{(editorTitle) ? editorTitle : "Mini Editor"}</span>
            <div className={styles.viewButtonsContainer}>
                <button className={styles.viewButton} onClick={toggleEditorView}>Editor</button>
                <span className={styles.viewButtonsSeparator}>•</span>
                <button className={styles.viewButton} onClick={togglePreviewView}>Preview</button>
            </div>
        </div>
        <textarea onChange={handleChange} className={styles.actualEditorArea} id={textareaId} placeholder={placeholderText} rows={(minRows) ? minRows : 1}>

        </textarea>
        <div className={[styles.previewContainer, styles.hidden].join(" ")} id={previewContainerId}>
            Hier kommt dein toller Text hin
        </div>
    </div>;
}