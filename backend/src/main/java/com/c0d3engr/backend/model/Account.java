package com.c0d3engr.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "account")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long accountId;

    @Column(nullable = false)
    private String accountName;

    @Column(unique = true, nullable = false)
    private String accountEmail;

    private Double zeny;
    private String bcc;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime timestamp;
}