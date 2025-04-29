# Utiliser CommonJS avec TypeScript

## 🅰️ Solution A : CommonJS (simple, rapide, rétro-compatible)

Cette solution permet de configurer TypeScript pour utiliser **CommonJS** comme système de modules. Elle est simple à mettre en œuvre, rapide à exécuter, et reste rétro-compatible avec Node.js.

---

## 1. Configuration du `tsconfig.json`

Dans ton fichier `tsconfig.json`, définis les options suivantes :

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "target": "ES6",
    "outDir": "public",
    "rootDir": "src",
    "esModuleInterop": true
  }
}
```

### Explication rapide :

- `module: "CommonJS"` → utilise CommonJS comme système de modules.
- `target: "ES6"` → transpile vers du JavaScript ES6.
- `outDir: "public"` → les fichiers compilés seront générés dans le dossier `dist`.
- `rootDir: "src"` → le dossier source est `src`.
- `esModuleInterop: true` → améliore la compatibilité avec les modules ES.

---

## 2. Exemple d'import TypeScript

Dans tes fichiers `.ts`, tu peux écrire des imports comme suit :

```ts
import { Logger } from "./B";
```

✅ **Node.js ne râlera pas**, car CommonJS accepte les imports sans extension `.js`.

---

## 3. Commandes utiles

- Compiler TypeScript :

  ```bash
  tsc
  ```

- Exécuter le JavaScript compilé avec Node.js :
  ```bash
  node dist/ton-fichier.js
  ```

---
