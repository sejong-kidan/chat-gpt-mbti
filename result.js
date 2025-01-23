// 로컬스토리지에서 mbti_result 값을 가져옵니다.
const mbtiResult = localStorage.getItem("mbti_result");

// id="result" 요소를 가져옵니다.
const resultElement = document.getElementById("result");

if (mbtiResult) {
  // mbtiResult 값이 존재하는 경우, 결과를 표시합니다.
  resultElement.textContent = `${mbtiResult}입니다!`;
} else {
  // mbtiResult 값이 없는 경우, "아직 테스트를 진행하지 않았습니다!"를 표시합니다.
  resultElement.textContent = "아직 테스트를 진행하지 않았습니다!";
  
  // 버튼의 텍스트를 "테스트 하러 가기"로 변경합니다.
  const restartBtn = document.getElementById("restart-btn");
  restartBtn.textContent = "테스트 하러 가기";
  restartBtn.addEventListener("click", function() {
    // 버튼을 클릭하면 테스트 페이지로 이동합니다.
    window.location.href = "./test.html";
  });
}
