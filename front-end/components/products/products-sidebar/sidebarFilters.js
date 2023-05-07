export const sidebarFilters = [
    {
        name: "Mas nuevos",
        query: "-createdAt",
    },
    {
        name: "Precio (mayor a menor)",
        query: "-price",
    },
    {
        name: "Precio (menor a mayor)",
        query: "price",
    },
]

export default sidebarFilters