
exports.seed = function(knex) {

  // Inserts seed entries
  return knex('tasks').insert([
    {
      project_id: 1, 
      description: 'open can.', 
      completed: true
    },
    {
      project_id: 3, 
      description: 'wash towels', 
      completed: true
    },
    {
      project_id: 2, 
      description: 'sharpen pen', 
      completed: true
    },

  ]);
    
};
