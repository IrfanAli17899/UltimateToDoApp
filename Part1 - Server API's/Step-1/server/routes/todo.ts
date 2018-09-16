import {Router,Response,Request} from "express";
import Todo from "../models/todo";


class TodoRoute {
    router:Router;
    constructor(){
        this.router = Router();
        this.routes();
    }

    getAllTodo(req:Request,res:Response){

    }
    PostTodo(req:Request,res:Response){
        let { title , description } = req.body
        var todo = new Todo({title,description})
        todo.save().then((result)=>{
            res.status(201).send(result)
        }).catch((err)=>{
            res.status(400).send(err)
        })
    }

    routes(){
         this.router.get("/",this.getAllTodo)
         this.router.post("/",this.PostTodo)
    }
}

const todoRoutes = new TodoRoute();
todoRoutes.routes();
const todoRouter = todoRoutes.router
export default todoRouter;
