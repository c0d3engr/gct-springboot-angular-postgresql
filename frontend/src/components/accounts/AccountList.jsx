import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';
import { getAllAccounts, deleteAccount } from '../../api/accountApi';

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const data = await getAllAccounts();
        setAccounts(data);
      } catch (error) {
        setNotification({
          message: 'Error fetching accounts',
          severity: 'error'
        });
      } finally {
        setLoading(false);
      }
    };
    fetchAccounts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteAccount(id);
      setAccounts(accounts.filter(account => account.accountId !== id));
      setNotification({
        message: 'Account deleted successfully',
        severity: 'success'
      });
    } catch (error) {
      setNotification({
        message: 'Error deleting account',
        severity: 'error'
      });
    }
  };

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Account List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Zeny</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map((account) => (
              <TableRow key={account.accountId}>
                <TableCell>{account.accountId}</TableCell>
                <TableCell>{account.accountName}</TableCell>
                <TableCell>{account.accountEmail}</TableCell>
                <TableCell>{account.zeny}</TableCell>
                <TableCell>
                  <Button
                    component={Link}
                    to={`/accounts/${account.accountId}`}
                    size="small"
                    color="primary"
                  >
                    View
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    onClick={() => handleDelete(account.accountId)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {notification && (
        <Notification
          message={notification.message}
          severity={notification.severity}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

export default AccountList;