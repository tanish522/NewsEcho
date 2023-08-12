import React from "react";
import { Grid, Grow, Typography } from "@mui/material";
import Card from "./ArticleCard";
import useStyles from "./newsCardStyles";

const infoCards = [
    {
        color: "#00838f",
        title: "Latest News of India",
        text: "Give me the latest news",
    },
    {
        color: "#1565c0",
        title: "News by Categories",
        info: "Business, Entertainment, General, Health, Science, Sports, Technology",
        text: "Give me the latest Technology news",
    },
    {
        color: "#4527a0",
        title: "News by Terms",
        info: "Bitcoin, Economy , Smartphones, Virtual Reality, Donald Trump...",
        text: "What's up with Bitcoin",
    },
    {
        color: "#283593",
        title: "News by Sources",
        info: "CNN, BBC News, Wired , Time, IGN, Buzzfeed, ABC News...",
        text: "Give me the news from CNN",
    },
];

const NewsCards = ({ articles, activeArticle }) => {
    const classes = useStyles();
    console.log("articles ->", articles);
    console.log("articlesActive ->", activeArticle);

    if (!articles.length) {
        return (
            <Grow in>
                <Grid
                    container
                    alignItems={"stretch"}
                    spacing={3}
                    className={classes.container}
                >
                    {infoCards.map((infoCard) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            className={classes.infoCard}
                        >
                            <div
                                className={classes.card}
                                style={{ backgroundColor: infoCard.color }}
                            >
                                <Typography variant="h5">
                                    {infoCard.title}
                                </Typography>
                                {infoCard.info && (
                                    <Typography variant="h6">
                                        <strong>
                                            {infoCard.title.split(" ")[2]}:
                                        </strong>
                                        <br />
                                        {infoCard.info}
                                    </Typography>
                                )}
                                <Typography variant="h6">
                                    Try saying: <br />{" "}
                                    <b>
                                        <i>{infoCard.text}</i>
                                    </b>
                                </Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        );
    } else {
        return (
            <Grow in>
                <Grid
                    container
                    alignItems={"stretch"}
                    spacing={3}
                    className={classes.container}
                >
                    {articles.map((article, i) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            style={{ display: "flex" }}
                        >
                            <Card
                                article={article}
                                activeArticle={activeArticle}
                                i={i}
                            ></Card>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        );
    }
};

export default NewsCards;
