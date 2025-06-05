import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';
import { createAccount } from '../../api/accountApi';

const AccountForm = () => {
  const [formData, setFormData] = useState({
    accountName: '',
    accountEmail: '',
    zeny: 0,
    bcc: ''
  });
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAccount(formData);
      setNotification({
        message: 'Account created successfully!',
        severity: 'success'
      });
      setTimeout(() => navigate('/accounts'), 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Error creating account');
      setNotification({
        message: error || 'Error creating account',
        severity: 'error'
      });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Create New Account
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Account Name"
            name="accountName"
            value={formData.accountName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Email"
            name="accountEmail"
            type="email"
            value={formData.accountEmail}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Zeny"
            name="zeny"
            type="number"
            value={formData.zeny}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="BCC"
            name="bcc"
            value={formData.bcc}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
      {notification && (
        <Notification
          message={notification.message}
          severity={notification.severity}
          onClose={() => setNotification(null)}
        />
      )}
    </Box>
  );
};

export default AccountForm;