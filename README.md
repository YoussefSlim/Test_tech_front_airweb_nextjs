# Airweb - Test Technique développeur front-end

Bonjour !

Voici un petit test afin de juger vos capacités et compétences techniques *(mais pas que)*.

## Le Contexte

Vous avez ci-joint une API basique. Celle-ci expose deux endpoints, une liste de catégories et une liste de produits.

Votre mission sera de développer l'interface d'une boutique simple (comportant une page _catalogue_ et une page _panier_) basé sur les wireframes suivants : [https://www.figma.com/file/GB7FZWWMPTg57UxpfogUDc/Maquette-boutique?node-id=0%3A1](https://www.figma.com/file/GB7FZWWMPTg57UxpfogUDc/Maquette-boutique?node-id=0%3A1)

Le passage de commandes et le checkout ne sont pas des fonctionnalités attendues, mais une interface fictive serait appréciable.

Vous êtes libre d'utiliser les technologies, frameworks et librairies de votre choix.

Le résultat devra être rendu sous la forme d'un lien vers un repository Git, avec les instructions pour lancer le projet en local.

## Instructions pour lancer l'API

L'API fictive se trouve dans le dossier [server](./server).

Pour lancer l'API vous avez deux options :

- Utiliser Docker

```bash
$ cd server
$ docker build --tag=api
$ docker run api -p 3000:3000
```

- Lancer l'API manuellement

```bash
$ cd server
$ npm install
$ npm start
```

L'API devrait ensuite être disponible à l'adresse : [localhost:3000](http://localhost:3000)

## Interfaces

### `Product`

```ts
interface Product {
  // Identifiant unique du produit
  id: string;
  // Nom du produit à afficher
  label: string;
  // Description du produit
  description: string;
  // Prix en centimes (integer)
  price: number;
  // Identifiant de la catégorie parente
  category_id: string;
  // URL vers l'image miniature
  thumbnail_url: string | null;
}
```

### `Category`

```ts
interface Category {
  // Identifiant unique du produit
  id: string;
  // Index de la catégorie dans la boutique
  index: number;
  // Nom du produit à afficher
  label: string;
  // Description du produit
  description: string;
}
```

## Documentation de l'API

### `[GET] /categories`

Retourne la liste complète des categories

- return: `Category[]`

### `[GET] /categories/:id`

Retourne le détail d'une catégorie

- return: `Category`

### `[GET] /products`

Retourne la liste complète des produits

- return: `Product[]`

### `[GET] /products/:id`

Retourne le détail d'un produit

- return: `Product`

## Extras

Toute fonctionnalité supplémentaire sera bienvenue, par exemple :

- **Internationalisation**
- **Filtres** et recherche
- ...

Ce test devrait représenter environ 2h à 4h de travail. Pas de panique si c'est trop ou si vous êtes bloqués, on débriefera ensemble.

Bon courage !
## Documentation `client`

```bash
$ cd client
$ yarn
$ yarn dev
```

## Démarrer le `Projet`

- `yarn setup` : Initialisation du frontend et du backend, ainsi que de tous les outils
- `yarn dev` : Démarre les deux serveurs (client + server) dans un seul terminal

## Tools
- _Concurrently_ : Permet à plusieurs commandes de s'exécuter simultanément dans la même CLI