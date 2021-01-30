
# Reactjs start 

Um projeto base para criação de projetos react js. 

## Pré requisitos

## Como iniciar projeto 

###Estrutura de diretórios do projeto 

```
    ├── TemplateModule   
    ├── actions #actions 
    ├── layout
    │ ├── colors
    │ └── internal-layout
    │     └── components
    │         ├── Header
    │         ├── MLink
    │         └── Menu
    ├── pages
    │ ├── Login
    │     └── components
    │ └── Pesquisa
    │     └── components
    ├── reducers
    ├── resources
    │ └── css
    ├── router
    │   └── PrivateRoute
    ├── service
    └── theme
```

1. **TemplateModule:** 

    Nesse diretório contêm a estrutura base utilizada pelos scripts para criação de páginas e componentes

1. **actions:** 
    
    Actions utilizada pela aplicação
    
1. **layout:**

    Nesse diretório  é definido a estrutura base para cada layout.  
    
    Aqui um layout é como um padrão de estrutura de estilo que a aplicação deve apresentar dado   um contexto que pode ser por exemplo layout da area de
    gestão, layout acesso público,  layout tela de login ,etc. 
    
    3.1 **internal-layout:**
    
    Estrutura base de layout interno  após autenticação do usuário.
    
1. **pages**

     Telas da aplicação , uma tela deve ser quebrada em vários componetes menores 
     que devem ficar dentro do diretóriio _componets_  localizado dentro de seu diretório.
     Uma tela deve concentrar a lógica de estado de seus componentes internos. 
    
1. **reducers**

    Reducers da aplicação 

1. **resources**

    Recursos como imagens, css styles. 

1. **router** 

    Componte de rotas da aplicação, aquisão registradas as páginas para que possam 
    ser acessadas via rota    exemplo se a página X deve ser acessada pela url 
    localhost:8080/X  ela deve ser registrada nesse componente .
    
1. **service**
    
    Services devem implementar a lógica de acesso aos endpoints. 
    
1. **theme**

    Definições do thema da aplicação  , como cores primárias, tamanho de fontes, etc.   


### Scripts para criação de componentes

* **build_component.sh**

    Cria estrutura base de componente dentro de uma página 

* **build_module.sh**

  Cria estrutura base de página dentro do diretório pages.  
