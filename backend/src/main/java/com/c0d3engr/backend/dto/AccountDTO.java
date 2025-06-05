package com.c0d3engr.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountDTO {
        private Long accountId;
        private String accountName;
        private String accountEmail;
        private Double zeny;
        private String bcc;
        private LocalDateTime timestamp;
    }
