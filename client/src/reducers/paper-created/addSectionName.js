const addSectionName = (data, sectionTitle)=> {
  const newData = Object.assign({}, data);

  newData.sections[sectionTitle.sectionIndex].type = sectionTitle.sectionName;

  return newData;
};

export default addSectionName;