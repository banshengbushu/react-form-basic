const addSection = (data, section)=> {
  console.log(data)
  console.log(section)
  data.sections.push(section);
  return Object.assign({}, data)
};

export default addSection;