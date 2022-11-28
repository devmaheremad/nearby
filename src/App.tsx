import { CssBaseline, Grid } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { Bounds, Coordinates } from "./@types/app.types";
import { fetchPlacesData } from "./api";
import { Header, List, Map } from "./components";
import { Reducers } from "./reducers/reducers";

const App = () => {
  const [bounds, setBounds] = useState<Bounds>({} as Bounds);
  const [type, setType] = useState<string>("restaurants");
  const [rating, setRating] = useState<string>("0");

  const reducers = useContext(Reducers);

  const [isLodaing, setIsLodaing] = useState(false);

  const [coordinates, setCoordinates] = useState<Coordinates>(
    {} as Coordinates
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setIsLodaing(true);
    if (bounds?.ne) {
      fetchPlacesData(bounds?.ne, bounds?.sw, type).then((data) => {
        reducers?.dispatch({ type: "SET_PLACES", payload: data });
        setIsLodaing(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates, bounds, type]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid
        spacing={2}
        container
        px={{ xs: 3, sx: 4, lg: 5 }}
        pt={{ xs: "180px", md: "115px" }}
        height={{ xs: "auto", md: "100vh" }}
      >
        <Grid item xs={12} md={5} lg={4}>
          <List
            isLodaing={isLodaing}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={7} lg={8} height={{ xs: "750px", md: "100%" }}>
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
