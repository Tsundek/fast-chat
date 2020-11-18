package com.FastChat.endpoint;

import com.FastChat.Repository.UsuarioRepository;
import com.FastChat.error.ErrosPersonalizados;
import com.FastChat.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("usuarios")
public class UsuarioEndpoint {
    private final UsuarioRepository usuarioDao;

    @Autowired
    public UsuarioEndpoint(UsuarioRepository usuarioDao) {
        this.usuarioDao = usuarioDao;
    }

    //@RequestMapping(method = RequestMethod.GET)
    @GetMapping
    public ResponseEntity<?> listAll() {
        return new ResponseEntity<>(usuarioDao.findAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<?> getUsuarioById(@PathVariable("id") Long id) {
        Usuario usuario = usuarioDao.findById(id).get();
        if (usuario == null) {
            return new ResponseEntity<>(new ErrosPersonalizados("Usuario não existe"), HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(usuario, HttpStatus.OK);
        }
    }

    @GetMapping(path = "/login/{login}")
    public ResponseEntity<?> getUsuarioByLogin(@PathVariable("login") String login) {
        List<Usuario> usuario = usuarioDao.findByLogin(login);
        if (usuario == null) {
            return new ResponseEntity<>(new ErrosPersonalizados("Usuario não existe"), HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(usuario, HttpStatus.OK);
        }
    }

    //@RequestMapping(method = RequestMethod.POST)
    @PostMapping
    public ResponseEntity<?> save(@RequestBody Usuario usuario) {

        return new ResponseEntity<>(usuarioDao.save(usuario), HttpStatus.OK);
    }

    //@RequestMapping(method = RequestMethod.DELETE)
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Usuario usuario = usuarioDao.findById(id).get();
        usuarioDao.delete(usuario);
        return new ResponseEntity<>(HttpStatus.OK);
    }



}
