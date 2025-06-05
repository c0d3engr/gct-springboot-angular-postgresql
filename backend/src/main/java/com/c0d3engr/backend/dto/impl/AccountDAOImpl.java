package com.c0d3engr.backend.dto.impl;

import com.c0d3engr.backend.dao.AccountDAO;
import com.c0d3engr.backend.model.Account;
import com.c0d3engr.backend.repository.AccountRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class AccountDAOImpl implements AccountDAO {

    private final AccountRepository accountRepository;

    public AccountDAOImpl(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Override
    public Account save(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public Optional<Account> findById(Long id) {
        return accountRepository.findById(id);
    }

    @Override
    public List<Account> findAll() {
        return accountRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        accountRepository.deleteById(id);
    }
}