const productosCono = [
	{
		id: 1,
		nombre: "Cono Sencillo",
		precio: 4000,
		numSabores: 1,
		numSalsas: 1,
		numToppings: 0,
		crema: false,
		extras: [],
	},
	{
		id: 2,
		nombre: "Cono Doble",
		precio: 6000,
		numSabores: 2,
		numSalsas: 1,
		numToppings: 0,
		crema: false,
		extras: [],
	},
	{
		id: 3,
		nombre: "Cono Relleno",
		precio: 6000,
		numSabores: 1,
		numSalsas: 1,
		numToppings: 1,
		crema: false,
		extras: [],
	},
	{
		id: 4,
		nombre: "Cono Especial",
		precio: 11000,
		numSabores: 2,
		numSalsas: 1,
		numToppings: 2,
		crema: true,
		extras: [],
	},
	{
		id: 5,
		nombre: "Super Cono",
		precio: 9000,
		numSabores: 3,
		numSalsas: 1,
		numToppings: 0,
		crema: false,
		extras: [],
	},
	{
		id: 6,
		nombre: "Banana Split",
		precio: 12000,
		numSabores: 3,
		numSalsas: 1,
		numToppings: 1,
		crema: true,
		extras: ["banano"],
	},
	{
		id: 7,
		nombre: "Copa Tropical",
		precio: 10000,
		numSabores: 2,
		numSalsas: 0,
		numToppings: 1,
		crema: true,
		extras: ["fruta"],
	},
	{
		id: 8,
		nombre: "Brownie con Helado",
		precio: 10000,
		numSabores: 1,
		numSalsas: 1,
		numToppings: 1,
		crema: true,
		extras: ["brownie"],
	},
	{
		id: 9,
		nombre: "Helado de la Casa",
		precio: 22000,
		numSabores: 4,
		numSalsas: 1,
		numToppings: 1,
		crema: false,
		extras: ["banano", "brownie", "fresa", "durazno", "barquillo"],
	}
];


const productosCanasta = [
	{
		id: 1,
		nombre: "Mini Canasta",
		precio: 6000,
		numSabores: 1,
		numSalsas: 1,
		numToppings: 1,
		crema: true,
		extras: [],
	},
	{
		id: 2,
		nombre: "Canasta Sencilla",
		precio: 10500,
		numSabores: 3,
		numSalsas: 1,
		numToppings: 0,
		crema: true,
		extras: [],
	},
	{
		id: 3,
		nombre: "Canasta Especial",
		precio: 12000,
		numSabores: 3,
		numSalsas: 1,
		numToppings: 2,
		crema: false,
		extras: [],
	}
];


const productosVasos = [
	{
		id: 1,
		nombre: "Mini Vaso",
		precio: 4000,
		numSabores: 1,
		numSalsas: 1,
		numToppings: 0,
		crema: false,
		extras: [],
	},
	{
		id: 2,
		nombre: "Vaso Sencillo",
		precio: 6000,
		numSabores: 1,
		numSalsas: 1,
		numToppings: 1,
		crema: true,
		extras: [],
	},
	{
		id: 3,
		nombre: "Vaso Doble",
		precio: 8500,
		numSabores: 2,
		numSalsas: 1,
		numToppings: 2,
		crema: false,
		extras: [],
	},
	{
		id: 4,
		nombre: "Parfait",
		precio: 11000,
		numSabores: 2,
		numSalsas: 1,
		numToppings: 3,
		crema: true,
		extras: ["cereal"],
	},
	{
		id: 5,
		nombre: "Parfait de Yogurt Griego",
		precio: 11000,
		numSabores: 1,
		numSalsas: 1,
		numToppings: 2,
		crema: false,
		extras: ["cereal", "yogurt griego"],
	}
];

