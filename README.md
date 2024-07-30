![Thumbnail Studio DEV (13)](https://github.com/user-attachments/assets/35e433b0-d660-4c39-96f6-5079fd18c3d4)

# Magic Social AI🪄

Magic Social AI est une application web innovante qui utilise l'intelligence artificielle Gemini pour générer du contenu pour diverses plateformes de médias sociaux.
Cette application est disponible en Anglais et Français.

## 🌟 Fonctionnalités

- Génération de descriptions pour vidéos YouTube
- Création d'idées de vidéos YouTube
- Suggestion de hashtags pour Instagram
- Suggestion de hashtags pour TikTok
- Rédaction de posts LinkedIn
- Création de tweets

## 🛠 Technologies utilisées

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Prisma (postgresql)
- NextAuth.js
- Stripe (pour les paiements)
- Gemini AI (pour la génération de contenu)
- Clerk (authentification)
- Next-Intl
- Zustand

## 🌟 Fonctionnalités

- **Génération de contenu IA** : Utilise Gemini AI pour créer du contenu adapté à différentes plateformes sociales.
- **Historique des requêtes** : Les utilisateurs peuvent consulter l'historique de leurs demandes précédentes.
- **Système de crédits** : Les utilisateurs peuvent acheter des crédits via Stripe pour utiliser les fonctionnalités de l'application.
- **Authentification** : Utilise Clerk pour la gestion des utilisateurs et l'authentification.

## 🚀 Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/oliver-gomes/magic-social-ai.git
cd magic-social-ai
```

2. Ibstallez les dépendances :

```bash
pnpm/yarn/npm install
```

3. Configurez les variables d'environnement :
   Créez un fichier .env à la racine du projet et ajoutez les variables nécessaires (voir .env.example pour la liste complète).

4. Initialisez la base de données :

```bash
npx prisma generate
npx prisma db push
```

5. Lancez le serveur de développement :

```bash
npm/yarn/pnpm run dev
```

## 🔑 Configuration des Variables d'Environnement

Assurez-vous de configurer les variables d'environnement suivantes dans votre fichier `.env` :

```js
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
GEMINI_API_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

## 📁 Structure du Projet

`/app`: Composants et pages de l'application Next.js
`/components`: Composants React réutilisables
`/lib`: Utilitaires, hooks, et configurations
`/public`: Fichiers statiques
`/prisma`: Schéma et configurations Prisma
`/stores`: Store Zustand
`/messages`: Traduction en/fr pour next-intl
