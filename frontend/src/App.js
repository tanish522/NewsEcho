import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards";

const alanKey =
    "df93f55bc17e1ef9552350e4d05d8d112e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if (command === "newHeadlines") {
                    setNewsArticles(articles);
                }
            },
        });
    }, []);

    return (
        <div>
            <h1>AI news application</h1>
            <NewsCards articles={newsArticles}></NewsCards>
        </div>
    );
};

export default App;
