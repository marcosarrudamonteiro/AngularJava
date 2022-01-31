package com.example.java.controller;


import com.example.java.model.Usuario;
import com.example.java.repository.PessoaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/cadastro")
public class Cadastrar {

    private final PessoaRepository repository;

    @GetMapping
    public List<Usuario> listar() {
        return repository.findAll();
    }


    @PostMapping
    public Usuario cadastrar(@RequestBody Usuario usuario) {
        return repository.save(usuario);
    }
}
