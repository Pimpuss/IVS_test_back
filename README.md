# 💻 Test technique IVS - SERVEUR BACK - APiREST

## 📂 Installation :
Ce projet a été créé avec [Create React App](https://github.com/facebook/create-react-app).<br>

▶ Pour cloner le projet sur votre machine dans votre terminal utilisez la commande ```Git clone``` suivi du lien ```git@github.com:Pimpuss/IVS_test_back.git```

▶ Ensuite utilisez la commande ```npm i``` afin d'installer toutes les dépendances (composants externes utilisés).<br>

Une fois l'installation terminée, votre fichier ```package.json``` doit contenir les dépendances suivantes : <br>

![4](https://user-images.githubusercontent.com/89353029/169547449-9e59f85f-ee34-44ef-b359-4e1ec7775997.png)

▶N'oubliez pas renseignez vos variables d'environement à l'aide du ```.env.sample``` afin d'y renseigner le ```PORT``` que vous souhaitez utiliser, le nom du serveur ```DB_HOST```, le port de la BDD ```DB_PORT``` (3306 le plus souvent sous MySQL), le ```DB_USER``` votre nom d'utilisateur, ```DB_PASSWORD``` votre mot de passe et enfin ```DB_NAME``` le nom de votre base de données.

▶Importez corectement le fichier ```BDD ORGANISATION.sql``` se trouvant dans ce repo dans le dossier ```BDD``` dans votre WorkeBench à l'aide de ```server``` / ```data import``` et sélectionnez votre fichier au préalable téléchargé et faite ```Start Import```.

▶ Enfin utilisez la commande ```npm start```  en ayant bien modifié le ```Script``` dans le ```package.json``` en mettant ```"start": "nodemon server.js"``` pour lancer le projet en local à l'aide de nodemon. Si tout se passe correctement sur l'adresse http://localhost:4242/ (selon vos variables d'environement) vous devez avoir sur votre page web "Tout fonctionne !"
Plus qu'a aller sur les différentes routes /organisations /buildings /pieces pour afficher les informations de l'APi.

Veillez à ce que le serveur Frontend tourne également sur votre machine. Si vous ne l'avez pas déjà fait, [cliquez ici pour accéder au repo Backend](https://github.com/Pimpuss/IVS_test_front) et cloner son contenu sur votre machine.

## 📝 Description :

Création d'un projet permettant sur une page Javascript simple (Utilisation de React) d'afficher sous forme de tableaux des informations récupéré à l'aide d'une API créé des organisations (id,nom) regroupant le nombre total d'employés, les batiments (id, nom, code postal, organisation rattaché) affichant le nombre d'employés présant de ce batiment et enfin les pièces rattachées aux buildings (id, nom, personnes, building rattaché) affichant le nomnre de personnes présentes dans chaque pièces.
Pour ce faire, une base de données sous MSQL ainsi qu'un serveur back tournant sous NodeJs expresse afin de crée l'API renvoyant au front les différentes informations.

J'ai voulu pousser un peu plus les fonctionnalité, de façon à pouvoir ajouter des organisations, des batiments ou même des piéces, de pouvoir les editer à l'aide du petit stylo (le nom uniquement pour les organisation, le nom pour les batiments, son code postale et l'oganisation de rattachement et le nom pour les pièces, sa capacité de personne et le batiment de rattachement). 
Ainsi que la possibilité des supprimer des informations en cliquant sur la petite corbeille mais à être vigilant pour les organisation et les batiments qui sont bien souvent rattaché eux même aux organisations pour les batiments et les pièces pour les buildings.

## 🛠 Technologie utilisée : 

IHM - Front : ReactJs <br>
Base de données : MySQL <br>
APiRest - Serveur back : NodeJS, Express, Cors, Dotenv

# 📸 ScreenShots :
![1](https://user-images.githubusercontent.com/89353029/169547230-1b06b733-9ea9-4096-9088-0e3ef7436920.png)
![2](https://user-images.githubusercontent.com/89353029/169547232-c70abd4e-645c-4587-b69f-e393495fcd0a.png)
![3](https://user-images.githubusercontent.com/89353029/169547237-57544e50-09f9-441a-b859-f9fba0b6d887.png)


