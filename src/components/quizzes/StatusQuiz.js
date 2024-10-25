export const StatusQuiz = {
    id: 'status-quiz',
    title: "요즘 내 상태 테스트",
    subtitle: "당신의 현재 상태는?",
    mainCharacter: "🐧",
    questions: [
      {
        id: 1,
        text: "요즘 나의 에너지 레벨은?",
        options: [
          { text: "넘치는 에너지! 할 일이 많아도 즐겁다", value: "high" },
          { text: "적당히 편안한 상태를 유지중", value: "medium" }
        ]
      },
      {
        id: 2,
        text: "일할 때 나의 모습은?",
        options: [
          { text: "계획적으로 천천히 진행한다", value: "high" },
          { text: "몰입해서 빠르게 처리한다", value: "medium" }
        ]
      },
      {
        id: 3,
        text: "스트레스 받을 때 나는?",
        options: [
          { text: "운동이나 활동으로 해소한다", value: "high" },
          { text: "음악 듣기나 명상으로 풀어낸다", value: "medium" }
        ]
      }
    ],
    results: {
      high: {
        title: "활력 충전 상태",
        description: "당신은 지금 매우 건강하고 활기찬 상태입니다!",
        traits: ["높은 에너지", "긍정적 마인드", "활동적인 생활", "목표 지향적"]
      },
      medium: {
        title: "안정 균형 상태",
        description: "당신은 지금 균형잡힌 편안한 상태를 유지하고 있어요!",
        traits: ["안정된 에너지", "평온한 마음", "규칙적인 생활", "조화로운 균형"]
      }
    }
  }