# Angular_Curso_MB
iniciando estudo do angular framework

# TECNOLOGIAS UTILIZADAS
-HTML
-CSS
-JS
-TS
-ANGULAR JS


# iniciando o angular
1°-  instalar o angular cli : abre o terminal e roda " npm install -g @angular/cli"
2°- criar o projeto : " ng new 'nome do projeto' --no-standalone "
3°- executar o projeto : cd nomedorojeto ng serve --open
4° criando componentes : ng generate component components/first-cp

aula 05 :
interpolaão de dados é um recurso a trabalhar com componentes;
variáveis nos.ts 
classes
.html template 
impressão {{dado}}

aula 07:
compartilhando dados entre componente pai e componente filho
chama o componente [dado]
no codigo .ts do filho usa o decorator @input


aula 08:
DIRETIVAS:
começa sempre com ng ==> 'ngAlgumaCoisa';
[ngStyle]="{'font-family': '20px'}"
essa diretiva permite adicionar css inline no componente.html
ou inicializa no componente.ts e chama no html

[ngClass]="classes" 
cria classes na tag html, para isso inicialize no componente.ts e chame no html.

aula 09:
renderização condicional
diretiva ngif;

aula 10:
Eventos
mais utilizado é o click:
(click)="algumaFuncao()"
Os métodos ficam na classe;
dá pra utilizar para acessar API;

aula 11:
comunicar eventos de um componente filho para o pai;
@output faz a saida do evento do componente filho;
na tag de invocação do compoinente no template, escolhemos um método para executar quando o evento for emitido;
exemplo: (emit)="onEmit()"
