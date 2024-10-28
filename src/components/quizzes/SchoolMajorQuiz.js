export const SchoolMajorQuiz = {
    id: 'school-major',
    title: '내 성적에 맞는 학교와 전공은?',
    description: '성적과 MBTI를 기반으로 나에게 맞는 학교와 전공을 추천받아보세요!',
    mainCharacter: '🎓',
    isEvent: true,
    questions: [
      {
        id: 1,
        text: "당신의 수능/모의고사 등급을 입력해주세요",
        type: 'grade',
        subjects: [
          { name: '국어', placeholder: '1~9 등급' },
          { name: '수학', placeholder: '1~9 등급' },
          { name: '영어', placeholder: '1~9 등급' },
          { name: '탐구1', placeholder: '1~9 등급' },
          { name: '탐구2', placeholder: '1~9 등급' }
        ]
      },
      {
        id: 2,
        text: "공부할 때 나는...",
        options: [
          { text: "혼자 조용히 집중해서 공부하는 것이 좋다", value: "I" },
          { text: "스터디 그룹에서 함께 공부하는 것이 좋다", value: "E" }
        ]
      },
      {
        id: 3,
        text: "수업 중 토론할 때 나는...",
        options: [
          { text: "깊이 생각한 후에 의견을 말한다", value: "I" },
          { text: "생각나는 대로 바로바로 의견을 말한다", value: "E" }
        ]
      },
      {
        id: 4,
        text: "새로운 과목을 배울 때 나는...",
        options: [
          { text: "구체적이고 실용적인 내용을 선호한다", value: "S" },
          { text: "추상적이고 이론적인 내용을 선호한다", value: "N" }
        ]
      },
      {
        id: 5,
        text: "과제를 할 때 나는...",
        options: [
          { text: "정해진 방식대로 차근차근 진행한다", value: "S" },
          { text: "나만의 새로운 방식을 시도해본다", value: "N" }
        ]
      },
      {
        id: 6,
        text: "시험 문제를 풀 때 나는...",
        options: [
          { text: "객관적인 사실과 정확한 답을 찾는다", value: "T" },
          { text: "문제의 의도와 전체적인 맥락을 고려한다", value: "F" }
        ]
      },
      {
        id: 7,
        text: "조별과제에서 의견 충돌이 있을 때...",
        options: [
          { text: "논리적인 분석을 통해 최선의 답을 찾는다", value: "T" },
          { text: "모두의 의견을 고려하여 조화로운 해결책을 찾는다", value: "F" }
        ]
      },
      {
        id: 8,
        text: "과제 제출 마감일이 다가올 때...",
        options: [
          { text: "미리 계획을 세워 여유있게 완성한다", value: "J" },
          { text: "마감일에 임박해서 집중해서 완성한다", value: "P" }
        ]
      },
      {
        id: 9,
        text: "수업 시간표를 짤 때 나는...",
        options: [
          { text: "학기 초에 꼼꼼하게 계획을 세운다", value: "J" },
          { text: "상황에 따라 유연하게 조정한다", value: "P" }
        ]
      },
      {
        id: 10,
        text: "전공 선택 시 중요하게 생각하는 것은...",
        options: [
          { text: "취업 전망과 실용성", value: "S" },
          { text: "개인의 흥미와 가능성", value: "N" }
        ]
      },
      {
        id: 11,
        text: "학교생활에서 스트레스 받을 때...",
        options: [
          { text: "혼자만의 시간을 가지며 재충전한다", value: "I" },
          { text: "친구들과 만나서 대화하며 풀어낸다", value: "E" }
        ]
      }
    ],
    results: {
      'ISTJ': {
    title: "체계적인 공학도",
    description: "체계적이고 논리적인 당신에게 추천하는 진로입니다.",
    recommendedSchools: [
      { name: "서울대학교", majors: ["기계공학과", "전기전자공학과"] },
      { name: "카이스트", majors: ["산업공학과", "항공우주공학과"] }
    ],
    traits: ["논리적 사고력", "체계적인 학습능력", "높은 집중력"],
    details: [
      "체계적이고 논리적인 사고방식으로 공학 분야에서 뛰어난 성과를 낼 수 있습니다.",
      "꾸준하고 계획적인 학습 스타일로 높은 학업 성취도를 유지할 수 있습니다."
    ],
    strengths: ["문제해결능력", "집중력", "체계적인 사고"],
    weaknesses: ["급변하는 상황 대처", "창의적 발상"],
    careerPaths: ["연구원", "엔지니어", "데이터 분석가"]
  },
  'ISFJ': {
    title: "헌신적인 의료인",
    description: "섬세하고 책임감 있는 당신에게 추천하는 진로입니다.",
    recommendedSchools: [
      { name: "서울대학교", majors: ["의예과", "간호학과"] },
      { name: "연세대학교", majors: ["약학과", "생명공학과"] }
    ],
    traits: ["섬세함", "책임감", "공감능력"],
    details: [
      "타인을 돕고자 하는 따뜻한 마음과 섬세한 관찰력으로 의료 분야에서 빛을 발할 수 있습니다.",
      "꼼꼼하고 체계적인 성격으로 정확한 의료 서비스를 제공할 수 있습니다."
    ],
    strengths: ["책임감", "꼼꼼함", "공감능력"],
    weaknesses: ["과도한 완벽주의", "스트레스 관리"],
    careerPaths: ["의사", "약사", "간호사", "임상병리사"]
  },
  'INFJ': {
    title: "통찰력 있는 상담가",
    description: "깊은 통찰력과 공감능력을 가진 당신에게 추천하는 진로입니다.",
    recommendedSchools: [
      { name: "서울대학교", majors: ["심리학과", "교육학과"] },
      { name: "이화여자대학교", majors: ["상담심리학과", "사회복지학과"] }
    ],
    traits: ["통찰력", "공감능력", "창의성"],
    details: [
      "인간에 대한 깊은 이해와 통찰력으로 상담 분야에서 탁월한 능력을 발휘할 수 있습니다.",
      "창의적인 문제해결 능력으로 내담자에게 새로운 관점을 제시할 수 있습니다."
    ],
    strengths: ["통찰력", "경청능력", "창의적 사고"],
    weaknesses: ["완벽주의", "과도한 감정이입"],
    careerPaths: ["심리상담사", "교육컨설턴트", "사회복지사"]
  },
  'INTJ': {
    title: "전략적인 연구자",
    description: "분석적이고 전략적인 당신에게 추천하는 진로입니다.",
    recommendedSchools: [
      { name: "서울대학교", majors: ["물리학과", "컴퓨터공학과"] },
      { name: "카이스트", majors: ["수리과학과", "로봇공학과"] }
    ],
    traits: ["전략적 사고", "혁신성", "독창성"],
    details: [
      "뛰어난 분석력과 전략적 사고로 연구 분야에서 혁신적인 성과를 낼 수 있습니다.",
      "독창적인 아이디어와 체계적인 접근으로 새로운 발견을 이끌어낼 수 있습니다."
    ],
    strengths: ["전략적 사고", "분석력", "독창성"],
    weaknesses: ["팀워크", "의사소통"],
    careerPaths: ["연구원", "데이터 사이언티스트", "전략 컨설턴트"]
  },
  'ISTP': {
  title: "실용적인 기술자",
  description: "논리적이고 실용적인 당신에게 추천하는 진로입니다.",
  recommendedSchools: [
    { name: "서울대학교", majors: ["기계공학과", "건축학과"] },
    { name: "한국과학기술원", majors: ["자동차공학과", "로봇공학과"] }
  ],
  traits: ["문제해결능력", "실용성", "적응력"],
  details: [
    "뛰어난 손재주와 문제해결 능력으로 기술 분야에서 탁월한 성과를 낼 수 있습니다.",
    "실용적인 접근방식으로 효율적인 해결책을 제시할 수 있습니다."
  ],
  strengths: ["기술적 능력", "실용적 사고", "위기대처능력"],
  weaknesses: ["장기계획 수립", "이론적 학습"],
  careerPaths: ["기계엔지니어", "건축가", "자동차정비사", "로봇공학자"]
},

'ISFP': {
  title: "예술적인 디자이너",
  description: "섬세하고 예술적인 당신에게 추천하는 진로입니다.",
  recommendedSchools: [
    { name: "홍익대학교", majors: ["시각디자인과", "산업디자인과"] },
    { name: "국민대학교", majors: ["공업디자인과", "의상디자인과"] }
  ],
  traits: ["예술성", "심미안", "섬세함"],
  details: [
    "뛰어난 미적 감각과 섬세한 표현력으로 디자인 분야에서 창의적인 작품을 만들 수 있습니다.",
    "실용성과 아름다움을 조화롭게 결합하는 능력이 있습니다."
  ],
  strengths: ["미적감각", "창의성", "섬세함"],
  weaknesses: ["자기주장", "deadline 관리"],
  careerPaths: ["산업디자이너", "패션디자이너", "인테리어디자이너", "공예가"]
},

'INFP': {
  title: "이상적인 작가",
  description: "창의적이고 이상주의적인 당신에게 추천하는 진로입니다.",
  recommendedSchools: [
    { name: "서울대학교", majors: ["국어국문학과", "철학과"] },
    { name: "이화여자대학교", majors: ["문예창작과", "영화영상학과"] }
  ],
  traits: ["창의성", "공감능력", "이상주의"],
  details: [
    "풍부한 상상력과 깊은 통찰력으로 문학 작품을 창작할 수 있습니다.",
    "인간에 대한 깊은 이해를 바탕으로 감동적인 이야기를 전달할 수 있습니다."
  ],
  strengths: ["창작능력", "언어감각", "공감능력"],
  weaknesses: ["현실적 판단", "체계적 업무"],
  careerPaths: ["작가", "시나리오작가", "카피라이터", "번역가"]
},

'INTP': {
  title: "혁신적인 연구원",
  description: "논리적이고 창의적인 당신에게 추천하는 진로입니다.",
  recommendedSchools: [
    { name: "서울대학교", majors: ["물리학과", "철학과"] },
    { name: "카이스트", majors: ["수학과", "이론물리학과"] }
  ],
  traits: ["논리력", "창의성", "분석력"],
  details: [
    "뛰어난 논리력과 창의적 사고로 새로운 이론을 발견할 수 있습니다.",
    "복잡한 문제를 체계적으로 분석하고 해결하는 능력이 탁월합니다."
  ],
  strengths: ["논리적 사고", "문제해결능력", "독창성"],
  weaknesses: ["실용적 적용", "대인관계"],
  careerPaths: ["이론물리학자", "수학자", "철학자", "프로그래머"]
},

'ESTP': {
  title: "도전적인 사업가",
  description: "활동적이고 실용적인 당신에게 추천하는 진로입니다.",
  recommendedSchools: [
    { name: "고려대학교", majors: ["경영학과", "무역학과"] },
    { name: "연세대학교", majors: ["경제학과", "스포츠산업학과"] }
  ],
  traits: ["실행력", "적응력", "문제해결능력"],
  details: [
    "빠른 상황판단과 실행력으로 비즈니스 기회를 포착할 수 있습니다.",
    "실용적인 접근방식으로 효율적인 문제해결이 가능합니다."
  ],
  strengths: ["실행력", "위기대처능력", "협상력"],
  weaknesses: ["장기계획", "인내심"],
  careerPaths: ["기업가", "부동산전문가", "무역전문가", "세일즈매니저"]
},

'ESFP': {
  title: "매력적인 엔터테이너",
  description: "활발하고 매력적인 당신에게 추천하는 진로입니다.",
  recommendedSchools: [
    { name: "중앙대학교", majors: ["연극영화과", "실용음악과"] },
    { name: "서울예술대학교", majors: ["공연예술학과", "방송연예과"] }
  ],
  traits: ["표현력", "사교성", "즉흥성"],
  details: [
    "뛰어난 표현력과 매력으로 대중을 사로잡을 수 있습니다.",
    "즉흥적인 대처능력으로 다양한 상황에 유연하게 적응할 수 있습니다."
  ],
  strengths: ["무대매너", "사교성", "적응력"],
  weaknesses: ["집중력", "계획성"],
  careerPaths: ["공연예술가", "방송인", "이벤트플래너", "연예인"]
},'ENFJ': {
  title: "영향력 있는 교육자",
  description: "카리스마 있고 통찰력 있는 당신에게 추천하는 진로입니다.",
  recommendedSchools: [
    { name: "서울대학교", majors: ["교육학과", "사회교육과"] },
    { name: "이화여자대학교", majors: ["교육공학과", "특수교육과"] }
  ],
  traits: ["리더십", "통찰력", "의사소통능력"],
  details: [
    "뛰어난 통찰력과 카리스마로 학생들을 이끌고 성장시킬 수 있습니다.",
    "타인의 잠재력을 발견하고 개발하는데 탁월한 능력을 보입니다."
  ],
  strengths: ["리더십", "공감능력", "동기부여"],
  weaknesses: ["과도한 책임감", "일과 삶의 균형"],
  careerPaths: ["교사", "교육컨설턴트", "진로상담사", "HR매니저"]
},

'ENTJ': {
  title: "전략적인 리더",
  description: "결단력 있고 전략적인 당신에게 추천하는 진로입니다.",
  recommendedSchools: [
    { name: "서울대학교", majors: ["경영학과", "국제학과"] },
    { name: "고려대학교", majors: ["정책학과", "경영전략학과"] }
  ],
  traits: ["리더십", "전략적사고", "추진력"],
  details: [
    "뛰어난 전략적 사고와 추진력으로 조직을 성공적으로 이끌 수 있습니다.",
    "장기적인 비전을 제시하고 효율적으로 목표를 달성하는 능력이 탁월합니다."
  ],
  strengths: ["의사결정력", "조직력", "전략적사고"],
  weaknesses: ["감정적 공감", "세부사항 관리"],
  careerPaths: ["최고경영자", "전략컨설턴트", "정책전문가", "기업가"]
},

'ESFJ': {
  title: "헌신적인 서비스 전문가",
  description: "사교적이고 배려심 깊은 당신에게 추천하는 진로입니다.",
  recommendedSchools: [
    { name: "연세대학교", majors: ["호텔경영학과", "간호학과"] },
    { name: "경희대학교", majors: ["관광경영학과", "사회복지학과"] }
  ],
  traits: ["친화력", "책임감", "봉사정신"],
  details: [
    "뛰어난 대인관계 능력과 봉사정신으로 서비스 분야에서 탁월한 성과를 낼 수 있습니다.",
    "체계적이고 책임감 있는 태도로 고객만족을 이끌어낼 수 있습니다."
  ],
  strengths: ["대인관계", "조직력", "서비스정신"],
  weaknesses: ["변화적응", "비판적 피드백"],
  careerPaths: ["호텔리어", "의료서비스전문가", "고객서비스매니저", "이벤트플래너"]
},

'ESTJ': {
  title: "실용적인 관리자",
  description: "체계적이고 실행력 있는 당신에게 추천하는 진로입니다.",
  recommendedSchools: [
    { name: "서울대학교", majors: ["경영학과", "행정학과"] },
    { name: "성균관대학교", majors: ["회계학과", "산업공학과"] }
  ],
  traits: ["체계성", "실행력", "책임감"],
  details: [
    "체계적인 업무처리와 강한 책임감으로 조직을 효율적으로 관리할 수 있습니다.",
    "명확한 기준과 절차를 바탕으로 안정적인 성과를 도출할 수 있습니다."
  ],
  strengths: ["조직력", "실행력", "의사결정"],
  weaknesses: ["유연성", "감정적 고려"],
  careerPaths: ["재무관리자", "프로젝트매니저", "공무원", "품질관리자"]
},

'ENFP': {
  title: "열정적인 크리에이터",
  description: "창의적이고 열정적인 당신에게 추천하는 진로입니다.",
  recommendedSchools: [
    { name: "홍익대학교", majors: ["광고홍보학과", "영상디자인과"] },
    { name: "중앙대학교", majors: ["미디어커뮤니케이션학과", "공연영상창작학과"] }
  ],
  traits: ["창의성", "열정", "의사소통능력"],
  details: [
    "풍부한 상상력과 열정으로 혁신적인 콘텐츠를 만들어낼 수 있습니다.",
    "다양한 아이디어를 효과적으로 전달하고 사람들을 설득할 수 있습니다."
  ],
  strengths: ["창의력", "적응력", "네트워킹"],
  weaknesses: ["일관성", "마감준수"],
  careerPaths: ["마케터", "콘텐츠크리에이터", "광고기획자", "방송PD"]
},

'ENTP': {
  title: "혁신적인 기업가",
  description: "창의적이고 도전적인 당신에게 추천하는 진로입니다.",
  recommendedSchools: [
    { name: "카이스트", majors: ["기술경영학과", "산업디자인학과"] },
    { name: "서울대학교", majors: ["벤처경영학과", "컴퓨터공학과"] }
  ],
  traits: ["혁신성", "분석력", "기업가정신"],
  details: [
    "창의적인 문제해결 능력과 도전정신으로 새로운 비즈니스를 창출할 수 있습니다.",
    "다양한 가능성을 탐구하고 혁신적인 해결책을 제시할 수 있습니다."
  ],
  strengths: ["창의적 문제해결", "전략적 사고", "협상력"],
  weaknesses: ["인내심", "세부사항 관리"],
  careerPaths: ["스타트업 창업자", "기술컨설턴트", "벤처캐피탈리스트", "제품기획자"]
}
    },
    calculateResult: function(answers) {
      // 첫 번째 답변은 성적 정보
      const grades = answers[0];
      
      // 나머지 답변으로 MBTI 계산
      const mbtiAnswers = answers.slice(1);
      const counts = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
      };
      
      mbtiAnswers.forEach(answer => {
        if (answer in counts) {
          counts[answer]++;
        }
      });
  
      const mbti = [
        counts.E > counts.I ? 'E' : 'I',
        counts.S > counts.N ? 'S' : 'N',
        counts.T > counts.F ? 'T' : 'F',
        counts.J > counts.P ? 'J' : 'P'
      ].join('');
  
      // 성적 수준 판단
      const averageGrade = Object.values(grades).reduce((a, b) => a + b, 0) / Object.values(grades).length;
      const level = averageGrade <= 2 ? 'HIGH' : averageGrade <= 4 ? 'MID' : 'LOW';
  
      // MBTI와 성적 수준을 조합하여 결과 키 생성
      const resultKey = `${mbti}_${level}`;
      return this.results[resultKey];
    }
  };