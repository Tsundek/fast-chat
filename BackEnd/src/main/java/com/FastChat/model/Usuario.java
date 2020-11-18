package com.FastChat.model;

import javax.persistence.Entity;

@Entity
public class Usuario extends AbstractEntity{
    private String login;
    private String senha;
    private String perfil;
    private String nome;


    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getPerfil() {
        return perfil;
    }

    public void setPerfil(String perfil) {
        this.perfil = perfil;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
/*  public static List<Usuario> usuarioList;
    static {
        usuarioRepository();
    }

    public Usuario(String nome) {
        this.nome = nome;
    }

    public Usuario(String login, String senha, String perfil, String nome,int id) {
        this(nome);
        this.id=id;
        this.login = login;
        this.senha = senha;
        this.perfil = perfil;

    }

    public Usuario() {


    }

    private static void usuarioRepository(){
        usuarioList = new ArrayList<>(asList(new Usuario("Celso","admin","","Celso",2),
                new Usuario("Reis","admin","","Reis",1)));
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getPerfil() {
        return perfil;
    }

    public void setPerfil(String perfil) {
        this.perfil = perfil;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Usuario usuario = (Usuario) o;
        return login.equals(usuario.login) &&
                senha.equals(usuario.senha);
    }

    @Override
    public int hashCode() {
        return Objects.hash(login, senha);
    }*/
}
