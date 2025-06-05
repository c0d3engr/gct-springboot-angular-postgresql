import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AccountListPage from './pages/AccountListPage';
import AccountCreatePage from './pages/AccountCreatePage';
import AccountDetailPage from './pages/AccountDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accounts" element={<AccountListPage />} />
        <Route path="/accounts/create" element={<AccountCreatePage />} />
        <Route path="/accounts/:id" element={<AccountDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;