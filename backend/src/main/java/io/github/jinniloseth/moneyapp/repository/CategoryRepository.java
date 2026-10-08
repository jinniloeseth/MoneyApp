package io.github.jinniloseth.moneyapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.jinniloseth.moneyapp.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}