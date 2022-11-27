const asyncHandler = require('express-async-handler')


// @description  Get goals
// @route        GET /api/goals
// @access       Private
const getGoals = asyncHandler(async(req, res) => {
        res.status(200).json({message: 'Get goals'})})

// @description  Set goals
// @route        POST /api/goals
// @access       Private
const setGoal = asyncHandler(async(req, res) => {
    // to get body data (req.property)req object has a body property on it.
    //console.log(req.body)
    if(!req.body.text) {
        res.status(400)// add inbuilt error handler from express
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set goal'})})
 // @description  Update goal
// @route        PUT /api/goals/:id
// @access       Private
const updateGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})})

// @description   delete goal
// @route        DELETE /api/goals/:id
// @access       Private
const deleteGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal, 
}