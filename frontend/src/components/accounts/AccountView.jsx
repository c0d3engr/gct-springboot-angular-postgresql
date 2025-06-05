import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Paper, Box, Button } from '@mui/material';
import { getAccount } from '../../api/accountApi';

const AccountView = () => {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const data = await getAccount(id);
        setAccount(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAccount();
  }, [id]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!account) return <Typography>Account not found</Typography>;

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Account Details
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1">ID: {account.accountId}</Typography>
        <Typography variant="subtitle1">Name: {account.accountName}</Typography>
        <Typography variant="subtitle1">Email: {account.accountEmail}</Typography>
        <Typography variant="subtitle1">Zeny: {account.zeny}</Typography>
        <Typography variant="subtitle1">BCC: {account.bcc}</Typography>
        <Typography variant="subtitle1">
          Created: {new Date(account.timestamp).toLocaleString()}
        </Typography>
      </Box>
      <Button component={Link} to="/accounts" variant="contained">
        Back to List
      </Button>
    </Paper>
  );
};

export default AccountView;