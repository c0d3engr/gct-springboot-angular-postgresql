package com.c0d3engr.backend.mapper;

import com.c0d3engr.backend.dto.AccountDTO;
import com.c0d3engr.backend.model.Account;
import org.springframework.stereotype.Component;

@Component
public class AccountMapper {
    public AccountDTO toDto(Account account) {
        return AccountDTO.builder()
                .accountId(account.getAccountId())
                .accountName(account.getAccountName())
                .accountEmail(account.getAccountEmail())
                .zeny(account.getZeny())
                .bcc(account.getBcc())
                .timestamp(account.getTimestamp())
                .build();
    }

    public Account toEntity(AccountDTO accountDTO) {
        return Account.builder()
                .accountId(accountDTO.getAccountId())
                .accountName(accountDTO.getAccountName())
                .accountEmail(accountDTO.getAccountEmail())
                .zeny(accountDTO.getZeny())
                .bcc(accountDTO.getBcc())
                .timestamp(accountDTO.getTimestamp())
                .build();
    }
}