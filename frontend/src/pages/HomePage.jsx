import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Layout from '../components/common/Layout';

const HomePage = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          Welcome to Account Management System
        </Typography>
        <Button
          component={Link}
          to="/accounts"
          variant="contained"
          size="large"
          sx={{ mt: 3 }}
        >
          View Accounts
        </Button>
      </Container>
    </Layout>
  );
};

export default HomePage;