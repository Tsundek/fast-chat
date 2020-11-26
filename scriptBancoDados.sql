use serverbd;

drop table usuario;
create table usuario(
    id bigint unsigned not null unique,
    login varchar(40) not null unique,
    nome varchar(40) not null unique,
    senha varchar(18) not null,
    perfil varchar(18)not null
);


insert into usuario(id,login,nome,senha,perfil) values(1005,"Admin","Celso","admin","Admin");
insert into usuario(id,login,nome,senha,perfil) values(1006,"Asilva","Antonio Silva","admin","Aluno");
insert into usuario(id,login,nome,senha,perfil) values(1007,"Bsilva","Bruno Silva","admin","Aluno");
insert into usuario(id,login,nome,senha,perfil) values(1008,"Acarlos","Antonio Carlos","admin","Aluno");
insert into usuario(id,login,nome,senha,perfil) values(1009,"Cantonio","Carlos Antonio","admin","Aluno");
insert into usuario(id,login,nome,senha,perfil) values(1010,"Fsilva","Fabiana Silva","admin","Aluno");
insert into usuario(id,login,nome,senha,perfil) values(1011,"Psoares","Paulo Soares","admin","Aluno");
insert into usuario(id,login,nome,senha,perfil) values(1012,"Mclara","Maria Clara","admin","Aluno");
insert into usuario(id,login,nome,senha,perfil) values(1013,"Spaula","Silvana de Paula","admin","Aluno");
insert into usuario(id,login,nome,senha,perfil) values(1014,"Ssantos","Silvia Santos","admin","Aluno");

insert into usuario(id,login,nome,senha,perfil) values(1015,"Jpaulo","José Paulo","admin","Diretor");
insert into usuario(id,login,nome,senha,perfil) values(1016,"Msiqueira","Maria Siqueira","admin","Diretor");
insert into usuario(id,login,nome,senha,perfil) values(1017,"Apaula","Ana Paula","admin","Diretor");

insert into usuario(id,login,nome,senha,perfil) values(1018,"Asenna","Ayrton Senna","admin","Instrutor");
insert into usuario(id,login,nome,senha,perfil) values(1019,"Npiquet","Nelson Piquet","admin","Instrutor");
insert into usuario(id,login,nome,senha,perfil) values(1020,"Efittipaldi","Emerson Fittipaldi","admin","Instrutor");
insert into usuario(id,login,nome,senha,perfil) values(1021,"Fmassa","Felipe Massa","admin","Instrutor");
insert into usuario(id,login,nome,senha,perfil) values(1022,"Emunique","Eliana Munique","admin","Instrutor");

insert into usuario(id,login,nome,senha,perfil) values(1023,"Foliveira","Fernanda Oliveira","admin","Atendimento");
insert into usuario(id,login,nome,senha,perfil) values(1024,"Mlima","Maria Lima","admin","Atendimento");
insert into usuario(id,login,nome,senha,perfil) values(1026,"Gsouza","Guilherme Souza","admin","Atendimento");

select * from usuario;

