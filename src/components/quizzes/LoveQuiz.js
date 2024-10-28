export const LoveQuiz = {
    id: 'love-quiz',
    title: "연애 스타일",
    subtitle: "당신의 연애 방식은?",
    mainCharacter: "💝",
    category: "",  // 수험생 카테고리
    isPopular: false,  // 필요에 따라 true로 설정
    questions: [
      {
        id: 1,
        text: "연인과 다툼이 있을 때",
        options: [
          { text: "바로 이야기하고 해결한다", value: "direct" },
          { text: "시간을 두고 차근히 풀어간다", value: "slow" }
        ]
      },
      {
        id: 2,
        text: "연인과 데이트를 계획할 때",
        options: [
          { text: "사전에 세부적으로 계획한다", value: "planner" },
          { text: "즉흥적으로 결정한다", value: "spontaneous" }
        ]
      },
      {
        id: 3,
        text: "상대방의 감정을 공감할 때",
        options: [
          { text: "적극적으로 공감한다", value: "empathetic" },
          { text: "완전히 이해하기 어렵다", value: "detached" }
        ]
      },
      {
        id: 4,
        text: "연애에서 중요한 건",
        options: [
          { text: "상대방과의 친밀감", value: "intimacy" },
          { text: "자신만의 독립성", value: "independence" }
        ]
      },
      {
        id: 5,
        text: "데이트 중 상대방이 휴대폰을 만질 때",
        options: [
          { text: "신경 쓰이지만 참는다", value: "tolerant" },
          { text: "즉시 말한다", value: "confrontative" }
        ]
      },
      {
        id: 6,
        text: "새로운 관계를 시작할 때",
        options: [
          { text: "서두르지 않고 천천히 발전시킨다", value: "cautious" },
          { text: "과감하게 빨리 진전시킨다", value: "bold" }
        ]
      },
      {
        id: 7,
        text: "연애에서 로맨틱한 모습을 보이는 편인가요?",
        options: [
          { text: "자주 표현한다", value: "romantic" },
          { text: "크게 신경 쓰지 않는다", value: "pragmatic" }
        ]
      },
      {
        id: 8,
        text: "연인이 마음에 들지 않으면",
        options: [
          { text: "거리를 두거나 헤어진다", value: "selective" },
          { text: "계속 노력해서 변화를 기대한다", value: "persistent" }
        ]
      },
      {
        id: 9,
        text: "상대방의 단점을 발견하면",
        options: [
          { text: "이해하려 노력한다", value: "forgiving" },
          { text: "문제삼는다", value: "critical" }
        ]
      },
      {
        id: 10,
        text: "연애에서 가장 중요한 건",
        options: [
          { text: "상호 존중과 신뢰", value: "respect" },
          { text: "열정과 재미", value: "passion" }
        ]
      }
    ],
    results: {
      direct: {
        title: "솔직한 커뮤니케이터",
        description: "다툼이 있을 때 바로 이야기하고 해결하는 당신! 문제를 즉시 해결하는 것을 좋아하는군요."
      },
      slow: {
        title: "느긋한 중재자",
        description: "시간을 두고 차근히 다툼을 풀어나가는 당신! 인내심이 많고 유연한 편이에요."
      },
      planner: {
        title: "꼼꼼한 연애 플래너",
        description: "연인과의 데이트 계획을 사전에 세밀하게 짜는 당신! 체계적이고 세심한 편이네요."
      },
      spontaneous: {
        title: "즉흥적인 연애인",
        description: "데이트 계획을 즉흥적으로 결정하는 당신! 자유로움과 새로운 경험을 즐기는 편이에요."
      },
      empathetic: {
        title: "공감력 짱 연인",
        description: "연인의 감정을 적극적으로 공감하는 당신! 친밀감과 이해심이 돋보이는군요."
      },
      detached: {
        title: "이해하기 어려운 연인",
        description: "연인의 감정을 완전히 이해하기 어려워하는 당신! 공감 능력이 다소 부족해 보이네요."
      },
      intimacy: {
        title: "친밀감 중시형",
        description: "연애에서 상대방과의 친밀감을 가장 중요하게 여기는 당신! 애정과 유대감을 추구하는군요."
      },
      independence: {
        title: "독립성 중요형",
        description: "연애에서 자신만의 독립성을 지키는 것이 중요한 당신! 자율성과 개인 공간을 중시하는 편이에요."
      },
      tolerant: {
        title: "너그러운 연인",
        description: "데이트 중 상대방의 휴대폰 사용을 참는 당신! 이해심과 관용력이 높은 편이군요."
      },
      confrontative: {
        title: "주장하는 연인",
        description: "데이트 중 상대방의 휴대폰 사용에 즉시 말하는 당신! 솔직하고 단호한 성향이 느껴져요."
      },
      cautious: {
        title: "조심스러운 연애인",
        description: "새로운 관계를 천천히 발전시키는 당신! 안전과 안정을 중요하게 여기는 편이에요."
      },
      bold: {
        title: "과감한 연애인",
        description: "새로운 관계를 빨리 발전시키는 당신! 도전적이고 열정적인 편이군요."
      },
      romantic: {
        title: "로맨틱한 연인",
        description: "연애에서 로맨틱한 면모를 자주 보이는 당신! 감성적이고 감정적인 성향이 엿보여요."
      },
      pragmatic: {
        title: "실용적인 연인",
        description: "로맨틱한 면에 크게 신경 쓰지 않는 당신! 현실적이고 실용적인 태도를 가지고 있어요."
      },
      selective: {
        title: "까다로운 연애인",
        description: "마음에 들지 않으면 거리를 두거나 헤어지는 당신! 높은 기준을 가지고 있네요."
      },
      persistent: {
        title: "노력형 연인",
        description: "마음에 들지 않더라도 계속 노력하는 당신! 포기하지 않고 변화를 기대하는 편이에요."
      },
      forgiving: {
        title: "관용적인 연인",
        description: "상대방의 단점을 이해하려 노력하는 당신! 너그러움과 공감력이 돋보이네요."
      },
      critical: {
        title: "비판적인 연인",
        description: "상대방의 단점을 문제삼는 당신! 완벽주의적이고 까다로운 면모가 있어 보여요."
      },
      respect: {
        title: "존중과 신뢰를 중시하는 연인",
        description: "연애에서 상호 존중과 신뢰가 가장 중요한 당신! 건강한 관계를 추구하는군요."
      },
      passion: {
        title: "열정과 재미를 중시하는 연인", 
        description: "연애에서 열정과 재미를 가장 중요하게 여기는 당신! 로맨틱하고 활기찬 성향이 엿보여요."
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