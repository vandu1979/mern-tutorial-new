const express = require('express')
const router = express.Router()
// getGoals,setGoal,updateGoal,deleteGoalfunction from the controllers 

const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
} = require('../controllers/goalController')

// to write ln 11 and 14 together
router.route('/').get(getGoals).post(setGoal)

// to write ln 11 and 14 together
router.route('/:id').delete(deleteGoal).put(updateGoal)
//router.get('/', getGoals)
   //(getGoals) => { res.status(200).json({message: 'Get goals'})})

//router.post('/', setGoal)
    //(req, res) => {res.status(200).json({message: 'Set goal'})})

//router.put('/:id',updateGoal) 
    //(req, res) => { res.status(200).json({message: `Update goal ${req.params.id}`})})

//router.delete('/:id', deleteGoal) 
    //(req, res) => {res.status(200).json({message: `Delete goal ${req.params.id}`})})

module.exports = router