import { Category } from "../types/Category"

export const categories: Category = {
    food: { title: 'Alimentação', color: 'blue', expense: true },
    rent: { title: 'Aluguel', color: 'brown', expense: true },
    salary: { title: 'Salário', color: 'green', expense: false },
    otherIncomes: { title: 'Outras Receitas', color: 'green', expense: false },
    otherExpenses: { title: 'Outras Despesas', color: 'blue', expense: true }
}