package com.example.java.repository;

import com.example.java.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Usuario,Long> {
}
