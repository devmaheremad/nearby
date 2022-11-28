import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";
import { memo } from "react";
import { ListTypesProps } from "../@types/list.types";
import ListCard from "./ListCard";

const List = ({
  isLodaing,
  type,
  setType,
  rating,
  setRating,
}: ListTypesProps) => {
  const typeSelect = ["restaurants", "hotels", "attractions"];

  const types = typeSelect.map((type, i) => {
    return (
      <MenuItem key={i} value={type}>
        {type.charAt(0).toUpperCase()}
        {type.slice(1)}
      </MenuItem>
    );
  });

  const handleChangeType = (e: SelectChangeEvent): void =>
    setType(e.target.value as string);
  const handleChangeRating = (e: SelectChangeEvent): void =>
    setRating(e.target.value as string);

  return (
    <Box height={"100%"}>
      <Typography variant="h5" color="black" mb={5}>
        Restaurants, Hotels & Attractions around you...
      </Typography>
      <Stack
        flexWrap={"wrap"}
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
        mb={3}
      >
        <FormControl
          variant="standard"
          sx={{
            minWidth: "110px",
            maxWidth: "250px",
            mb: { xs: 4, md: 0 },
          }}
        >
          <InputLabel>Type</InputLabel>
          <Select
            size="medium"
            value={type}
            label="Type"
            onChange={handleChangeType}
          >
            {types}
          </Select>
        </FormControl>
        <FormControl
          variant="standard"
          sx={{ minWidth: "110px", maxWidth: "250px" }}
        >
          <InputLabel>Rating</InputLabel>
          <Select
            size="medium"
            value={rating}
            label="Rating"
            onChange={handleChangeRating}
          >
            <MenuItem value="0">All</MenuItem>
            <MenuItem value="3">Above 3</MenuItem>
            <MenuItem value="4">Above 4</MenuItem>
            <MenuItem value="4.5">Above 4.5</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      {isLodaing ? (
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          height={"100%"}
          bgcolor="#00000008"
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box
            height={{ xs: "800px", md: "69vh" }}
            sx={{ overflowY: "scroll" }}
          >
            <ListCard />
          </Box>
        </>
      )}
    </Box>
  );
};

export default memo(List);
