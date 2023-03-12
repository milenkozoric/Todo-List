export class Todo {
    content: string;
    completed: boolean;
    
    constructor(obj?: any){
        this.content = obj && obj.content || "";
        this.completed = obj && obj.completed || null;
    }
}