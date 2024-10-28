export const AnimalQuiz = {
    id: 'animal-quiz',
    title: "나와 닮은 동물",
    subtitle: "당신과 닮은 동물은?",
    mainCharacter: "🦁",
    questions: [
      {
        id: 1,
        text: "친구들과 있을 때 나는?",
        options: [
          { text: "리더십을 발휘하며 주도한다", value: "lion" },
          { text: "조용히 분위기를 살핀다", value: "deer" }
        ]
      }
      // ... 더 많은 질문들
    ],
    results: {
      lion: {
        title: "당당한 사자",
        description: "리더십이 있고 카리스마 넘치는 당신!"
      },
      deer: {
        title: "온순한 사슴",
        description: "따뜻하고 섬세한 마음을 가진 당신!"
      }
    },

    calculateResult: function(answers) {
      if (!answers || answers.length === 0) {
        return 'lion'; // 기본값
      }

      // 각 동물 타입별 카운트
      const counts = {
        lion: 0,
        deer: 0
      };

      // 답변 집계
      answers.forEach(answer => {
        if (answer in counts) {
          counts[answer]++;
        }
      });

      // 더 많이 나온 동물 반환
      return counts.lion >= counts.deer ? 'lion' : 'deer';
    }
  }
