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

const ArticleCard = ({
    article: { description, publishedAt, title, url, urlToImage, source },
    i,
}) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    image={
                        urlToImage ||
                        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DP5A96VtNaP8&psig=AOvVaw2fPGjhDX92IkDxKceWWqIm&ust=1691848825595000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOD8iZTi1IADFQAAAAAdAAAAABAW"
                    }
                ></CardMedia>
                <div>
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

                <Typography gutterBottom variant="h5">
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
            <CardActions>
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
