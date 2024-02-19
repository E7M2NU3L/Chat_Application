import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ChatBubble, VideoCall, Storage } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <main className='relative mt-12'>
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      > 
        <Link to="/video-call">
          <BottomNavigationAction label="Meeting" icon={<VideoCall />} />
        </Link>       
        
        <Link to="/chat">
          <BottomNavigationAction label="Chat" icon={<ChatBubble />} />
        </Link>
        
        <Link to="/vault">
          <BottomNavigationAction label="Vault" icon={<Storage />} />
        </Link>
        
        </BottomNavigation>
    </Box>
    </main>
  );
}
