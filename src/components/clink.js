import Link from "next/link";
import styles from "./clink.module.css"
import {usePathname} from "next/navigation";
import {classes} from "@/utils/class-functions";

export default function CLink({ href, children, isInner }) {
    if(isInner){
        return <Link href={href} className={classes(styles.innerLink, styles.link)} >{ children }</Link>
    } else {
        return <Link href={href} className={classes(styles.outwardLink, styles.link)} target={"_blank"} rel={"noopener noreferrer"}>{ children }</Link>;
    }
}