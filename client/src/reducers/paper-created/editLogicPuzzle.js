const editLogicPuzzle = (data, {definition})=> {
  let definitionIndex = 0;
  let count = 0;

  for (let i = 0; i < data.sections.length; i++) {
    if (data.sections[i].type === 'logicPuzzle') {
      definitionIndex = i;
      count = 1;
      break;
    }
  }
  let newSections = definition ? {
    definition: definition,
    type: "logicPuzzle"
  } : undefined;

  data.sections.splice(definitionIndex, count, newSections);

  return Object.assign({}, data, {
    sections: data.sections.filter((item)=> {
      return item != undefined
    })
  });
};

export default editLogicPuzzle;