package io.github.jinniloseth.moneyapp.controller;

import org.springframework.web.bind.annotation.*;

import io.github.jinniloseth.moneyapp.model.Transaction;
import io.github.jinniloseth.moneyapp.repository.TransactionRepository;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin(origins = "http://localhost:8100")
public class TransactionController {

    private final TransactionRepository repository;

    public TransactionController(TransactionRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Transaction> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Transaction create(@RequestBody Transaction transaction) {
        return repository.save(transaction);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}