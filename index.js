const questions = [
  {
    id: 1,
    text: '사람들과의 대화가 즐거운 편인가요?',
    yes: 'E',
    no: 'I',
  },
  {
    id: 2,
    text: '혼자 있는 시간이 더 편안하게 느껴지나요?',
    yes: 'I',
    no: 'E',
  },
  {
    id: 3,
    text: '새로운 사람을 만나는 것이 기대되나요?',
    yes: 'E',
    no: 'I',
  },
  {
    id: 4,
    text: '구체적인 사실보다 아이디어나 가능성에 더 관심이 가나요?',
    yes: 'N',
    no: 'S',
  },
  {
    id: 5,
    text: '일상적인 경험보다 새로운 경험을 더 선호하나요?',
    yes: 'N',
    no: 'S',
  },
  {
    id: 6,
    text: '사람들의 감정이나 직관을 더 중요하게 생각하나요?',
    yes: 'N',
    no: 'S',
  },
  {
    id: 7,
    text: '결정을 내릴 때 논리적인 분석을 우선시하나요?',
    yes: 'T',
    no: 'F',
  },
  {
    id: 8,
    text: '다른 사람의 감정을 고려하여 결정을 내리나요?',
    yes: 'F',
    no: 'T',
  },
  {
    id: 9,
    text: '비판적인 피드백을 주는 것이 중요하다고 생각하나요?',
    yes: 'T',
    no: 'F',
  },
  {
    id: 10,
    text: '계획을 세우고 그에 따라 행동하는 것을 선호하나요?',
    yes: 'J',
    no: 'P',
  },
  {
    id: 11,
    text: '즉흥적으로 행동하는 것이 더 편안하게 느껴지나요?',
    yes: 'P',
    no: 'J',
  },
  {
    id: 12,
    text: '일정을 미리 정해두는 것이 중요하다고 생각하나요?',
    yes: 'J',
    no: 'P',
  },
];

// 현재 질문의 인덱스
let currentQuestionIndex = 0;

// 답변을 저장할 배열
const answers = [];

// 첫 질문을 표시하는 함수
function displayQuestion() {
    const questionElement = document.getElementById("question");
    const questionNumberElement = document.getElementById("question-number");

    // 현재 질문을 가져와서 표시
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.text;
    questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;
}

// MBTI 결과를 계산하는 함수
function calculateMBTI() {
    let E_count = 0;
    let I_count = 0;
    let N_count = 0;
    let S_count = 0;
    let T_count = 0;
    let F_count = 0;
    let J_count = 0;
    let P_count = 0;

    // answers 배열을 순회하며 각 알파벳의 개수를 세기
    answers.forEach(answer => {
        switch (answer) {
            case 'E': E_count++; break;
            case 'I': I_count++; break;
            case 'N': N_count++; break;
            case 'S': S_count++; break;
            case 'T': T_count++; break;
            case 'F': F_count++; break;
            case 'J': J_count++; break;
            case 'P': P_count++; break;
        }
    });

    // MBTI 결과 계산
    const firstLetter = E_count >= I_count ? 'E' : 'I';
    const secondLetter = N_count >= S_count ? 'N' : 'S';
    const thirdLetter = F_count >= T_count ? 'F' : 'T';
    const fourthLetter = P_count >= J_count ? 'P' : 'J';

    return `${firstLetter}${secondLetter}${thirdLetter}${fourthLetter}`;
}

// "예" 버튼 클릭 시 호출되는 함수
function handleYesButtonClick() {
    // 현재 질문의 "예" 답변 저장
    answers.push(questions[currentQuestionIndex].yes);
    moveToNextQuestion();
}

// "아니오" 버튼 클릭 시 호출되는 함수
function handleNoButtonClick() {
    // 현재 질문의 "아니오" 답변 저장
    answers.push(questions[currentQuestionIndex].no);
    moveToNextQuestion();
}

// 다음 질문으로 이동하는 함수
function moveToNextQuestion() {
    currentQuestionIndex++;

    // 마지막 질문에 도달했는지 확인
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        // MBTI 결과 계산
        const mbtiResult = calculateMBTI();
        
        // 결과를 로컬스토리지에 저장
        localStorage.setItem("mbti_result", mbtiResult);
        
        // 결과 페이지로 이동
        window.location.href = "result.html";
    }
}

// 초기 질문 표시
displayQuestion();

// 버튼에 이벤트 리스너 추가
document.getElementById("yes-button").addEventListener("click", handleYesButtonClick);
document.getElementById("no-button").addEventListener("click", handleNoButtonClick);
