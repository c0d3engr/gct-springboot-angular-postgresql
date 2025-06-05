package com.c0d3engr.backend.service;

import com.c0d3engr.backend.dao.AccountDAO;
import com.c0d3engr.backend.dto.AccountDTO;
import com.c0d3engr.backend.mapper.AccountMapper;
import com.c0d3engr.backend.model.Account;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AccountService {

    private final AccountDAO accountDAO;
    private final AccountMapper accountMapper;

    public AccountService(AccountDAO accountDAO, AccountMapper accountMapper) {
        this.accountDAO = accountDAO;
        this.accountMapper = accountMapper;
    }

    public AccountDTO createAccount(AccountDTO accountDTO) {
        Account account = accountMapper.toEntity(accountDTO);
        Account savedAccount = accountDAO.save(account);
        return accountMapper.toDto(savedAccount);
    }

    public Optional<AccountDTO> getAccountById(Long id) {
        return accountDAO.findById(id)
                .map(accountMapper::toDto);
    }

    public List<AccountDTO> getAllAccounts() {
        return accountDAO.findAll().stream()
                .map(accountMapper::toDto)
                .collect(Collectors.toList());
    }

    public void deleteAccount(Long id) {
        accountDAO.deleteById(id);
    }
}