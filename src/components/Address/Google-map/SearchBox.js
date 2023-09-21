// import React, { useState } from "react";
// import {
//   Button,
//   Divider,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   OutlinedInput,
// } from "@mui/material";
// import "./SearchBox.css";
// import img2 from "../../Images/Placeholder.png";
// import ListItemText from "@mui/material/ListItemText";
// import Autosuggest from "react-autosuggest";
// const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
// const defaultParams = {
//   format: "json",
//   addressdetails: "1",
//   polygon_geojson: "0",
// };

// const SearchBox = ({ selectPosition, setSelectPosition }) => {
//   const [searchText, setSearchText] = useState("");
//   const [listPlace, setListPlace] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);

//   const handleSearch = (value) => {
//     const params = {
//       ...defaultParams,
//       q: value,
//     };
//     const queryString = new URLSearchParams(params).toString();
//     const requestOptions = {
//       method: "GET",
//       redirect: "follow",
//     };
//     fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         setListPlace(result);
//       })
//       .catch((err) => console.log("error :", err));
//   };

//   const getSuggestionValue = (suggestion) => suggestion.display_name;
//   const renderSuggestion = (suggestion) => <div>{suggestion.display_name}</div>;

//   const onSuggestionsFetchRequested = ({ value }) => {
//     handleSearch(value);
//     setSuggestions(listPlace);
//   };

//   const onSuggestionsClearRequested = () => {
//     setSuggestions([]);
//   };

//   const inputProps = {
//     value: searchText,
//     onChange: (_, { newValue }) => setSearchText(newValue),
//   };

//   return (
//     <>
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <div style={{ display: "flex" }}>
//           <div style={{ flex: "1" }}>
//             <Autosuggest
//               suggestions={suggestions}
//               onSuggestionsFetchRequested={onSuggestionsFetchRequested}
//               onSuggestionsClearRequested={onSuggestionsClearRequested}
//               getSuggestionValue={getSuggestionValue}
//               renderSuggestion={renderSuggestion}
//               inputProps={inputProps}
//             />
//           </div>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               // padding: "0px 20px",
//             }}
//           >
//             {/* <Button
//               variant="contained"
//               color="primary"
//               onClick={() => handleSearch(searchText)}
//             >
//               Search
//             </Button> */}
//           </div>
//         </div>
//         <div>
//           <List component="nav" aria-label="main mailbox folders">
//             {listPlace.map((item) => (
//               <div key={item.place_id}>
//                 <ListItemButton
//                   onClick={() => {
//                     setSelectPosition(item);
//                   }}
//                 >
//                   <ListItemIcon>
//                     <img
//                       src={img2}
//                       alt="placeHolder"
//                       style={{ width: "28px", height: "28px" }}
//                     />
//                   </ListItemIcon>
//                   <ListItemText primary={item.display_name} />
//                 </ListItemButton>
//                 <Divider />
//               </div>
//             ))}
//           </List>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SearchBox;

// yahan nechay many autoSuggest k liya kiya howa ha/////

import React, { useState } from "react";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  OutlinedInput,
} from "@mui/material";
import "./SearchBox.css";
import img2 from "../../Images/Placeholder.png";
import ListItemText from "@mui/material/ListItemText";
import Autosuggest from "react-autosuggest";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const defaultParams = {
  format: "json",
  addressdetails: "1",
  polygon_geojson: "0",
};

const SearchBox = ({ selectPosition, setSelectPosition }) => {
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (value) => {
    const params = {
      ...defaultParams,
      q: value,
    };
    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setListPlace(result);
        setSuggestions(result.map((item) => item.display_name));
      })
      .catch((err) => console.log("error :", err));
  };

  const getSuggestionValue = (suggestion) => suggestion;
  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  const onSuggestionsFetchRequested = ({ value }) => {
    handleSearch(value);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (_, { suggestion }) => {
    setSearchText(suggestion);
    const selectedSuggestion = listPlace.find(
      (item) => item.display_name === suggestion
    );
    setSelectPosition(selectedSuggestion);
  };

  const inputProps = {
    value: searchText,
    onChange: (_, { newValue }) => setSearchText(newValue),
    onKeyDown: (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        setSelectPosition(listPlace[0]);
      }
    },
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "1" }}>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              onSuggestionSelected={onSuggestionSelected}
              inputProps={inputProps}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <Button
              variant="contained"
              color="primary"
              onClick={() => handleSearch(searchText)}
            >
              Search
            </Button> */}
          </div>
        </div>
        <div>
          <List component="nav" aria-label="main mailbox folders">
            {listPlace.map((item) => (
              <div key={item.place_id}>
                <ListItemButton
                  onClick={() => {
                    onSuggestionSelected(null, {
                      suggestion: item.display_name,
                    });
                  }}
                >
                  <ListItemIcon>
                    <img
                      src={img2}
                      alt="placeHolder"
                      style={{ width: "28px", height: "28px" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item.display_name} />
                </ListItemButton>
                <Divider />
              </div>
            ))}
          </List>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
