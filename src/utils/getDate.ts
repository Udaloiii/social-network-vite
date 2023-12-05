const today = new Date()

const day = String(today.getDate()).padStart(2, "0")
const month = String(today.getMonth() + 1).padStart(2, "0") // Месяцы в JavaScript начинаются с 0, поэтому добавляем 1
const year = today.getFullYear()

export const formattedDate = `${day}.${month}.${year}`