import SmallEditor from "@/components/small-editor";
import Head from "next/head";
import CLink from "@/components/clink";
import SplitEditor from "@/components/split-editor";

export default function Home(){
    return (
        <>
            <Head>
                <title>Testing Components</title>
            </Head>
            <p>Testing Components</p>
            <SmallEditor/>
            <CLink href={"https://www.google.com"} isInner={false}>Das ist ein Link nach draußen</CLink>
            <br/>
            <CLink href={"/"} isInner={true}>Dieser Link bleibt auf dieser Seite</CLink>
            <SplitEditor/>
        </>
    );
}