
export const endpoints ={
    getAll: "https://694f5cef8531714d9bcdf70b.mockapi.io/api/v1/todo",
    getById:(id:string|number)=>`https://694f5cef8531714d9bcdf70b.mockapi.io/api/v1/todo/${id}`,
    create:"https://694f5cef8531714d9bcdf70b.mockapi.io/api/v1/todo",
    update:(id:string|number)=>`https://694f5cef8531714d9bcdf70b.mockapi.io/api/v1/todo/${id}`,
    delete:(id:string|number)=>`https://694f5cef8531714d9bcdf70b.mockapi.io/api/v1/todo/${id}`,
    
}
