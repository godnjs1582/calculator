const REGEX = /(\+|\-|\*|\/)/;

const calulate = (lf, op, rf) => {
  return { "+": lf + rf, "-": lf - rf, "*": lf * rf, "/": lf / rf }[op];
};

function parseFormula(formula) {
  while (formula.match(REGEX)) {
    const [prev, operator, next, ...rest] = formula
      .split(REGEX)
      .map((v) => (isNaN(+v) ? v : +v));

    formula = calulate(prev, operator, next) + rest.join("");
  }
  return formula;
}

console.log(parseFormula("5+2*2"));

// test("사칙 연산 테스트", () => {
//   expect(parseFormula("1+1")).toBe(2);
//   expect(parseFormula("3*3")).toBe(9);
//   expect(parseFormula("1/4")).toBe(0.25);
//   expect(parseFormula("5-2")).toBe(3);
//   expect(parseFormula("5-2+2")).toBe(5);
// });

// test("연산자는 맨 마지막에 올 수 없다", () => {
//   expect("1++").toBe(false);
//   expect("1+").toBe(false);
//   expect("1-").toBe(false);
//   expect("5--").toBe(false);
//   expect("1/").toBe(false);
//   expect("5*").toBe(false);
//   expect("4/").toBe(false);
//   expect("3+/").toBe(false);
// });

// test("숫자들 사이에 비 부호연산자(*,/)와 부호 연산자(+,-)가 순서대로 올 수 있다.", () => {
//   expect("4*-4").toBe(-16);
//   expect("4*+4").toBe(16);
//   expect("4/+4").toBe(1);
//   expect("4/-4").toBe(-1);
// });

// test("중괄호는 반드시 '(' 와 ')'가 순서대로 하나의 쌍을 이루어서만 사용할 수 있다", () => {
//   expect("(1+2)").toBe(3);
//   expect("((3))").tobe(3);
//   expect("((").tobe(false);
//   expect("))").tobe(false);
//   expect("((1)").toBe(false);
//   expect(")4(").toBe(false);
// });

// test("')'바로 앞에는 숫자만 올 수 있다", () => {
//   expect("((3-)5)").toBe(false);
//   expect("((-2+4)*5)").toBe(10);
// });
// test("*와 /는 단독으로 숫자 앞에 사용될 수 없다", () => {
//   expect("*5").toBe(false);
//   expect("/5").toBe(false);
// });

// test("+와 -는 단독으로 숫자 앞에 사용될 수 있다", () => {
//   expect("+5").toBe(5);
//   expect("-5").toBe(-5);
// });

// test("중괄호 사이에 연산자가 따로 없으면 *가", () => {
//   expect("(1(3)1)").tebe(3);
//   expect("(3((4))2+1)").tobe(25);
// });
