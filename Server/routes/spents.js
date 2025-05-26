const express = require('express');
const router = express.Router();

let spents = [
    { id: 1, name: 'Supermercado', amount: 50, category: 'Supermercado', subcategory: 'Supermercado', date: '2025-05-14', time: '12:00', description: 'Compras semanales', groupLabel: 'Alimentos', color: "#FFBE0B" },
    { id: 2, name: 'Snack', amount: 10, category: 'Café / Snack', subcategory: 'Snack', date: '2025-05-14', time: '12:30', description: 'Galletitas y jugo', groupLabel: 'Alimentos', color: "#FFBE0B" },
    { id: 3, name: 'Cena', amount: 40, category: 'Restaurante', subcategory: 'Cena', date: '2025-05-14', time: '20:00', description: 'Cena en restaurante', groupLabel: 'Alimentos', color: "#FFBE0B" },
    { id: 4, name: 'Gasolina', amount: 30, category: 'Nafta', subcategory: 'Combustible', date: '2025-05-14', time: '14:00', description: 'Nafta para el auto', groupLabel: 'Transporte', color: "#FB5607" },
    { id: 5, name: 'Alquiler', amount: 500, category: 'Alquiler', subcategory: 'Alquiler', date: '2025-05-09', time: '09:00', description: 'Pago mensual', groupLabel: 'Vivienda', color: "#FF7F50" },
    { id: 6, name: 'Electricidad y Agua', amount: 100, category: 'Luz', subcategory: 'Facturas', date: '2025-04-10', time: '10:00', description: 'Servicios básicos', groupLabel: 'Vivienda', color: "#FF7F50" },
    { id: 7, name: 'Restaurante', amount: 75, category: 'Restaurante', subcategory: 'Cena', date: '2025-03-11', time: '19:00', description: 'Cena con amigos', groupLabel: 'Alimentos', color: "#FFBE0B" },
    { id: 8, name: 'Gimnasio', amount: 40, category: 'Gimnasio', subcategory: 'Membresías', date: '2025-02-13', time: '18:00', description: 'Membresía mensual', groupLabel: 'Salud', color: "#3A86FF" },
    { id: 9, name: 'Internet', amount: 60, category: 'Internet', subcategory: 'Internet', date: '2025-01-15', time: '14:00', description: 'Factura mensual de internet', groupLabel: 'Vivienda', color: "#FF7F50" },
    { id: 10, name: 'Cine', amount: 20, category: 'Cine / Teatro', subcategory: 'Cine', date: '2025-01-16', time: '20:00', description: 'Entradas al cine', groupLabel: 'Entretenimiento', color: "#FF006E" },
    { id: 11, name: 'Ropa', amount: 150, category: 'Ropa', subcategory: 'Indumentaria', date: '2025-01-17', time: '15:00', description: 'Ropa de temporada', groupLabel: 'Compras personales', color: "#D62828" },
    { id: 12, name: 'Libros', amount: 30, category: 'Libros', subcategory: 'Material', date: '2025-01-18', time: '11:00', description: 'Libros del semestre', groupLabel: 'Educación', color: "#8338EC" },
    { id: 13, name: 'Libros', amount: 30, category: 'Libros', subcategory: 'Material', date: '2024-11-02', time: '11:00', description: 'Libros del semestre', groupLabel: 'Educación', color: "#8338EC" },
];



router.get('/', (req, res) => {
    try {
        res.status(200).json(spents);
    } catch {
        res.status(500).send("Error interno del servidor");
    }
});

router.post('/', (req, res) => {
    const { name, amount, category, color, groupLabel, date, time, description } = req.body;

    if (!name || !amount || !category || !date || !time) {
        return res.status(400).send("Faltan campos obligatorios");
    }

    try {
        const newSpent = {
            id: spents.length + 1,
            name,
            amount,
            category,
            color,
            groupLabel,
            date,
            time,
            description
        };
        spents.push(newSpent);
        res.status(201).json(newSpent);
    } catch {
        res.status(400).send("Error al agregar el gasto");
    }

});

module.exports = router;