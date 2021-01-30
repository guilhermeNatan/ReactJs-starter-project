#!/bin/bash

# @author guilherme.natan
#Script usado para criar telas respeitando a estrutura de diretorios do projeto


echo -n "Entre com o nome da pagina <ex Settings>: "
read NAME
mkdir  -p src/pages/$NAME/components
sed "s/TemplateScreen/${NAME}Screen/g" src/TemplateModule/TemplateScreen.js >  src/pages/$NAME/${NAME}Screen.js
sed "s/TemplateScreen/${NAME}Screen/g" src/TemplateModule/index.js >  src/pages/$NAME/index.js
cp src/TemplateModule/style.js   src/pages/$NAME
mv  src/pages/$NAME/style.js src/pages/$NAME/${NAME}Styles.js




