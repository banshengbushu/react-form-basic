const editHomework = (data, new_quizzes)=> {
  let newQuizzes = {quizzes: [ "12345"], sectionIndex: 0}
  let newData = Object.assign({}, data);
  const sectionIndex = newQuizzes.sectionIndex;

  let rowSection = newData.sections.filter(section => section.type === 'homeworkQuiz');
  let quizzes = rowSection[sectionIndex].quizzes.concat(newQuizzes.quizzes);
  rowSection[sectionIndex].quizzes = quizzes;
  return newData;
};

export default editHomework;