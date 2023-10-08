import styles from "@/pages/comments.module.css";
import Comment from "@/components/comment";

export default function Comments() {
    const answers = [
        {
            creator: "anlinn",
            body: "Convallis augue vivamus adipiscing tempus tristique. Tempor malesuada mi in condimentum in sit amet facilisis in.",
            timePosted: "20:00",
            answers: [
                {
                    creator: "anlinn",
                    body: "Convallis augue vivamus adipiscing tempus tristique. Tempor malesuada mi in condimentum in sit amet facilisis in.",
                    timePosted: "20:00",
                    answers: []
                }
            ]
        },
        {
            creator: "anlinn",
            body: "Convallis augue vivamus adipiscing tempus tristique. Tempor malesuada mi in condimentum in sit amet facilisis in.",
            timePosted: "20:00",
            answers: [
                {
                    creator: "anlinn",
                    body: "Convallis augue vivamus adipiscing tempus tristique. Tempor malesuada mi in condimentum in sit amet facilisis in.",
                    timePosted: "20:00",
                    answers: []
                }
            ]
        }
    ];

    return <div className={styles.container}>
        <Comment creator={"derdu"} timePosted={"19:20"} answers={answers}>
            {
                "Felis at faucibus condimentum lorem id neque viverra. Lorem tellus dictumst proin eu ante eget. \n$$\n\\int_a^b f(x) \\: ds = F(b) - F(a)\n$$\n Curabitur pharetra pretium vel morbi ut ultrices dictum pellentesque. Enim ultrices id interdum tellus ac. At eget potenti quis nascetur amet tristique ornare euismod."
            }
        </Comment>
        <Comment creator={"derdu"} timePosted={"19:20"} answers={answers}>
            {
                "Geht auch fit, wenn es ein wenig kürzer ist. Dann müsste man einfach nur $A^{-1}$ bilden und der Bumms hätte sich gegessen."
            }
        </Comment>
    </div>
}