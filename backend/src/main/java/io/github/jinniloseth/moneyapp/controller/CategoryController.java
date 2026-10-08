package io.github.jinniloseth.moneyapp.controller;

import org.springframework.web.bind.annotation.*;

import io.github.jinniloseth.moneyapp.model.Category;
import io.github.jinniloseth.moneyapp.repository.CategoryRepository;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "http://localhost:8100")
public class CategoryController {

    private final CategoryRepository repository;

    public CategoryController(CategoryRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Category> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Category create(@RequestBody Category category) {
        return repository.save(category);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}