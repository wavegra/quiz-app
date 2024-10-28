export const ColorQuiz = {
    id: 'color-quiz',
    title: "나의 컬러 찾기",
    subtitle: "당신과 어울리는 색은?",
    mainCharacter: "🎨",
    category: "",  // 수험생 카테고리
    isPopular: false,  // 필요에 따라 true로 설정
    questions: [
      {
        id: 1,
        text: "옷을 고를 때 선호하는 스타일은?",
        options: [
          { text: "화려하고 눈에 띄는 색상", value: "warm" },
          { text: "차분하고 단정한 색상", value: "cool" }
        ]
      },
      {
        id: 2,
        text: "좋아하는 인테리어 스타일은?",
        options: [
          { text: "동적이고 활동적인 느낌", value: "vibrant" },
          { text: "차분하고 편안한 느낌", value: "serene" }
        ]
      },
      {
        id: 3,
        text: "선호하는 경관은?",
        options: [
          { text: "푸르른 자연과 맑은 하늘", value: "blue" },
          { text: "따듯한 일몰과 화려한 꽃", value: "red" }
        ]
      },
      {
        id: 4,
        text: "선호하는 색깔의 꽃다발은?",
        options: [
          { text: "빨강, 주황, 노랑 등 따듯한 톤", value: "warm" },
          { text: "파랑, 보라, 초록 등 시원한 톤", value: "cool" }
        ]
      },
      {
        id: 5, 
        text: "가장 인상 깊었던 작품 색감은?",
        options: [
          { text: "강렬하고 생동감 넘치는 색감", value: "vibrant" },
          { text: "부드럽고 조화로운 색감", value: "serene" }
        ]
      },
      {
        id: 6,
        text: "어떤 느낌의 공간을 좋아하나요?",
        options: [
          { text: "활기차고 에너지 넘치는 공간", value: "cheerful" },
          { text: "고요하고 차분한 공간", value: "peaceful" }
        ]
      },
      {
        id: 7,
        text: "좋아하는 시계는?",
        options: [
          { text: "무채색, 금속톤 등 클래식한 색상", value: "classic" },
          { text: "화려하고 다양한 색상의 시계", value: "colorful" }
        ]
      },
      {
        id: 8,
        text: "선호하는 메이크업 스타일은?",
        options: [
          { text: "자연스럽고 은은한 메이크업", value: "natural" },
          { text: "화려하고 강렬한 메이크업", value: "bold" }
        ]
      },
      {
        id: 9,
        text: "좋아하는 배경화면 색감은?",
        options: [
          { text: "따듯하고 편안한 색상", value: "warm" },
          { text: "시원하고 차분한 색상", value: "cool" }
        ]
      },
      {
        id: 10,
        text: "선호하는 패션 액세서리 색상은?",
        options: [
          { text: "금, 브라운, 베이지 등 자연스러운 색상", value: "natural" },
          { text: "빨강, 파랑, 보라 등 강렬한 색상", value: "bold" }
        ]
      }
    ],
    results: {
      warm: {
        title: "따뜻한 계열의 당신",
        description: "화려하고 눈에 띄는 색상을 선호하는 당신! 활동적이고 에너지 넘치는 성격이 느껴져요."
      },
      cool: {
        title: "시원한 계열의 당신",
        description: "차분하고 단정한 색상을 좋아하는 당신! 안정감 있고 차분한 성향이 엿보여요."
      },
      vibrant: {
        title: "생동감 넘치는 당신",
        description: "동적이고 활동적인 느낌의 스타일을 좋아하는 당신! 활기차고 열정적인 성격을 가지고 있네요."
      },
      serene: {
        title: "편안한 당신",
        description: "차분하고 편안한 느낌의 스타일을 선호하는 당신! 안락함과 휴식을 중요하게 여기는 성향이에요."
      },
      blue: {
        title: "시원한 청량감의 당신",
        description: "푸르른 자연과 맑은 하늘을 선호하는 당신! 차분하고 안정적인 성격이 느껴져요."
      },
      red: {
        title: "열정적인 당신",
        description: "따듯한 일몰과 화려한 꽃을 좋아하는 당신! 에너지 넘치고 활동적인 편이에요."
      },
      cheerful: {
        title: "활기찬 당신",
        description: "활기차고 에너지 넘치는 공간을 선호하는 당신! 긍정적이고 열정적인 성격이 엿보여요."
      },
      peaceful: {
        title: "평온한 당신",
        description: "고요하고 차분한 공간을 좋아하는 당신! 침착하고 내성적인 성향이 느껴져요." 
      },
      classic: {
        title: "클래식한 당신",
        description: "무채색이나 금속톤의 클래식한 색상을 선호하는 당신! 안정감 있고 세련된 스타일이네요."
      },
      colorful: {
        title: "화려한 당신",
        description: "다양한 색상의 시계를 좋아하는 당신! 호기심과 창의성이 강한 편이에요."
      },
      natural: {
        title: "자연스러운 당신",
        description: "은은한 메이크업 스타일을 선호하는 당신! 편안하고 정제된 이미지를 추구하는군요."
      },
      bold: {
        title: "화려한 당신",
        description: "강렬한 메이크업 스타일을 좋아하는 당신! 자신감 넘치고 눈에 띄는 모습을 즐기는 편이에요."
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