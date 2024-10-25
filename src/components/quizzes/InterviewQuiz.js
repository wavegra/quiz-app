export const InterviewQuiz = {
    id: 'interview-quiz',
    title: "마이인터뷰테스트",
    subtitle: "나는 어떤 사람일까?",
    mainCharacter: "🐻",
    questions: [
      {
        id: 1,
        text: "이번 주 로또 1등 당첨자가 30억을 받았다고 한다",
        options: [
          { text: "와 30억이면 뭐부터 실시 일마정도 줘지", value: "active" },
          { text: "와 30억이면 진짜 부럽다고 생각", value: "passive" }
        ]
      },
      {
        id: 2,
        text: "친구가 고민을 이야기할 때",
        options: [
          { text: "직설적으로 답을 찾아준다", value: "active" },
          { text: "공감하면서 들어준다", value: "passive" }
        ]
      },
      {
        id: 3,
        text: "여행지에서 맛집을 발견했을 때",
        options: [
          { text: "SNS에 바로 공유한다", value: "active" },
          { text: "나만 알고 있는다", value: "passive" }
        ]
      }
    ],
    results: {
      active: {
        title: "활동적인 에너자이저",
        description: "당신은 언제나 에너지가 넘치는 활력형이에요!",
        traits: ["활발한 성격", "긍정적인 마인드", "사교적인 성향", "즉흥적인 결정"]
      },
      passive: {
        title: "신중한 계획가",
        description: "당신은 차분하게 계획하는 신중형이에요!",
        traits: ["신중한 성격", "계획적인 태도", "깊이 있는 사고", "안정적인 선택"]
      }
    }
  }