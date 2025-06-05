import { Container } from '@mui/material';
import AccountList from '../components/accounts/AccountList';
import Layout from '../components/common/Layout';

const AccountListPage = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <AccountList />
      </Container>
    </Layout>
  );
};

export default AccountListPage;