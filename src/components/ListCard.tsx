import {
  Paper,
  Stack,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Button,
  Chip,
} from "@mui/material";
import { memo, useContext } from "react";
import { Reducers } from "../reducers/reducers";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import { PlaceInfo } from "../@types/app.types";

const ListCard = () => {
  const reducers = useContext(Reducers);

  const cardForList = reducers?.state?.places.map(
    (place: PlaceInfo, i: number) => {
      const {
        photo,
        address,
        cuisine,
        name,
        num_reviews,
        phone,
        ranking,
        web_url,
        website,
        rating,
        price_level,
      } = place;
      if (+rating > 0 && photo?.images?.large?.url) {
        return (
          <Paper key={i} elevation={2} square sx={{ mb: 0 }}>
            <Card sx={{ minWidth: 345 }}>
              <CardMedia
                component="img"
                height="367"
                image={photo?.images?.large?.url}
                alt={name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" mb={2}>
                  {name}
                </Typography>
                <Stack
                  direction={"row"}
                  justifyContent="space-between"
                  alignItems={"center"}
                  mb={2}
                >
                  <Rating
                    name="Rating"
                    size="small"
                    value={+rating}
                    precision={0.5}
                    readOnly
                  />
                  <Typography variant="caption" color="black">
                    {num_reviews} Reviews
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent="space-between"
                  alignItems={"center"}
                  mb={2}
                >
                  <Typography variant="body1" color="black">
                    Price
                  </Typography>
                  <Typography variant="caption" color="black">
                    {price_level}
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent="space-between"
                  alignItems={"center"}
                  mb={2}
                >
                  <Typography variant="body1" color="black">
                    Ranking
                  </Typography>
                  <Typography variant="caption" color="black">
                    {ranking}
                  </Typography>
                </Stack>
                <Stack direction={"row"} flexWrap="wrap" gap="10px" mb={2}>
                  {cuisine?.map((cuisineName) => {
                    return (
                      <Chip
                        key={cuisineName.name}
                        size="medium"
                        label={cuisineName.name}
                      />
                    );
                  })}
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent="space-between"
                  alignItems={"center"}
                  mb={2}
                >
                  <PlaceIcon sx={{ color: "Gray" }} />
                  <Typography
                    color="gray"
                    variant="caption"
                    textAlign={"end"}
                    lineHeight="15px"
                  >
                    {address}
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent="space-between"
                  alignItems={"center"}
                >
                  <PhoneIcon sx={{ color: "Gray" }} />
                  <Typography
                    color="gray"
                    variant="caption"
                    textAlign={"end"}
                    lineHeight={1}
                  >
                    {phone}
                  </Typography>
                </Stack>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => window.open(web_url, "_blank")}
                >
                  {"Trip Advisor".toUpperCase()}
                </Button>
                <Button
                  size="small"
                  onClick={() => window.open(website, "_blank")}
                >
                  {"Website".toUpperCase()}
                </Button>
              </CardActions>
            </Card>
          </Paper>
        );
      } else {
        // eslint-disable-next-line array-callback-return
        return null;
      }
    }
  );

  return (
    <Stack direction={"column"} spacing={2} width="96%" mx={"auto"} mt={3}>
      {cardForList}
    </Stack>
  );
};

export default memo(ListCard);
