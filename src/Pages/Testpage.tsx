import React from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@mui/material';

function Testpage() {
  const [fareType, setFareType] = React.useState('ICカード優先');
  const [seatType, setSeatType] = React.useState('自由席優先');
  const [travelSpeed, setTravelSpeed] = React.useState('少しゆっくり');

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        乗換案内
      </Typography>

      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField label="出発" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="到着" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>運賃</InputLabel>
              <Select
                value={fareType}
                onChange={(e) => setFareType(e.target.value)}
                label="運賃"
              >
                <MenuItem value="ICカード優先">ICカード優先</MenuItem>
                <MenuItem value="現金">現金</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>座席</InputLabel>
              <Select
                value={seatType}
                onChange={(e) => setSeatType(e.target.value)}
                label="座席"
              >
                <MenuItem value="自由席優先">自由席優先</MenuItem>
                <MenuItem value="指定席優先">指定席優先</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>条件</InputLabel>
              <Select
                value={travelSpeed}
                onChange={(e) => setTravelSpeed(e.target.value)}
                label="条件"
              >
                <MenuItem value="少しゆっくり">少しゆっくり</MenuItem>
                <MenuItem value="普通">普通</MenuItem>
                <MenuItem value="早めに">早めに</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <RadioGroup row aria-label="手段" defaultValue="新幹線">
                <FormControlLabel value="空路" control={<Radio />} label="空路" />
                <FormControlLabel value="新幹線" control={<Radio />} label="新幹線" />
                <FormControlLabel value="有料特急" control={<Radio />} label="有料特急" />
                <FormControlLabel value="高速バス" control={<Radio />} label="高速バス" />
                <FormControlLabel value="路線/連絡バス" control={<Radio />} label="路線/連絡バス" />
                <FormControlLabel value="フェリー" control={<Radio />} label="フェリー" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              検索
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Testpage;