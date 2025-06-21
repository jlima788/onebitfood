
# OneBitFood 🍽️

[![Ruby on Rails](https://img.shields.io/badge/Ruby_on_Rails-5.2-red.svg)](https://rubyonrails.org/)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-13-black.svg)](https://nextjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Projeto inspirado no iFood, com backend em Ruby on Rails e frontend em React, desenvolvido durante uma semana intensiva pelo OneBitCode.

---

## ✨ Funcionalidades

- API RESTful com categorias, restaurantes, produtos e pedidos
- Upload de imagens via Active Storage
- Filtros dinâmicos com Ransack
- Frontend com React, SWR e Recoil
- UI responsiva e moderna

---

## 🧰 Tecnologias

**Backend (Rails)**:
- Ruby 2.5
- Rails 5.2
- SQLite
- Active Storage
- Ransack

**Frontend (React)**:
- React
- SWR
- Recoil
- CSS personalizado

---

## 📁 Estrutura

```
/
├── backend/
│   └── app, config, db, ...
├── frontend/
│   └── pages, components, services, ...
```

---

## ▶️ Como Executar

### Backend (Rails)

```bash
cd onebitfood-api
bundle install
rails db:create db:migrate db:seed
rails s
```

Acesse: `http://localhost:3000`

### Frontend (React)

```bash
cd onebitfood-client
yarn install
yarn dev
```

Acesse: `http://localhost:3001`

---

## 📡 Exemplos de Uso da API

### Listar categorias

```http
GET /categories
```

**Resposta:**
```json
[
  {
    "id": 1,
    "title": "Pizza",
    "image_url": "http://localhost:3000/rails/active_storage/blobs/..."
  }
]
```

### Buscar restaurantes por categoria

```http
GET /restaurants?category=Pizza
```

### Criar pedido

```http
POST /orders
Content-Type: application/json

{
  "restaurant_id": 1,
  "products": [
    { "id": 3, "quantity": 2 },
    { "id": 7, "quantity": 1 }
  ],
  "total": 89.90
}
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## 👤 Autor

- [jlima788](https://github.com/jlima788)

---

Este projeto foi desenvolvido com fins educacionais e demonstra os principais conceitos de construção de uma aplicação fullstack moderna.
