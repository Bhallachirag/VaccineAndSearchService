# Vaccine & Search Service — VaxFlow

Owns the vaccine catalog and inventory for VaxFlow — the source of truth for what vaccines exist, how many doses are in stock, and which batches are about to expire.

## What it does

- **Vaccine catalog** — create, update, delete, and look up vaccines (name, manufacturer, price, etc).
- **Inventory management** — every vaccine can have multiple inventory batches (different stock lots with their own quantity and expiry date), so the same vaccine can have several batches in circulation at once.
- **Combined vaccine + inventory views** — `/vaccine/:id/inventories` and `/vaccines-with-inventory` return a vaccine joined with its live stock, which is what the Booking service and frontend actually need to render availability.
- **Stock operations** — `PATCH /vaccine/:id/inventories/add` adds new stock batches (e.g. a fresh shipment) without disturbing existing batches, which is what lets the Booking service later apply FIFO-by-expiry costing across them.

## API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/api/v1/vaccine` | List all vaccines |
| POST | `/api/v1/vaccine` | Create a vaccine |
| GET | `/api/v1/vaccine/:id` | Get a single vaccine |
| PATCH | `/api/v1/vaccine/:id` | Update a vaccine |
| DELETE | `/api/v1/vaccine/:id` | Delete a vaccine |
| GET | `/api/v1/vaccine/:id/inventories` | Get all inventory batches for a vaccine |
| PATCH | `/api/v1/vaccine/:id/inventories` | Update inventory for a vaccine |
| PATCH | `/api/v1/vaccine/:id/inventories/add` | Add a new inventory batch |
| GET | `/api/v1/vaccines-with-inventory` | Vaccines joined with their inventory |
| GET | `/api/v1/inventories` | List all inventory batches |
| GET | `/api/v1/inventory/:id` | Get a single inventory batch |
| PUT | `/api/v1/inventory/:id` | Update an inventory batch |
| DELETE | `/api/v1/inventory/:id` | Delete an inventory batch |

## Tech Stack

Node.js · Express 5 · Sequelize · MySQL

## Getting Started

```bash
npm install
npx sequelize-cli db:migrate
npm start
```

### Environment variables

```env
PORT=4000
NODE_ENV=development
DB_USERNAME=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_HOST=127.0.0.1
DB_NAME_DEVELOPMENT=vaxflow_vaccine_dev
DB_NAME_PRODUCTION=vaxflow_vaccine
SYNC_DB=true
FRONT_END_LINK=http://localhost:5173
```

## Part of the VaxFlow microservices

- [Frontend](https://github.com/Bhallachirag/FinalFrontend)
- [API Gateway](https://github.com/Bhallachirag/API_Gateway)
- [Auth Service](https://github.com/Bhallachirag/Auth_Service)
- **Vaccine & Search Service** (this repo)
- [Booking Service](https://github.com/Bhallachirag/VaccineBookingService)
- [Reminder Service](https://github.com/Bhallachirag/ReminderService)

### Author
-Chirag Bhalla
