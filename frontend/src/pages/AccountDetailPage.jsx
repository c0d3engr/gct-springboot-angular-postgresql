import { Container } from '@mui/material';
import AccountView from '../components/accounts/AccountView';
import Layout from '../components/common/Layout';

const AccountDetailPage = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <AccountView />
      </Container>
    </Layout>
  );
};

export default AccountDetailPage;