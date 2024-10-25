export const FoodQuiz = {
    id: 'food-quiz',
    title: "당신의 음식 취향",
    subtitle: "음식으로 보는 성격",
    mainCharacter: "🍜",
    questions: [
      {
        id: 1,
        text: "배달음식을 시킬 때 나는?",
        options: [
          { text: "늘 먹던 메뉴로 시킨다", value: "safe" },
          { text: "새로운 메뉴에 도전한다", value: "adventure" }
        ]
      },
      {
        id: 2,
        text: "식당에 갈 때 주로 어떤 음식을 주문하나요?",
        options: [
          { text: "전통적인 음식을 선택한다", value: "traditional" },
          { text: "새로운 트렌드의 음식을 주문한다", value: "trendy" }
        ]
      },
      {
        id: 3,
        text: "좋아하는 간식은 무엇인가요?",
        options: [
          { text: "달콤한 간식을 선호한다", value: "sweet" },
          { text: "짠 간식을 더 좋아한다", value: "salty" }
        ]
      },
      {
        id: 4,
        text: "음식을 고를 때 가장 중요하게 생각하는 것은?",
        options: [
          { text: "맛", value: "taste" },
          { text: "건강", value: "health" }
        ]
      },
      {
        id: 5,
        text: "여행 갈 때 새로운 음식을 먹어보나요?",
        options: [
          { text: "주저 없이 도전한다", value: "adventurous" },
          { text: "익숙한 음식을 찾는다", value: "cautious" }
        ]
      },
      {
        id: 6,
        text: "고향 음식을 먹을 때는 어떤가요?",
        options: [
          { text: "향수가 솟구친다", value: "nostalgic" },
          { text: "그냥 평범한 식사로 생각한다", value: "indifferent" }
        ]
      },
      {
        id: 7,
        text: "맛있는 음식을 먹을 때 가장 중요한 건?",
        options: [
          { text: "풍미와 맛", value: "flavor" },
          { text: "영양과 건강", value: "nutrition" }
        ]
      },
      {
        id: 8,
        text: "음식을 남기는 편인가요?",
        options: [
          { text: "남기지 않고 깨끗하게 먹는다", value: "clean-plate" },
          { text: "남기는 것도 괜찮다", value: "leave-some" }
        ]
      },
      {
        id: 9, 
        text: "친구들과 음식 만들기를 하면?",
        options: [
          { text: "모든 과정을 꼼꼼히 챙긴다", value: "meticulous" },
          { text: "즉흥적으로 진행한다", value: "spontaneous" }
        ]
      },
      {
        id: 10,
        text: "새로운 음식을 먹을 때 나는?",
        options: [
          { text: "안전하고 익숙한 것을 선호한다", value: "safe" },
          { text: "호기심을 가지고 도전한다", value: "curious" }
        ]
      }
    ],
    results: {
      safe: {
        title: "안전 식러버",
        description: "늘 먹던 메뉴를 고르는 당신! 편안함과 익숙함을 추구하는 성격이네요."
      },
      adventure: {
        title: "모험 식러버", 
        description: "새로운 메뉴에 도전하는 당신! 호기심과 모험심이 강한 성격이라고 볼 수 있어요."
      },
      traditional: {
        title: "전통주의자",
        description: "전통적인 음식을 선호하는 당신! 안전과 확실성을 중요하게 여기는 성향이군요."
      },
      trendy: {
        title: "트렌디한 사람",
        description: "새로운 음식 트렌드를 추구하는 당신! 호기심과 개방성이 강한 편이에요."
      },
      sweet: {
        title: "달콤이 사랑",
        description: "달콤한 간식을 좋아하는 당신! 감성적이고 낭만적인 성격을 가지고 있네요."
      },
      salty: {
        title: "짠맛 팬",
        description: "짠 간식을 더 좋아하는 당신! 강렬하고 활동적인 성향이 엿보이네요."
      },
      taste: {
        title: "미식가",
        description: "음식의 맛을 가장 중요하게 여기는 당신! 감각적이고 미적 안목이 뛰어나군요."
      },
      health: {
        title: "건강 지향",
        description: "건강한 음식을 챙기는 당신! 균형잡힌 생활과 실천력이 돋보이는 성격이네요."
      },
      adventurous: {
        title: "음식 모험가",
        description: "새로운 음식에 두려움이 없는 당신! 호기심이 많고 개방적인 성향을 가지고 있어요."
      },
      cautious: {
        title: "신중한 식객",
        description: "익숙한 음식을 고르는 당신! 안전과 편안함을 추구하는 신중한 성격이라고 볼 수 있어요."
      },
      nostalgic: {
        title: "고향애 가득", 
        description: "고향 음식에 대한 향수가 크게 느껴지는 당신! 감성적이고 전통을 중요하게 여기는 성향이네요."
      },
      indifferent: {
        title: "음식에 무덤덤",
        description: "고향 음식에 큰 의미를 두지 않는 당신! 객관적이고 감정적이지 않은 편이에요."
      },
      "flavor": {
        title: "미식가",
        description: "음식의 풍미와 맛을 중요하게 여기는 당신! 감각적이고 미적 안목이 뛰어나군요."
      },
      "nutrition": {
        title: "건강 지향",
        description: "영양과 건강을 중요하게 생각하는 당신! 균형잡힌 생활과 실천력이 돋보이는 성격이네요."
      },
      "clean-plate": {
        title: "깔끔한 식단가",
        description: "음식을 깨끗하게 비우는 당신! 완결력과 효율성을 중요하게 여기는 성향이네요."
      },
      "leave-some": {
        title: "여유있는 식객",
        description: "남기는 것도 괜찮다고 생각하는 당신! 여유로움과 관대함이 느껴지는 성격입니다."
      },
      meticulous: {
        title: "신중한 요리사",
        description: "음식 만들기에 꼼꼼한 당신! 완벽주의적인 성향이 강하고 세부사항을 중요하게 여기네요."
      },
      spontaneous: {
        title: "즉흥적인 요리사",
        description: "음식 만들기를 즉흥적으로 하는 당신! 창의적이고 유연한 성향을 가지고 있어요."
      },
      safe: {
        title: "안전 선호",
        description: "새로운 음식을 시도할 때 조심스러운 당신! 편안함과 익숙함을 중요하게 생각하는군요."
      },
      curious: {
        title: "모험심 강한 식객",
        description: "새로운 음식을 호기심 가지고 도전하는 당신! 개방적이고 흥미로운 성격이에요."
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