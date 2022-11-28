import GoogleMapReact from "google-map-react";
import {
  Box,
  useMediaQuery,
  useTheme,
  Typography,
  Rating,
  Stack,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { Reducers } from "../reducers/reducers";
import { memo, useContext } from "react";
import { Marker } from "@react-google-maps/api";
// import { MapTypesProps } from "../@types/map.types";
// import { PlaceInfo } from "../@types/app.types";

const Map = ({ coordinates, setBounds, setCoordinates }) => {
  const reducers = useContext(Reducers);

  const isUpperSm = useMediaQuery(useTheme().breakpoints.up("sm"));

  return (
    <Box height="100%">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
        defaultCenter={{ lat: 0, lng: 0 }}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        yesIWantToUseGoogleMapApiInternals
        // options={''}
        onChange={(e) => {
          setCoordinates({
            lat: e.center.lat,
            lng: e.center.lng,
          });
          setBounds({
            ne: {
              lat: e.bounds.ne.lat,
              lng: e.bounds.ne.lng,
            },
            sw: {
              lat: e.bounds.sw.lat,
              lng: e.bounds.sw.lng,
            },
          });
        }}
      >
        {reducers?.state?.places?.map((place, i) => {
          const { photo, name, rating, latitude, longitude } = place;
          return (
            <Marker key={i} lat={Number(latitude)} lng={Number(longitude)}>
              {isUpperSm ? (
                name &&
                photo?.images?.large?.url && (
                  <Box
                    boxShadow={5}
                    p={"8px"}
                    width="170px"
                    overflow={"hidden"}
                    borderRadius={"4px"}
                    bgcolor={"white"}
                    sx={{ "&:hover": { position: "absolute", zIndex: "2" } }}
                  >
                    <img
                      src={photo?.images?.small?.url}
                      width="100%"
                      height="150px"
                      alt={name}
                    />
                    <Stack direction={"column"} p="10px">
                      <Typography
                        variant="subtitle1"
                        my="5px"
                        lineHeight="18px"
                        color="black"
                      >
                        {name}
                      </Typography>
                      <Rating
                        name="Rating"
                        size="small"
                        value={Number(rating)}
                        precision={0.5}
                        readOnly
                      />
                    </Stack>
                  </Box>
                )
              ) : (
                <PlaceIcon sx={{ color: "Gray" }} />
              )}
            </Marker>
          );
        })}
      </GoogleMapReact>
    </Box>
  );
};

export default memo(Map);

// const Map = ({ coordinates, setBounds, setCoordinates }: MapTypesProps) => {
//   const reducers = useContext(Reducers);

//   const isUpperSm = useMediaQuery(useTheme().breakpoints.up("sm"));

//   const mapCard = reducers?.state?.places?.map(
//     (place: PlaceInfo, i: number) => {
//       const { photo, name, rating, latitude, longitude } = place;
//       return (
//         <Marker key={i} lat={Number(latitude)} lng={Number(longitude)}>
//           {isUpperSm ? (
//             name &&
// photo?.images?.large?.url && (
//               <Box
//                 boxShadow={5}
//                 p={"8px"}
//                 width="170px"
//                 overflow={"hidden"}
//                 borderRadius={"4px"}
//                 bgcolor={"white"}
//                 sx={{ "&:hover": { position: "absolute", zIndex: "2" } }}
//               >
//                 <img
//                   src={photo?.images?.small?.url || imageDemo}
//                   width="100%"
//                   height="150px"
//                   alt={name}
//                 />
//                 <Stack direction={"column"} p="10px">
//                   <Typography
//                     variant="subtitle1"
//                     my="5px"
//                     lineHeight="18px"
//                     color="black"
//                   >
//                     {name}
//                   </Typography>
//                   <Rating
//                     name="Rating"
//                     size="small"
//                     value={Number(rating)}
//                     precision={0.5}
//                     readOnly
//                   />
//                 </Stack>
//               </Box>
//             )
//           ) : (
//             <PlaceIcon sx={{ color: "Gray" }} />
//           )}
//         </Marker>
//       );
//     }
//   );

//   return (
//     <Box height="100%">
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyDCsheJ0J1ev-3ggNJM61oOf5VL9yg2zN4" }}
//         defaultCenter={{ lat: 0, lng: 0 }}
//         center={coordinates}
//         defaultZoom={14}
//         margin={[50, 50, 50, 50]}
//         // onChildClick={''}
//         // options={''}
//         onChange={(e) => {
//           setCoordinates({
//             lat: e.center.lat,
//             lng: e.center.lng,
//           });
//           setBounds({
//             ne: {
//               lat: e.bounds.ne.lat,
//               lng: e.bounds.ne.lng,
//             },
//             sw: {
//               lat: e.bounds.sw.lat,
//               lng: e.bounds.sw.lng,
//             },
//           });
//         }}
//       >
//         {mapCard}
//       </GoogleMapReact>
//     </Box>
//   );
// };

// export default memo(Map);
