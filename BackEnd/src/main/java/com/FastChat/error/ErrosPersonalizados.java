package com.FastChat.error;

public class ErrosPersonalizados {
    private String mensagemErro;

    public ErrosPersonalizados(String mensagemErro) {
        this.mensagemErro = mensagemErro;
    }

    public String getMensagemErro() {
        return mensagemErro;
    }
}
