const QuizCard = ({ quiz, onStart }) => (
  <div className="p-4 cursor-pointer" onClick={onStart}>
    <div className="flex items-center space-x-3">
      <span className="text-2xl">{quiz.mainCharacter}</span>
      <div>
        <div className="font-bold">{quiz.title}</div>
        <div className="text-sm text-gray-500">{quiz.subtitle}</div>
      </div>
    </div>
  </div>
)
