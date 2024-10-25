export const JobQuiz = {
    id: 'job-quiz',
    title: "나의 직업 적성",
    subtitle: "나에게 맞는 직업은?",
    mainCharacter: "💼",
    description: "평소 나의 모습과 가장 비슷한 답변을 선택해주세요.",
    questions: [
      {
        id: 1,
        text: "문제를 해결할 때",
        options: [
          { text: "논리적으로 분석한다", value: "analytical" },
          { text: "직관적으로 판단한다", value: "intuitive" }
        ]
      }
    ],
    results: {
      analytical: {
        title: "분석형 인간",
        description: "논리적이고 꼼꼼한 당신! 기획, 분석, 연구 분야에서 잘 어울리는 직업을 찾으실 수 있어요."
      },
      intuitive: {
        title: "직관형 인간",
        description: "창의력과 상상력이 풍부한 당신! 디자인, 마케팅, 영업 분야에서 좋은 성과를 낼 수 있어요."
      }
    },
    calculateResult(answers) {
      if (!answers || answers.length === 0) {
        return Object.keys(this.results)[0];
      }
  
      // 첫 번째 답변으로 결과 결정
      return answers[0];
    }
  };