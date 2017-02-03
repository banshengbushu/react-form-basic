const addSection = (data, section)=> {
    data.sections.push(section);
  return Object.assign({}, data)
};

export default addSection;