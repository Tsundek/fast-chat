package com.FastChat.Repository;

import com.FastChat.model.Usuario;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UsuarioRepository extends CrudRepository<Usuario,Long> {
    List<Usuario> findByNomeIgnoreCaseContaining(String nome);
    List<Usuario> findByLogin(String login);


}
