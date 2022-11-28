import {
  Stack,
  Box,
  Typography,
  // Autocomplete, IconButton, InputBase, TextField
} from "@mui/material";
import { memo } from "react";
// import SearchIcon from '@mui/icons-material/Search';

// const top100Films = [
//   { label: 'The Shawshank Redemption', year: 1994 },
//   { label: 'The Godfather', year: 1972 },
//   { label: 'The Godfather: Part II', year: 1974 },
//   { label: 'The Dark Knight', year: 2008 },
//   { label: '12 Angry Men', year: 1957 },
//   { label: "Schindler's List", year: 1993 },
//   { label: 'Pulp Fiction', year: 1994 }]

const Header = () => {
  return (
    <Box
      height={{ xs: "155px", md: "88px" }}
      bgcolor="#404bb0"
      boxShadow={5}
      position="fixed"
      zIndex={10}
      top={0}
      width={"100%"}
    >
      <Stack
        color={"white"}
        direction={{ xs: "column", md: "row" }}
        px={{ xs: 3, sx: 4, lg: 5 }}
        display="flex"
        justifyContent={{ xs: "space-around", md: "space-between" }}
        alignItems={"center"}
        height="100%"
      >
        <Typography variant="h5">Diving Travel</Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          display="flex"
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Typography
            mb={{ xs: 2, md: 0 }}
            variant="body1"
            mr={{ xs: 0, md: 3 }}
          >
            Explore new places
          </Typography>
          {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300, bgcolor: "#5b67bc" }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Google Maps"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Autocomplete> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default memo(Header);
