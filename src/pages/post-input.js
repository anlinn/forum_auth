import SmallEditor from "@/components/small-editor";
import CLink from "@/components/clink";

import styles from "./post-input.module.css";

export default function PostInput() {
    return <div className={styles.container}>
        <p><b>Neuer Post</b></p>
        <p>Der Titel und Body folgt der <CLink href={"/"}>Markdown-Notation</CLink> mit der typischen Ergänzung für mathematische Ausdrücke: <code>$...$</code> für ein Inline-Statement und <code>$$...$$</code> für ein zentriertes Statement. Siehe auch <CLink href={"/"}>Beispiele</CLink>. </p>
        <p><b>Titel</b></p>
        <SmallEditor editorTitle={"Titel Text"} placeholder={"Formuliere eine geniale Frage"} minRows={2}/>
        <p><b>Body</b></p>
        <SmallEditor editorTitle={"Body Text"} placeholder={"Hier gehst du dann genauer auf deine Frage ein"} minRows={10}/>
    </div>
}