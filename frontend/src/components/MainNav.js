import React, { useState, useEffect } from 'react';
import { makeStyles } from "@mui/styles";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 100,
    backgroundColor: "#2d313a !important",
    
  },
});

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/series");
    } else if (value === 3) {
      navigate("/search");
    }
  }, [value, navigate]);

  return (
    <Box sx={{ width: 500}}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction  label="Trending"  style={{ color: "white" }} color={'white'} icon={<WhatshotIcon />} />
        <BottomNavigationAction  label="Movies" style={{ color: "white" }} icon={<MovieIcon />} />
        <BottomNavigationAction  label="Series" style={{ color: "white" }} icon={<ConnectedTvIcon />} />
        <BottomNavigationAction  label="Search" style={{ color: "white" }} icon={<SearchIcon />} />
        
      </BottomNavigation>
    </Box>
  );
}
