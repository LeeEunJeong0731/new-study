// try/catch 문을 사용해 예외를 처리하는 코드를 작성
try {
  // 예외가 발생할 수 있는 코드
  let result = 10 / 0; // 이 부분에서는 0으로 나누기 시도하고 있습니다.
  console.log(result); // 이 코드는 실행되지 않습니다.
} catch (error) {
  // 예외가 발생했을 때 실행되는 코드
  console.error('에러가 발생했습니다: ' + error.message);
} finally {
  // 예외 발생 여부와 상관없이 항상 실행되는 코드
  console.log('이 부분은 항상 실행됩니다.');
}
