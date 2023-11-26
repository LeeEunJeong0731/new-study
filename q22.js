//* 22.x가 y랑 같은지, 그리고 z가 0이 아닌지 확인하는 복합 조건식을 작성

const x = 10;
const y = 10;
const z = 5;

if (x === y && z !== 0) {
  console.log('x와 y는 같고, z는 0이 아닙니다.');
} else {
  console.log('조건이 충족되지 않습니다.');
}

// && 는 그리고 의 비교 연산자
