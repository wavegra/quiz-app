export const InterviewQuiz = {
  id: 'interview-quiz',
  title: "후엠아이?",
  subtitle: "나는 어떤 사람일까?",
  mainCharacter: "🤔",
  questions: [
    {
      id: 1,
      text: "친구와 약속시간에 늦을 것 같을 때 나는?",
      options: [
        { text: "미리 연락해서 양해를 구한다", value: "sincere" },
        { text: "최대한 빨리 뛰어간다", value: "dynamic" }
      ]
    },
    {
      id: 2,
      text: "주말에 갑자기 약속이 취소됐을 때",
      options: [
        { text: "오예! 드디어 혼자만의 시간!", value: "independent" },
        { text: "다른 친구한테 연락해서 만난다", value: "social" }
      ]
    },
    {
      id: 3,
      text: "일할 때 나의 스타일은?",
      options: [
        { text: "계획을 세우고 차근차근 진행한다", value: "systematic" },
        { text: "일단 시작하고 생각한다", value: "dynamic" }
      ]
    },
    {
      id: 4,
      text: "스트레스 받을 때 나는?",
      options: [
        { text: "맛있는 걸 먹으러 간다", value: "emotional" },
        { text: "운동이나 활동적인 걸 한다", value: "dynamic" }
      ]
    },
    {
      id: 5,
      text: "새로운 환경에 적응할 때",
      options: [
        { text: "먼저 다가가서 말을 건다", value: "social" },
        { text: "상황을 지켜보며 천천히 적응한다", value: "analytical" }
      ]
    },
    {
      id: 6,
      text: "중요한 결정을 내릴 때",
      options: [
        { text: "논리적으로 분석하고 결정한다", value: "analytical" },
        { text: "직감을 믿고 결정한다", value: "intuitive" }
      ]
    },
    {
      id: 7,
      text: "여행 계획을 세울 때",
      options: [
        { text: "세세하게 계획을 짠다", value: "systematic" },
        { text: "큰 틀만 잡고 즉흥적으로 움직인다", value: "intuitive" }
      ]
    },
    {
      id: 8,
      text: "친구가 고민을 털어놓을 때",
      options: [
        { text: "해결책을 제시한다", value: "analytical" },
        { text: "공감하며 이야기를 들어준다", value: "emotional" }
      ]
    },
    {
      id: 9,
      text: "일이 잘 안될 때 나는?",
      options: [
        { text: "다른 방법을 찾아본다", value: "sincere" },
        { text: "잠시 멈추고 휴식을 취한다", value: "independent" }
      ]
    },
    {
      id: 10,
      text: "주변 사람들이 나를 표현할 때 주로 하는 말은?",
      options: [
        { text: "믿음직하고 성실하다", value: "sincere" },
        { text: "재미있고 활기차다", value: "dynamic" }
      ]
    }
  ],

  
  results: {
    sincere: {
      title: "믿음직한 진정성 왕 🏆",
      description: "당신은 신뢰할 수 있고 성실한 사람이에요! 약속을 중요하게 생각하고, 맡은 일은 끝까지 해내는 책임감 있는 성격이죠.",
      traits: ["높은 신뢰성", "성실함", "책임감", "진정성 있는 태도", "꾸준함"]
    },
    dynamic: {
      title: "에너지 넘치는 액션스타 ⚡",
      description: "당신은 언제나 활력이 넘치고 도전을 즐기는 사람이에요! 적극적이고 열정적인 태도로 주변에 긍정적인 영향을 주죠.",
      traits: ["넘치는 에너지", "도전정신", "긍정적인 마인드", "활동적인 성향", "리더십"]
    },
    analytical: {
      title: "냉철한 분석력의 전략가 🔍",
      description: "당신은 논리적이고 분석적인 사고의 소유자예요! 문제를 체계적으로 해결하고 전략적으로 접근하는 능력이 뛰어나죠.",
      traits: ["논리적 사고", "분석력", "전략적 마인드", "객관적 시각", "문제해결 능력"]
    },
    emotional: {
      title: "따뜻한 감성의 공감왕 💝",
      description: "당신은 뛰어난 공감능력을 가진 감성적인 사람이에요! 다른 사람의 감정을 잘 이해하고 배려하는 따뜻한 마음을 가졌죠.",
      traits: ["뛰어난 공감능력", "감수성", "배려심", "친근함", "경청하는 태도"]
    },
    social: {
      title: "인맥왕 소셜버터플라이 🦋",
      description: "당신은 뛰어난 사교성을 가진 사회적인 사람이에요! 새로운 관계를 만들고 유지하는데 탁월한 능력을 가졌죠.",
      traits: ["뛰어난 사교성", "친화력", "적응력", "유쾌함", "네트워킹 능력"]
    },
    independent: {
      title: "자유로운 영혼의 마이웨이 🎨",
      description: "당신은 독립적이고 자유로운 영혼의 소유자예요! 혼자만의 시간을 즐기고 자신만의 개성을 중요하게 여기죠.",
      traits: ["독립성", "창의성", "자기주도성", "개성", "자유로운 사고"]
    },
    intuitive: {
      title: "예리한 직감의 센스쟁이 🎯",
      description: "당신은 뛰어난 직관력을 가진 통찰력 있는 사람이에요! 상황을 빠르게 파악하고 센스있게 대처하는 능력이 있죠.",
      traits: ["뛰어난 직관력", "순발력", "융통성", "임기응변", "통찰력"]
    },
    systematic: {
      title: "완벽주의 플래너 📋",
      description: "당신은 체계적이고 계획적인 성격의 소유자예요! 정리정돈을 좋아하고 효율적인 시스템을 만드는 것을 즐기죠.",
      traits: ["체계적인 성격", "계획성", "조직력", "꼼꼼함", "효율성"]
    }
  }
}

