import { Avatar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ToggleLightDarkMode from './components/ToggleLightDarkMode';
import { USER_INFO } from './lib/USER_INFO';
import Banking from './components/Banking';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundImage: `url(${USER_INFO.bgImage})`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          backgroundColor: 'primary.bg',
          maxWidth: '350px',
          minHeight: '80vh',
          borderRadius: '26px',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 1,
          opacity: 0.95,
        }}
      >
        <Avatar
          alt={USER_INFO.name}
          src={USER_INFO.avatar}
          sx={{
            width: '48px',
            height: '48px',
            marginTop: '10px',
            color: 'primary.color',
          }}
        />
        <Box sx={{ position: 'fixed', top: 0, right: 0 }}>
          <ToggleLightDarkMode />
        </Box>
        <Typography variant="p" color="primary.color">
          {USER_INFO.name}
        </Typography>
        <Typography variant="p" color="primary.color" sx={{ fontSize: '14px' }}>
          {USER_INFO.job}
        </Typography>
        <Typography
          variant="p"
          color="primary.color"
          sx={{ fontSize: '14px', textAlign: 'center' }}
        >
          Bạn có thể chọn bất kì ngân hàng điện tử nào bên dưới để chuyển khoản
          cho tôi.
        </Typography>
        <Typography variant="p" color="primary.color" sx={{ fontSize: '14px' }}>
          Tips: Nhấn vào nút để tự động copy.
        </Typography>

        <Box sx={{ width: '90%' }}>
          {USER_INFO.banks.map((bank) => {
            return (
              <Banking
                key={bank.account_number}
                bankName={bank.name}
                accountNumber={bank.account_number}
                accountOwner={bank.account_name}
                icon={bank.icon}
              />
            );
          })}
        </Box>
        <Typography
          variant="p"
          color="primary.color"
          sx={{ fontSize: '10px', marginTop: 10, color: 'grey' }}
        >
          Made by TRUONG NGUYEN ANH KHOA a.k.a damocloids | v1.0.0
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
