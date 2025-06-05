package com.c0d3engr.backend.dao;

import com.c0d3engr.backend.model.Account;
import java.util.List;
import java.util.Optional;

public interface AccountDAO {
    Account save(Account account);
    Optional<Account> findById(Long id);
    List<Account> findAll();
    void deleteById(Long id);
}