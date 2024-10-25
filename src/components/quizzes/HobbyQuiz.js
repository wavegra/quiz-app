export const HobbyQuiz = {
    id: 'hobby-quiz',
    title: "나의 취미 찾기",
    subtitle: "당신에게 맞는 취미는?",
    mainCharacter: "🎨",
    questions: [
      {
        id: 1,
        text: "여가 시간이 생기면",
        options: [
          { text: "활동적인 것을 찾는다", value: "active" },
          { text: "조용한 활동을 선호한다", value: "quiet" }
        ]
      },
      {
        id: 2,
        text: "새로운 취미를 시작할 때",
        options: [
          { text: "도전적이고 창의적이다", value: "creative" },
          { text: "안전하고 실용적이다", value: "practical" }
        ]
      },
      {
        id: 3,
        text: "취미 활동 중 실수나 실패가 있어도",
        options: [
          { text: "포기하지 않고 계속 도전한다", value: "persistent" },
          { text: "좌절하고 그만둔다", value: "quitter" }
        ]
      },
      {
        id: 4,
        text: "취미 활동에 얼마나 자주 참여하나요?",
        options: [
          { text: "꾸준히 한다", value: "consistent" },
          { text: "간혹 한다", value: "sporadic" }
        ]
      },
      {
        id: 5,
        text: "취미를 통해 얻고 싶은 건?",
        options: [
          { text: "새로운 경험과 자기계발", value: "growth" },
          { text: "즐거움과 휴식", value: "enjoyment" }
        ]
      },
      {
        id: 6,
        text: "취미를 선택할 때 중요한 건?",
        options: [
          { text: "내 성격과 적성에 맞는지", value: "self-awareness" },
          { text: "주변 사람들의 평가", value: "social-approval" }
        ]
      },
      {
        id: 7,
        text: "취미 활동을 할 때 주로 어떤 태도인가요?",
        options: [
          { text: "집중력이 높고 열정적이다", value: "focused" },
          { text: "여유롭고 느긋하다", value: "relaxed" }
        ]
      },
      {
        id: 8,
        text: "취미 활동에 돈을 어느 정도 투자하나요?",
        options: [
          { text: "아끼지 않고 투자한다", value: "generous" },
          { text: "알뜰하게 투자한다", value: "frugal" }
        ]
      },
      {
        id: 9,
        text: "취미 활동을 주로 혼자 하나요, 아니면 여럿이 하나요?",
        options: [
          { text: "혼자 하는 것을 좋아한다", value: "solitary" },
          { text: "함께 하는 것을 좋아한다", value: "social" }
        ]
      },
      {
        id: 10,
        text: "취미 활동 후에는 어떤가요?",
        options: [
          { text: "힐링이 되고 재충전한다", value: "rejuvenated" },
          { text: "피로감이 남는다", value: "fatigued" }
        ]
      }
    ],
    results: {
      active: {
        title: "활동형 취미인",
        description: "여가 시간에 활동적인 취미를 선호하는 당신! 에너지 넘치고 모험심 있는 편이네요."
      },
      quiet: {
        title: "정적형 취미인",
        description: "여가 시간에 조용한 취미를 즐기는 당신! 차분하고 집중력 있는 편이네요."
      },
      creative: {
        title: "창의적 취미인",
        description: "새로운 취미를 도전적이고 창의적으로 즐기는 당신! 호기심이 많고 상상력이 풍부해요."
      },
      practical: {
        title: "실용적 취미인",
        description: "새로운 취미를 안전하고 실용적으로 즐기는 당신! 현실적이고 효과적인 편이네요."
      },
      persistent: {
        title: "포기 않는 취미인",
        description: "취미 활동 중 실수나 실패가 있어도 포기하지 않고 계속 도전하는 당신! 끈기와 인내심이 있어요."
      },
      quitter: {
        title: "좌절하는 취미인",
        description: "취미 활동 중 실수나 실패에 좌절하고 그만두는 당신! 자신감이 부족해 보여요."
      },
      consistent: {
        title: "꾸준한 취미인",
        description: "취미 활동에 꾸준히 참여하는 당신! 열정적이고 지속 가능한 취미 생활을 하는군요."
      },
      sporadic: {
        title: "간헐적 취미인",
        description: "취미 활동에 간혹 참여하는 당신! 일시적인 관심사만 있는 편이네요."
      },
      growth: {
        title: "자기계발형 취미인",
        description: "취미를 통해 새로운 경험과 자기계발을 얻고자 하는 당신! 성장에 관심이 많아요."
      },
      enjoyment: {
        title: "즐거움 추구형 취미인", 
        description: "취미를 통해 즐거움과 휴식을 얻고자 하는 당신! 편안함과 여유를 중요하게 여기는군요."
      },
      "self-awareness": {
        title: "자기 이해형 취미인",
        description: "취미를 선택할 때 자신의 성격과 적성에 맞는지 고려하는 당신! 자기 이해도가 높아요."
      },
      "social-approval": {
        title: "외부 평가형 취미인",
        description: "취미를 선택할 때 주변 사람들의 평가를 중요하게 여기는 당신! 사회적 인정을 중요시하는 편이네요."
      },
      focused: {
        title: "열정적 취미인",
        description: "취미 활동 시 집중력이 높고 열정적인 당신! 몰입도가 강해 보여요."
      },
      relaxed: {
        title: "여유로운 취미인",
        description: "취미 활동 시 여유롭고 느긋한 당신! 편안함과 휴식을 중요하게 여기네요."
      },
      generous: {
        title: "투자형 취미인",
        description: "취미 활동에 아끼지 않고 투자하는 당신! 열정적이고 적극적인 취미 생활을 하는군요."
      },
      frugal: {
        title: "절약형 취미인",
        description: "취미 활동에 알뜰하게 투자하는 당신! 효율적이고 현실적인 취미 생활을 하는 편이에요."
      },
      solitary: {
        title: "혼자하는 취미인",
        description: "주로 혼자 취미 활동을 즐기는 당신! 독립적이고 몰입도가 높은 편이네요."
      },
      social: {
        title: "사회형 취미인",
        description: "취미 활동을 함께 하는 것을 좋아하는 당신! 사교성과 협동심이 강한 편이에요."
      },
      rejuvenated: {
        title: "힐링형 취미인",
        description: "취미 활동 후 힐링과 재충전을 느끼는 당신! 스트레스 해소와 휴식을 얻는 편이네요."
      },
      fatigued: {
        title: "피로형 취미인",
        description: "취미 활동 후 피로감이 남는 당신! 지나친 몰입으로 인해 소진될 수 있어 보여요."
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