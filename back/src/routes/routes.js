import { Router } from 'express';
import { createCabinet, getCabinets, deleteCabinet, getCabinet, updateCabinet } from '../controllers/Cabinet/CabinetController.js';
import { createUser, deleteUser, getUser, getUsers, signin, updateUser } from '../controllers/User/UserController.js';
import { createItem, deleteItem, getItem, getItems, updateItem } from '../controllers/Item/ItemController.js';
import { createEmployee, deleteEmployee, getEmployee, getEmployees, updateEmployee } from '../controllers/Employee/EmployeeController.js';



const routes = Router();

routes.post('/cabinet', createCabinet);
routes.get('/getcabinets', getCabinets);
routes.get('/cabinet:id', getCabinet);
routes.put('/cabinet:id', updateCabinet);
routes.delete('/cabinet:id', deleteCabinet);

routes.post('/item', createItem)
routes.get('/getitems', getItems);
routes.get('/item:id', getItem);
routes.put('/item:id', updateItem);
routes.delete('/item:id', deleteItem);

routes.post('/employee', createEmployee);
routes.get('/getemployees', getEmployees);
routes.get('/employee:id', getEmployee);
routes.put('/employee:id', updateEmployee);
routes.delete('/employee:id', deleteEmployee);

routes.post('/user', createUser);
routes.get('/user:id', getUser);
routes.put('/user:id', updateUser);
routes.delete('/user:id', deleteUser);
routes.get('/getusers', getUsers);
routes.post('/signin', signin);


export default routes;