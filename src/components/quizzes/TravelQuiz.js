export const TravelQuiz = {
    id: 'travel-quiz',
    title: "여행 스타일 테스트",
    subtitle: "당신의 여행 성향은?",
    mainCharacter: "✈️",
    questions: [
      {
        id: 1,
        text: "여행 계획을 세울 때",
        options: [
          { text: "세세하게 계획을 짠다", value: "planner" },
          { text: "즉흥적으로 결정한다", value: "freestyle" }
        ]
      },
      {
        id: 2,
        text: "숙박 시설은 어떤 걸 고르나요?",
        options: [
          { text: "독특하고 특별한 곳", value: "unique" },
          { text: "깨끗하고 편안한 곳", value: "comfort" }
        ]
      },
      {
        id: 3, 
        text: "여행지 선택 시 가장 중요한 건?",
        options: [
          { text: "문화와 역사", value: "culture" },
          { text: "자연 경관", value: "nature" }
        ]
      },
      {
        id: 4,
        text: "현지 음식을 먹을 때 당신은?",
        options: [
          { text: "주저 없이 도전한다", value: "adventurous" },
          { text: "익숙한 음식을 찾는다", value: "cautious" }
        ]
      },
      {
        id: 5,
        text: "숙소에서 지내는 시간은?",
        options: [
          { text: "최소한으로 지낸다", value: "explorer" },
          { text: "여유롭게 시간을 보낸다", value: "relaxer" }
        ]
      },
      {
        id: 6, 
        text: "여행 중 예상치 못한 상황이 생긴다면?",
        options: [
          { text: "침착하게 대처한다", value: "problem-solver" },
          { text: "적응하기 어려워한다", value: "anxious" }
        ]
      },
      {
        id: 7,
        text: "여행 경비는 어떻게 준비하나요?",
        options: [
          { text: "여유 있게 예산을 잡는다", value: "generous" },
          { text: "알뜰하게 지출한다", value: "frugal" }
        ]
      },
      {
        id: 8,
        text: "현지 문화를 경험하고 싶나요?",
        options: [
          { text: "적극적으로 참여한다", value: "cultural-immersion" },
          { text: "관심 없다", value: "casual" }
        ]
      },
      {
        id: 9,
        text: "여행 중 스트레스를 받는다면?",
        options: [
          { text: "짜증 내거나 회피한다", value: "stressed" },
          { text: "침착하게 대처한다", value: "resilient" }
        ]
      },
      {
        id: 10,
        text: "여행 후에는 어떤가요?",
        options: [
          { text: "여행의 추억에 젖어있다", value: "reminiscing" },
          { text: "일상으로 빨리 돌아간다", value: "practical" }
        ]
      }
    ],
    results: {
      planner: {
        title: "계획형 여행러",
        description: "세심하게 계획을 짜는 당신! 안전과 효율을 중요하게 여기는 성향이네요."
      },
      freestyle: {
        title: "즉흥형 여행러",
        description: "여행은 즉흥적으로! 당신은 자유로움과 모험을 즐기는 타입이에요."
      },
      unique: {
        title: "독특함을 찾는 여행러",
        description: "독특하고 특색있는 숙소를 선호하는 당신! 새로운 경험을 추구하는 성향이네요."
      },
      comfort: {
        title: "편안함을 중시하는 여행러",
        description: "깨끗하고 편안한 숙소를 고르는 당신! 안락함과 편의성을 중요하게 여기는군요."
      },
      culture: {
        title: "문화 탐험가",
        description: "여행지의 문화와 역사에 관심이 많은 당신! 배움과 이해의 즐거움을 느끼는 여행자예요."
      },
      nature: {
        title: "자연 매력에 푹 빠진 여행러",
        description: "아름답고 웅장한 자연 경관을 더 선호하는 당신! 힐링과 감동을 주된 여행 목적으로 하는군요."
      },
      adventurous: {
        title: "미식 탐험가",
        description: "새로운 음식을 주저 없이 도전하는 당신! 개방적이고 모험심이 강한 여행자의 모습이에요."
      },
      cautious: {
        title: "안전 지향 여행러",
        description: "익숙한 음식을 찾는 당신! 편안함과 익숙함을 중시하는 보수적인 여행자 스타일이군요."
      },
      explorer: {
        title: "바깥세상 탐험가",
        description: "숙소에 오래 머물지 않고 여행지를 탐험하는 당신! 활동적이고 호기심 많은 여행자예요."
      },
      relaxer: {
        title: "여유로운 여행자",
        description: "숙소에서 편안한 시간을 보내는 당신! 여유로움과 휴식을 중요하게 여기는 여행자네요."
      },
      "problem-solver": {
        title: "적응력 甲 여행러",
        description: "예상치 못한 상황에도 침착하게 대처하는 당신! 문제해결력이 뛰어난 여행자예요."
      },
      anxious: {
        title: "걱정 쟁이 여행자", 
        description: "여행 중 예상치 못한 일에 적응하기 어려워하는 당신! 안전과 익숙함에 의지하는 편이네요."
      },
      generous: {
        title: "여유로운 여행 경비 준비",
        description: "여행 경비를 여유 있게 잡는 당신! 편안하고 만족스러운 여행을 즐기는 게 중요한가 봐요."
      },
      frugal: {
        title: "알뜰한 여행 경비 관리",
        description: "여행 경비를 알뜰하게 지출하는 당신! 값진 경험을 하는 것이 목표인가 봐요."
      },
      "cultural-immersion": {
        title: "문화 탐험가",
        description: "현지 문화 경험에 적극적인 당신! 새로운 것을 배우고 체험하는 것을 좋아하는군요."
      },
      casual: {
        title: "문화에 무관심한 관광객",
        description: "현지 문화에 관심이 없는 당신! 편안함과 휴식을 위주로 여행을 즐기는 타입이에요."
      },
      stressed: {
        title: "스트레스 받는 여행자",
        description: "여행 중 스트레스를 받으면 짜증내거나 회피하는 당신! 여행의 여유와 즐거움을 찾기 어려울 수 있어요."
      },
      resilient: {
        title: "유연한 여행자",
        description: "여행 중 스트레스에도 침착하게 대처하는 당신! 여행의 어려움을 잘 극복하는 강인한 타입이네요."
      },
      reminiscing: {
        title: "여행 추억에 젖은 여행자",
        description: "여행이 끝난 뒤에도 여행의 추억에 젖어있는 당신! 여행의 감동을 계속 간직하는군요."
      },
      practical: {
        title: "현실로 빨리 돌아가는 여행자",
        description: "여행이 끝나면 빨리 일상으로 돌아가는 당신! 현실적이고 실용적인 성향이 엿보이네요."
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