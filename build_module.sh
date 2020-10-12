#!/bin/bash

# @author guilherme.natan
#Script usado para criar telas respeitando a estrutura de diretorios do projeto


echo -n "Entre com o nome do modulo <ex Settings>: "
read NAME
mkdir  -p src/layout/pages/$NAME/components
sed "s/TemplateScreen/${NAME}Screen/g" src/TemplateModule/TemplateScreen.js >  src/layout/pages/$NAME/${NAME}Screen.js
sed "s/TemplateScreen/${NAME}Screen/g" src/TemplateModule/index.js >  src/layout/pages/$NAME/index.js
cp src/TemplateModule/style.js   src/layout/pages/$NAME
mv  src/layout/pages/$NAME/style.js src/layout/pages/$NAME/${NAME}Styles.js




