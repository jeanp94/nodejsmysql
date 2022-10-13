import { pool } from '../db.js';



export const createEmployees= async (req, res) => {
   // 
   // console.log(req.body.name);
   try {
      const {name,salary} = req.body;
      const [ rows ] = await pool.query("INSERT INTO employees(name,salary) VALUES (?,?)",[name,salary]);
       res.send({
        id : rows.insertId,
        name,
        salary
       });
   } catch (error) {
      return res.status(500).json({
         message : "error"
      })
   }
};



export const getEmployees = async (req, res) => {
      try {
         const [rows] = await pool.query("SELECT * FROM employees");
         res.send({ 
            rows
         })
      } catch (error) {
         return res.status(500).json({ 
            message: 'algo salio mal'
         })
      }
};

export const getEmployee = async (req, res) => {
   try {
      const data = req.params.id;
      const [rows] = await pool.query("SELECT * FROM employees WHERE id = ?",[data]);
    res.send({rows});
   } catch (error) {
      return res.status(500).json({
         message: 'algo salio mal'
      })
   }
};
export const updateEmployees = async(req, res) => {
   try {
      const id = req.params.id;
      const {name,salary} =req.body;
        const [rows] =await pool.query("UPDATE employees SET name = IFNULL(?,name) , salary = IFNULL(?,salary) WHERE id = ?",[name,salary,id]);
        if(rows.affectedRows === 0 ) return res.status(400).json({
         message:'Employee no found'
      })
     const [result] = await pool.query("SELECT * FROM employees where id = ? ",[id]);
         res.send(
            result[0]
         )
   } catch (error) {
      return res.status(500).json({message: 'error algo salio mal '})
   }
   };

export const deleteEmployees = async (req, res) =>{
   try {
      const [result]=  await pool.query("DELETE FROM employees WHERE id = ? ",req.params.id);
      if(result.affectedRows <= 0){
         return res.status(404).json({message: 'Employeed no found'})
      }
      res.status(204).send()
   } catch (error) {
      return res.status(500).json({
         message:'Algo salio mal'
      })
   }
     
}