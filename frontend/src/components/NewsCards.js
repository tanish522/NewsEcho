import React from "react";
import { Grid, Grow, Typography } from "@mui/material";
import Card from "./ArticleCard";
import useStyles from "./newsCardStyles";

const NewsCards = ({ articles }) => {
    const classes = useStyles();

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
                        <Card article={article} i={i}></Card>
                    </Grid>
                ))}
            </Grid>
        </Grow>
    );
};

export default NewsCards;
