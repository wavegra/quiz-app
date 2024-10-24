// src/components/quizzes/MBTIQuiz.js
export const MBTIQuiz = {
    id: 'mbti-quiz',
    title: "초간단 MBTI 테스트",
    subtitle: "10분만에 알아보는 나의 성격 유형",
    mainCharacter: "🦊",
    description: "재미로 보는 MBTI! 평소 나의 모습과 가장 비슷한 답변을 선택해주세요.",
    questions: [
      {
        id: 1,
        text: "친구의 소개로 처음 보는 사람들과 식사 자리에 가게 되었다. 이때 나는?",
        options: [
          { 
            text: "새로운 사람들과의 만남이 설렌다. 적극적으로 대화를 이끌어간다.", 
            value: "E"
          },
          { 
            text: "낯선 자리가 어색하다. 분위기를 살피며 천천히 대화에 참여한다.", 
            value: "I"
          }
        ]
      },
      {
        id: 2,
        text: "주말에 약속이 없다. 나는 어떻게 시간을 보낼까?",
        options: [
          { 
            text: "친구들에게 연락해서 만날 약속을 잡는다.", 
            value: "E"
          },
          { 
            text: "집에서 혼자만의 시간을 보내며 재충전한다.", 
            value: "I"
          }
        ]
      },
      {
        id: 3,
        text: "일을 할 때 나는 주로?",
        options: [
          { 
            text: "구체적인 사실과 경험을 중요하게 생각한다.", 
            value: "S"
          },
          { 
            text: "전체적인 그림과 가능성을 먼저 생각한다.", 
            value: "N"
          }
        ]
      },
      {
        id: 4,
        text: "새로운 프로젝트를 시작할 때 나는?",
        options: [
          { 
            text: "세부적인 계획을 먼저 세우고 차근차근 진행한다.", 
            value: "S"
          },
          { 
            text: "큰 방향을 정하고 진행하면서 유연하게 조정한다.", 
            value: "N"
          }
        ]
      },
      {
        id: 5,
        text: "친구가 고민을 이야기할 때 나는?",
        options: [
          { 
            text: "문제 해결을 위한 구체적인 조언을 해준다.", 
            value: "T"
          },
          { 
            text: "친구의 감정에 공감하며 이야기를 들어준다.", 
            value: "F"
          }
        ]
      },
      {
        id: 6,
        text: "의견 충돌이 있을 때 나는?",
        options: [
          { 
            text: "논리적인 근거를 들어 설명한다.", 
            value: "T"
          },
          { 
            text: "상대방의 입장을 고려하며 중간점을 찾는다.", 
            value: "F"
          }
        ]
      },
      {
        id: 7,
        text: "여행을 준비할 때 나는?",
        options: [
          { 
            text: "세세한 일정과 준비물 목록을 미리 체크한다.", 
            value: "J"
          },
          { 
            text: "큰 틀만 잡아두고 현지에서 즉흥적으로 결정한다.", 
            value: "P"
          }
        ]
      },
      {
        id: 8,
        text: "방 청소를 할 때 나는?",
        options: [
          { 
            text: "정해진 시간에 계획적으로 한다.", 
            value: "J"
          },
          { 
            text: "기분이 날 때 한번에 싹 한다.", 
            value: "P"
          }
        ]
      },
      {
        id: 9,
        text: "친구와 약속을 잡을 때 나는?",
        options: [
          { 
            text: "시간과 장소를 미리 정확히 정한다.", 
            value: "J"
          },
          { 
            text: "당일에 서로 연락하며 유동적으로 정한다.", 
            value: "P"
          }
        ]
      },
      {
        id: 10,
        text: "일이나 공부를 시작할 때 나는?",
        options: [
          { 
            text: "계획을 세우고 순서대로 진행한다.", 
            value: "J"
          },
          { 
            text: "시작하면서 자연스럽게 흐름을 따른다.", 
            value: "P"
          }
        ]
      }
    ],
    results: {
      ISTJ: {
        title: "청렴결백한 논리주의자",
        description: "신중하고 철저한 성격으로, 체계적으로 일을 처리하는 당신!",
        traits: [
          "책임감이 강함",
          "체계적이고 논리적",
          "신중하고 철저함",
          "전통과 질서를 중시"
        ],
        strengths: [
          "정확하고 체계적인 일 처리",
          "높은 집중력",
          "뛰어난 문제 해결 능력"
        ],
        weaknesses: [
          "경직된 사고방식",
          "변화를 꺼려함",
          "감정 표현이 서툴 수 있음"
        ],
        recommendations: {
          career: [
            "회계사",
            "법률가",
            "프로그래머",
            "엔지니어"
          ],
          hobby: [
            "체계적인 수집활동",
            "퍼즐 게임",
            "정원 가꾸기",
            "독서"
          ],
          growthPoints: [
            "새로운 경험에 더 열린 마음 가지기",
            "감정 표현 연습하기",
            "즉흥적인 활동 시도해보기"
          ]
        }
      },

      ISFJ: {
        title: "용감한 수호자",
        description: "따뜻한 마음을 가진 배려심 깊은 당신! 다른 사람을 돕는 것을 좋아하는 책임감 있는 성격입니다.",
        traits: [
          "책임감이 강함",
          "헌신적이고 성실함",
          "따뜻하고 친절함",
          "세세한 것을 잘 기억함"
        ],
        strengths: [
          "뛰어난 관찰력",
          "강한 책임감",
          "실용적인 문제해결 능력"
        ],
        weaknesses: [
          "자신의 필요를 뒤로 미룸",
          "변화를 불편해함",
          "거절을 잘 못함"
        ],
        recommendations: {
          career: [
            "간호사",
            "교사",
            "사회복지사",
            "행정직"
          ],
          hobby: [
            "요리",
            "원예",
            "수공예",
            "봉사활동"
          ],
          growthPoints: [
            "자신의 욕구 표현하기",
            "완벽주의 내려놓기",
            "새로운 변화 받아들이기"
          ]
        }
      },
      INFJ: {
        title: "선의의 옹호자",
        description: "이상적인 세상을 꿈꾸는 당신! 깊은 통찰력과 창의성을 가진 성격입니다.",
        traits: [
          "이상주의적",
          "창의적이고 통찰력 있음",
          "성실하고 끈기 있음",
          "다른 사람의 감정에 민감함"
        ],
        strengths: [
          "뛰어난 직관력",
          "창의적 문제해결",
          "깊은 공감능력"
        ],
        weaknesses: [
          "지나치게 완벽주의적",
          "현실과 타협이 어려움",
          "스트레스에 취약"
        ],
        recommendations: {
          career: [
            "상담사",
            "작가",
            "심리학자",
            "교육자"
          ],
          hobby: [
            "글쓰기",
            "예술 활동",
            "명상",
            "자기계발"
          ],
          growthPoints: [
            "현실적 목표 설정하기",
            "스트레스 관리하기",
            "자신에게 너그러워지기"
          ]
        }
      },
      INTJ: {
        title: "전략적인 설계자",
        description: "논리적이고 창의적인 전략가인 당신! 새로운 아이디어를 체계화하는 것을 좋아합니다.",
        traits: [
          "전략적 사고",
          "독창적인 문제해결",
          "높은 기준과 자신감",
          "독립적인 성향"
        ],
        strengths: [
          "뛰어난 분석력",
          "전략적 기획 능력",
          "효율적인 시스템 구축"
        ],
        weaknesses: [
          "타인의 감정을 간과할 수 있음",
          "지나치게 완벽주의적",
          "융통성이 부족할 수 있음"
        ],
        recommendations: {
          career: [
            "과학자",
            "전략가",
            "연구원",
            "IT 분석가"
          ],
          hobby: [
            "체스",
            "전략게임",
            "독서",
            "연구활동"
          ],
          growthPoints: [
            "감정 지능 발달시키기",
            "타인의 의견 경청하기",
            "유연성 기르기"
          ]
        }
      },
      ISTP: {
        title: "만능 재주꾼",
        description: "대담하고 실용적인 문제해결사인 당신! 뛰어난 상황 적응력을 가지고 있습니다.",
        traits: [
          "논리적이고 실용적",
          "뛰어난 상황 적응력",
          "효율성 중시",
          "독립적인 성향"
        ],
        strengths: [
          "위기대처 능력",
          "실용적 문제해결",
          "기술적 재능"
        ],
        weaknesses: [
          "장기 계획 수립이 어려움",
          "감정 표현이 서툴 수 있음",
          "지루함을 잘 느낌"
        ],
        recommendations: {
          career: [
            "엔지니어",
            "기술자",
            "운동선수",
            "응급구조사"
          ],
          hobby: [
            "극한 스포츠",
            "기계 조립",
            "DIY 활동",
            "사진촬영"
          ],
          growthPoints: [
            "장기적 안목 기르기",
            "감정 표현하기",
            "인내심 기르기"
          ]
        }
      },
      ISFP: {
        title: "호기심 많은 예술가",
        description: "따뜻한 감성을 가진 예술가인 당신! 자유로운 영혼과 창의적인 성향을 가지고 있습니다.",
        traits: [
          "예술적 감각",
          "따뜻한 마음",
          "융통성 있는 사고",
          "평화를 추구"
        ],
        strengths: [
          "미적 감각",
          "공감 능력",
          "현재에 충실"
        ],
        weaknesses: [
          "장기계획 부족",
          "미루는 습관",
          "갈등 회피"
        ],
        recommendations: {
          career: [
            "예술가",
            "디자이너",
            "음악가",
            "요리사"
          ],
          hobby: [
            "그림그리기",
            "음악",
            "수공예",
            "요리"
          ],
          growthPoints: [
            "계획성 기르기",
            "갈등 해결 능력 향상",
            "자기주장 하기"
          ]
        }
      },
      INFP: {
        title: "열정적인 중재자",
        description: "이상적인 세상을 꿈꾸는 낭만가인 당신! 깊은 감성과 창의성을 가지고 있습니다.",
        traits: [
          "이상주의적",
          "창의적인 사고",
          "깊은 감성",
          "개인의 가치 중시"
        ],
        strengths: [
          "창의적 표현력",
          "뛰어난 언어 능력",
          "강한 공감 능력"
        ],
        weaknesses: [
          "현실감각 부족",
          "우유부단함",
          "감정 기복"
        ],
        recommendations: {
          career: [
            "작가",
            "상담사",
            "예술가",
            "교육자"
          ],
          hobby: [
            "창작 글쓰기",
            "시 쓰기",
            "예술 활동",
            "자원봉사"
          ],
          growthPoints: [
            "현실적 목표 설정",
            "결단력 기르기",
            "감정 조절하기"
          ]
        }
      },
      INTP: {
        title: "논리적인 사색가",
        description: "창의적인 문제 해결사인 당신! 논리적 분석과 이론적 탐구를 즐깁니다.",
        traits: [
          "논리적 사고",
          "창의적 문제해결",
          "지적 호기심",
          "독립적인 성향"
        ],
        strengths: [
          "뛰어난 분석력",
          "창의적 사고",
          "객관적 판단"
        ],
        weaknesses: [
          "실행력 부족",
          "사회성이 부족할 수 있음",
          "완벽주의 성향"
        ],
        recommendations: {
          career: [
            "연구원",
            "프로그래머",
            "철학자",
            "분석가"
          ],
          hobby: [
            "독서",
            "논리 퍼즐",
            "과학 실험",
            "컴퓨터 프로그래밍"
          ],
          growthPoints: [
            "실행력 키우기",
            "사회성 향상",
            "감정 표현하기"
          ]
        }
      },
      ESTP: {
        title: "모험을 즐기는 사업가",
        description: "활동적이고 실용적인 당신! 순발력 있는 문제해결과 모험을 즐깁니다.",
        traits: [
          "활동적",
          "현실적",
          "적응력이 뛰어남",
          "순발력이 좋음"
        ],
        strengths: [
          "뛰어난 위기대처 능력",
          "실용적 문제해결",
          "협상 능력"
        ],
        weaknesses: [
          "충동적인 결정",
          "장기계획 부족",
          "참을성 부족"
        ],
        recommendations: {
          career: [
            "영업직",
            "기업가",
            "운동선수",
            "경찰관"
          ],
          hobby: [
            "스포츠",
            "모험 활동",
            "자동차",
            "게임"
          ],
          growthPoints: [
            "인내심 기르기",
            "장기 계획 세우기",
            "감정 고려하기"
          ]
        }
      },
      ESFP: {
        title: "자유로운 영혼의 연예인",
        description: "매력적이고 즉흥적인 당신! 삶의 즐거움을 찾고 나누는 것을 좋아합니다.",
        traits: [
          "활발한 성격",
          "사교적",
          "낙관적",
          "즉흥적"
        ],
        strengths: [
          "뛰어난 사교성",
          "실용적 감각",
          "적응력"
        ],
        weaknesses: [
          "깊이 있는 고민 부족",
          "일상적 업무 지루해함",
          "쉽게 산만해짐"
        ],
        recommendations: {
          career: [
            "연예인",
            "이벤트 기획자",
            "판매직",
            "요리사"
          ],
          hobby: [
            "공연 예술",
            "파티 기획",
            "패션",
            "댄스"
          ],
          growthPoints: [
            "계획성 기르기",
            "깊이 있는 사고하기",
            "책임감 키우기"
          ]
        }
      },
      ENFJ: {
        title: "정의로운 사회운동가",
        description: "카리스마 있는 지도자인 당신! 다른 사람의 성장을 돕는 것을 좋아합니다.",
        traits: [
          "카리스마 있는 리더십",
          "이타적",
          "사교적",
          "이상주의적"
        ],
        strengths: [
          "뛰어난 대인관계",
          "영향력 있는 설득력",
          "조직력"
        ],
        weaknesses: [
          "지나친 자기희생",
          "비판에 예민함",
          "우유부단할 수 있음"
        ],
        recommendations: {
          career: [
            "교사",
            "상담사",
            "HR매니저",
            "정치인"
          ],
          hobby: [
            "봉사활동",
            "독서토론",
            "사회운동",
            "멘토링"
          ],
          growthPoints: [
            "자기 돌봄하기",
            "비판 수용하기",
            "결단력 키우기"
          ]
        }
      },
      ENTP: {
        title: "혁신적인 발명가",
        description: "창의적인 전략가인 당신! 새로운 아이디어를 탐구하고 토론하는 것을 즐깁니다.",
        traits: [
          "창의적인 사고",
          "논쟁을 즐김",
          "도전적인 성향",
          "융통성 있음"
        ],
        strengths: [
          "빠른 문제해결",
          "창의적 발상",
          "적응력"
        ],
        weaknesses: [
          "마무리가 약함",
          "규칙 준수를 싫어함",
          "논쟁적일 수 있음"
        ],
        recommendations: {
          career: [
            "기업가",
            "발명가",
            "변호사",
            "컨설턴트"
          ],
          hobby: [
            "토론",
            "전략게임",
            "발명",
            "브레인스토밍"
          ],
          growthPoints: [
            "마무리 잘하기",
            "타인 감정 배려하기",
            "인내심 기르기"
          ]
        }
      },
      ENTJ: {
        title: "대담한 통솔자",
        description: "카리스마 있는 리더인 당신! 목표를 향해 효율적으로 나아가는 것을 좋아합니다.",
        traits: [
          "강한 리더십",
          "전략적 사고",
          "효율성 추구",
          "자신감 있음"
        ],
        strengths: [
          "뛰어난 조직력",
          "전략적 기획능력",
          "결단력"
        ],
        weaknesses: [
          "지나치게 지배적일 수 있음",
          "감정을 간과할 수 있음",
          "완벽주의적 성향"
        ],
        recommendations: {
          career: [
            "CEO",
            "정치인",
            "경영컨설턴트",
            "기업가"
          ],
          hobby: [
            "리더십 활동",
            "전략 게임",
            "토론",
            "자기계발"
          ],
          growthPoints: [
            "공감능력 키우기",
            "인내심 기르기",
            "타인의 감정 이해하기"
          ]
        }
      }
      // ... 다른 MBTI 유형들도 같은 형식으로 추가
    },
    calculateResult: function(answers) {
      const counts = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
      };
    
      answers.forEach(answer => {
        counts[answer]++;
      });
    
      return [
        counts.E > counts.I ? 'E' : 'I',
        counts.S > counts.N ? 'S' : 'N',
        counts.T > counts.F ? 'T' : 'F',
        counts.J > counts.P ? 'J' : 'P'
      ].join('');
    }
  
}

  