# AVALIAÇÃO JAAR CONSULT
	Repositorio para construção de de avaliação para a empresa Jaar Consult

# COMO RODAR AS APLICAÇÕES
	-Ao entrar na pasta do projeto .Net "AdmVehicle.Api" rodar os comandos de Migrations abaixo e após rodar o projeto com o Visual Studio
	    	Update-Database -Verbose
	-Ao entrar na pasta do projeto angular "AdmVehicle.Web" rodar os comandos
         	npm i
		ng serve --open
  
# TECNOLOGIAS E FRAMEWORKS USADOS
	- Angular versão 16
	- .Net Framework 7.0.9
 	- Bootstrap versão 5.3.1
	
# POSSÍVEIS EVOLUÇÕES
	- A principio foi construido um monolito, mas no decorrer da evolução do projeto podemos separar melhor as responsabilidades através da implantação de uma Arquitetura limpa (Clean Architecture)
 	divida em varios projetos que tratem separadamente o Banco de dados, Injeção de dependência, API, etc;
  	- Pode-se colocar Fluent Validation para validarmos as entradas de Requisição
   	- Podemos customizar os retornos de forma a devolver status codes mais bem elaborados
    	- Podemos usar Serilog para registrar os Logs de forma customizada e bem flexivel o que permitiria salvar estes em bancos de dados e disponibilizar para utilização em alicações como ElasticSearch, Kibana, etc
    
# CONSIDERAÇÕES
	- Foi optado por usar inglês na construção do software no inicio mas depois mudei e decidi usar português mesmo devido a API https://brasilapi.com.br usar português
