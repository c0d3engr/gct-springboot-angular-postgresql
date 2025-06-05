import { Container } from '@mui/material';
import AccountForm from '../components/accounts/AccountForm';
import Layout from '../components/common/Layout';

const AccountCreatePage = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <AccountForm />
      </Container>
    </Layout>
  );
};

export default AccountCreatePage;