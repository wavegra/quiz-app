export const QuizResults = ({ quiz, userName, resultType, onReset }) => {
  const resultData = quiz.results[resultType];

  if (!resultData) return null;

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="text-center">
        <div className="text-xl font-bold mb-4">결과는...</div>
        <div className="text-6xl mb-6">{quiz.mainCharacter}</div>
        
        <div className="text-lg font-bold mb-2">
          {userName}님의 결과는
        </div>
        
        <div className="text-2xl font-bold mb-6">
          {resultData.title}
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="text-gray-600">
            {resultData.description}
          </div>
          {resultData.traits && (
            <div className="mt-4">
              <div className="font-bold mb-2">당신의 특징:</div>
              <ul className="text-left list-disc list-inside">
                {resultData.traits.map((trait, index) => (
                  <li key={index} className="text-gray-600">{trait}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button
          onClick={onReset}
          className="w-full bg-pink-400 hover:bg-pink-500 text-white py-2 px-4 rounded-lg"
        >
          다시 테스트하기
        </button>
      </div>
    </div>
  );
};

