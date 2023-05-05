const steps = [
  {id: 1, action: 'START', next_step_id: 3},
  {id: 3, action: 'BOIRE', next_step_id: 2},
  {id: 2, action: 'DORMIR', next_step_id: 5},
  {id: 5, action: 'TRAVAILLER', next_step_id: 4},
  {id: 4, action: 'JOUER', next_step_id: 9},
  {id: 6, action: 'VOYAGER', next_step_id: 7},
  {id: 7, action: 'TERMINER', next_step_id: null},
  {id: 9, action: 'TELEPHONER', next_step_id: 6}
]



function searchData(steps){
    let start = steps.find(a => a.action === 'START').id;
    let  next_step_id = steps.find(a => a.action === 'START').next_step_id;
    let result= [];
    result.push(start)
    while(next_step_id !=null ){
        id =steps.find(a => a.id === next_step_id).id;
        next_step_id = steps.find(a => a.id === next_step_id).next_step_id;
        result.push(id);
        
    }
    return result;
    
}



const res = searchData(steps);
console.log(res);