const productosWaffles = [
	{
		id: 1,
		nombre: "Waffle Frutos Rojos",
		precio: 15500,
		numSabores: 1,
		numSalsas: 1,
		numToppings: 0,
		crema: true,
		extras: [],
		frutas: ["mora", "fresa"],
	},
	{
		id: 2,
		nombre: "Waffle Primavera",
		precio: 15500,
		numSabores: 1,
		numSalsas: 1,
		numToppings: 0,
		crema: true,
		extras: ["arequipe"],
		frutas: ["banana", "fresa"],
	},
	{
		id: 3,
		nombre: "Waffle Chocolate",
		precio: 15500,
		numSabores: 1,
		numSalsas: 1,
		numToppings: 0,
		crema: true,
		extras: ["nutella", "brownie"],
		frutas: [],
	},
	{
		id: 4,
		nombre: "Waffle Tropical",
		precio: 16500,
		numSabores: 1,
		numSalsas: 1,
		numToppings: 0,
		crema: true,
		extras: [],
		frutas: ["frutas mixtas"],
	},
	{
		id: 5,
		nombre: "Waffle a Tu Gusto",
		precio: 17500,
		numSabores: 1,
		numSalsas: 1,
		numToppings: 4,
		crema: true,
		extras: [],
		frutas: [],
	}
];


const productosEnsaladas = [
	{
		id: 1,
		nombre: "Ensalada de Frutas Sencilla",
		precio: 11000,
		numSabores: 1,
		numSalsas: 0,
		numToppings: 0,
		crema: true,
		extras: ["frutas", "queso"],
	},
	{
		id: 2,
		nombre: "Ensalada de Frutas Grande",
		precio: 14000,
		numSabores: 3,
		numSalsas: 0,
		numToppings: 0,
		crema: true,
		extras: ["frutas", "queso"],
	}
];
const sabores = [
	{ id: 1, nombre: "Oreo" },
	{ id: 2, nombre: "Brownie" },
	{ id: 3, nombre: "Chocolate" },
	{ id: 4, nombre: "Arcoíris" },
	{ id: 5, nombre: "Frutos rojos" },
	{ id: 6, nombre: "Masmelo chicle" },
	{ id: 7, nombre: "Vainilla fresa" },
	{ id: 8, nombre: "Vainilla chips" },
	{ id: 9, nombre: "Tiramisú" },
	{ id: 10, nombre: "Ventiado de mora" }
];

const toppings = [
	{ id: 1, nombre: "Moritas" },
	{ id: 2, nombre: "Almendras" },
	{ id: 3, nombre: "Maní" },
	{ id: 4, nombre: "Masmelo" },
	{ id: 5, nombre: "Chips de colores" },
	{ id: 6, nombre: "M&M" },
	{ id: 7, nombre: "Gusanitos" },
	{ id: 8, nombre: "Pepitas de colores" },
	{ id: 9, nombre: "Coco" },
	{ id: 10, nombre: "Lluvia de chocolate" },
	{ id: 11, nombre: "Oreo" },
	{ id: 12, nombre: "Explosiones de chicle" }
];

const salsas = [
	{ id: 1, nombre: "Arequipe" },
	{ id: 2, nombre: "Leche condensada" },
	{ id: 3, nombre: "Chocolate" },
	{ id: 4, nombre: "Fresa" },
	{ id: 5, nombre: "Chicle" }
];

const horario = [
	{ id: 1, dia: "Lunes", apertura: "4:00 PM", cierre: "10:00 PM", promo: false },
	{ id: 2, dia: "Martes", apertura: "4:00 PM", cierre: "10:00 PM", promo: false },
	{ id: 3, dia: "Miércoles", apertura: "4:00 PM", cierre: "10:00 PM", promo: "2x1" },
	{ id: 4, dia: "Jueves", apertura: "4:00 PM", cierre: "10:00 PM", promo: false },
	{ id: 5, dia: "Viernes", apertura: "4:00 PM", cierre: "10:00 PM", promo: false },
	{ id: 6, dia: "Sábado", apertura: "4:00 PM", cierre: "10:00 PM", promo: false },
	{ id: 7, dia: "Domingo", apertura: "4:00 PM", cierre: "10:00 PM", promo: false },
	{ id: 8, dia: "Lunes Festivo", apertura: "4:00 PM", cierre: "10:00 PM", promo: false }
];
