import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
    "df93f55bc17e1ef9552350e4d05d8d112e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if (command === "newHeadlines") {
                    console.log(articles);
                }
            },
        });
    }, []);

    return (
        <div>
            <h1>AI news application</h1>
        </div>
    );
};

export default App;
