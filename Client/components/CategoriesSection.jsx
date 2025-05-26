import React, { useState } from "react";
import Select from "react-select";

const groupColors = {
    "Alimentos": "#FFBE0B",           // Amarillo vibrante
    "Transporte": "#FB5607",          // Naranja intenso
    "Entretenimiento": "#FF006E",     // Rosa neón
    "Educación": "#8338EC",           // Violeta fuerte
    "Salud": "#3A86FF",               // Azul brillante
    "Vivienda": "#FF7F50",            // Coral (complementario cálido)
    "Compras personales": "#D62828",  // Rojo vibrante
    "Mascotas": "#6A4C93",            // Violeta profundo
    "Finanzas": "#2A9D8F",            // Verde azulado
    "Otros": "#8D99AE",               // Gris azulado suave
};


let groupedOptions = [
    {
        label: "Alimentos",
        options: [
            { value: "supermercado", label: "Supermercado", groupLabel: "Alimentos" },
            { value: "comida_rapida", label: "Comida rápida", groupLabel: "Alimentos" },
            { value: "restaurante", label: "Restaurante", groupLabel: "Alimentos" },
            { value: "café_snack", label: "Café / Snack", groupLabel: "Alimentos" },
        ],
    },
    {
        label: "Transporte",
        options: [
            { value: "nafta", label: "Nafta", groupLabel: "Transporte" },
            { value: "colectivo", label: "Colectivo", groupLabel: "Transporte" },
            { value: "taxi", label: "Taxi / Uber", groupLabel: "Transporte" },
            { value: "mantenimiento_auto", label: "Mantenimiento auto", groupLabel: "Transporte" },
        ],
    },
    {
        label: "Vivienda",
        options: [
            { value: "alquiler", label: "Alquiler", groupLabel: "Vivienda" },
            { value: "hipoteca", label: "Hipoteca", groupLabel: "Vivienda" },
            { value: "luz", label: "Luz", groupLabel: "Vivienda" },
            { value: "agua", label: "Agua", groupLabel: "Vivienda" },
            { value: "gas", label: "Gas", groupLabel: "Vivienda" },
            { value: "internet", label: "Internet", groupLabel: "Vivienda" },
        ],
    },
    {
        label: "Salud",
        options: [
            { value: "medico", label: "Consulta médica", groupLabel: "Salud" },
            { value: "medicamentos", label: "Medicamentos", groupLabel: "Salud" },
            { value: "obra_social", label: "Obra Social / Prepaga", groupLabel: "Salud" },
            { value: "gimnasio", label: "Gimnasio", groupLabel: "Salud" },
        ],
    },
    {
        label: "Educación",
        options: [
            { value: "libros", label: "Libros", groupLabel: "Educación" },
            { value: "cursos", label: "Cursos", groupLabel: "Educación" },
            { value: "universidad", label: "Universidad", groupLabel: "Educación" },
        ],
    },
    {
        label: "Entretenimiento",
        options: [
            { value: "netflix", label: "Netflix / Streaming", groupLabel: "Entretenimiento" },
            { value: "cine", label: "Cine / Teatro", groupLabel: "Entretenimiento" },
            { value: "videojuegos", label: "Videojuegos", groupLabel: "Entretenimiento" },
            { value: "salidas", label: "Salidas / Bares", groupLabel: "Entretenimiento" },
        ],
    },
    {
        label: "Compras personales",
        options: [
            { value: "ropa", label: "Ropa", groupLabel: "Compras personales" },
            { value: "tecnologia", label: "Tecnología", groupLabel: "Compras personales" },
            { value: "regalos", label: "Regalos", groupLabel: "Compras personales" },
            { value: "accesorios", label: "Accesorios", groupLabel: "Compras personales" },
        ],
    },
    {
        label: "Mascotas",
        options: [
            { value: "alimento_mascota", label: "Alimento", groupLabel: "Mascotas" },
            { value: "veterinario", label: "Veterinario", groupLabel: "Mascotas" },
        ],
    },
    {
        label: "Finanzas",
        options: [
            { value: "tarjeta_credito", label: "Tarjeta de crédito", groupLabel: "Finanzas" },
            { value: "prestamos", label: "Préstamos", groupLabel: "Finanzas" },
            { value: "ahorros", label: "Ahorros", groupLabel: "Finanzas" },
            { value: "inversiones", label: "Inversiones", groupLabel: "Finanzas" },
        ],
    },
    {
        label: "Otros",
        options: [
            { value: "donaciones", label: "Donaciones", groupLabel: "Otros" },
            { value: "imprevistos", label: "Imprevistos", groupLabel: "Otros" },
            { value: "otro", label: "Otro", groupLabel: "Otros" },
        ],
    },
];


groupedOptions = groupedOptions.map(group => {
    return {
        label: group.label,
        options: group.options.map(op => ({
            value: op.value,
            label: op.label,
            groupLabel: op.groupLabel,
            color: groupColors[op.groupLabel],
        }))
    };
});



const customStyles = {
    control: (provided) => ({
        ...provided,
        borderRadius: 5,
        padding: 1,
        borderColor: "#ccc",
        boxShadow: "none",
        caretColor: "transparent",
    }),
    option: (provided, state) => ({
        ...provided,
        color: "#000",
        backgroundColor: state.isFocused ? "#f9f9f9" : state.isSelected ? "#eee" : "white",
    }),
    placeholder: (provided) => ({
        ...provided,
        color: "#999",
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "#000",
    }),
};

const formatOptionLabel = ({ label, color }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: "0", }}>
        <span
            style={{
                display: "flex",
                flexShrink: "0",
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                backgroundColor: color,
            }}
        />
        <span>{label}</span>
    </div>
);

function CategorySelect({ onChange }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (option) => {
        setSelectedOption(option);
        onChange(option);
    };

    return (
        <Select
            options={groupedOptions}
            formatOptionLabel={formatOptionLabel}
            value={selectedOption}
            onChange={handleChange}
            placeholder="Categoría"
            styles={customStyles}
        />
    );
}

export default CategorySelect;
