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
    }
  }