package io.github.jinniloseth.moneyapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.jinniloseth.moneyapp.model.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}