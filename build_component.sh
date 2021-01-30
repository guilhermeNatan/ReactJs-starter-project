#!/bin/bash


# @author guilherme.natan
#Script usado para criar componentes respeitando a estrutura de diretorios do projeto


echo -n "Entre com o nome do modulo que o pertencerá <ex Settings>: "
read screenname
echo -n "Entre com o nome do componente <ex Header>: "
read name

mkdir  src/pages/$screenname/components/$name
sed -e "s/TemplateScreen/${name}/g" -e 's/Component/PureComponent/g' src/TemplateModule/TemplateScreen.js >  src/pages/$screenname/components/$name/$name.js
sed "s/TemplateScreen/${name}/g" src/TemplateModule/index.js >  src/pages/$screenname/components/$name/index.js

cp src/TemplateModule/style.js   src/pages/$screenname/components/$name





