import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards";
import useStyles from "./styles";
import wordsToNumbers from "word-to-numbers";

const alanKey =
    "df93f55bc17e1ef9552350e4d05d8d112e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if (command === "newHeadlines") {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if (command === "highlight") {
                    setActiveArticle(
                        (prevActiveArticle) => prevActiveArticle + 1
                    );
                } else if (command === "open") {
                    const parsedNumber =
                        number.length > 2 ? wordsToNumbers(number) : number;
                    const article = articles[parsedNumber - 1];
                    window.open(article.url, "_blank");
                }
            },
        });
    }, []);

    return (
        <div>
            <div className={classes.logoContainer}>
                <img
                    src="/newsechoLogo.png"
                    className={classes.logo}
                    alt="NewsEcho logo"
                />
            </div>
            <NewsCards
                articles={newsArticles}
                activeArticle={activeArticle}
            ></NewsCards>
        </div>
    );
};

export default App;
