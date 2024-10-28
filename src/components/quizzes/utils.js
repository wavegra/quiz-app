export function createQuiz(quizData) {
  // 기본 검증
  const requiredFields = ['id', 'title', 'questions', 'results'];
  requiredFields.forEach(field => {
    if (!quizData[field]) {
      throw new Error(`퀴즈에 필수 필드가 누락됨: ${field}`);
    }
  });

  // 결과 계산 방식 지정
  if (!quizData.resultType) {
    quizData.resultType = 'simple'; // 기본값: 단순 집계
  }

  // 결과 계산 함수가 없는 경우, resultType에 따라 다른 기본 함수 제공
  if (!quizData.calculateResult) {
    switch (quizData.resultType) {
      case 'simple':
        quizData.calculateResult = function(answers) {
          if (!answers?.length) return Object.keys(this.results)[0];
          const counts = {};
          answers.forEach(answer => {
            counts[answer] = (counts[answer] || 0) + 1;
          });
          return Object.entries(counts)
            .sort(([,a], [,b]) => b - a)[0][0];
        };
        break;

      case 'percentage':
        quizData.calculateResult = function(answers) {
          if (!answers?.length) return Object.keys(this.results)[0];
          const score = answers.reduce((sum, answer) => sum + (Number(answer) || 0), 0);
          const maxScore = this.questions.length * 2;
          const percentage = (score / maxScore) * 100;
          const resultTypes = Object.keys(this.results);
          const index = Math.floor((percentage / 100) * resultTypes.length);
          return resultTypes[Math.min(index, resultTypes.length - 1)];
        };
        break;

      case 'complex':
        quizData.calculateResult = function(answers) {
          console.warn(`${this.id}: 복잡한 결과 계산 로직이 필요합니다.`);
          return Object.keys(this.results)[0];
        };
        break;

      default:
        throw new Error(`지원하지 않는 결과 계산 방식: ${quizData.resultType}`);
    }
  }

  // 결과값 유효성 검증 (complex 타입은 제외)
  if (quizData.resultType !== 'complex') {
    quizData.questions.forEach(question => {
      question.options.forEach(option => {
        if (!quizData.results[option.value]) {
          throw new Error(`${quizData.id}: 유효하지 않은 결과값 - ${option.value}`);
        }
      });
    });
  }

  return quizData;
}
