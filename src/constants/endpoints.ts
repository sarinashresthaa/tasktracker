
export const endpoints ={
    getAll: "https://694f5cef8531714d9bcdf70b.mockapi.io/api/v1/todo",
    getById:(id:string|number)=>`https://694f5cef8531714d9bcdf70b.mockapi.io/api/v1/todo/${id}`,
    create:"https://694f5cef8531714d9bcdf70b.mockapi.io/api/v1/todo",
    update:"https://694f5cef8531714d9bcdf70b.mockapi.io/api/v1/todo",
    delete:"https://694f5cef8531714d9bcdf70b.mockapi.io/api/v1/todo"
}