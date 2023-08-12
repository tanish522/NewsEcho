import React from "react";
import {
    Card,
    CardActions,
    CardActionArea,
    CardMedia,
    CardContent,
    Button,
    Typography,
} from "@mui/material";
import classNames from "classnames";
import useStyles from "./articleCardStyles";

const ArticleCard = ({
    article: { description, publishedAt, title, url, urlToImage, source },
    i,
    activeArticle,
}) => {
    const classes = useStyles();
    return (
        <Card
            className={classNames(
                classes.card,
                activeArticle === i ? classes.activeCard : null
            )}
        >
            <CardActionArea href={url} target="_blank">
                <CardMedia
                    className={classes.media}
                    image={
                        urlToImage ||
                        "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
                    }
                ></CardMedia>
                <div className={classes.details}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h2"
                    >
                        {new Date(publishedAt).toDateString()}
                    </Typography>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h2"
                    >
                        {source.name}
                    </Typography>
                </div>

                <Typography className={classes.title} gutterBottom variant="h5">
                    {title}
                </Typography>
                <CardContent>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                    Learn More
                </Button>
                <Typography variant="h5" color="textSecondary">
                    {i + 1}
                </Typography>
            </CardActions>
        </Card>
    );
};

export default ArticleCard;
