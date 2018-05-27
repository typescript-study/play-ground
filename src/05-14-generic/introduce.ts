/**
 * TODO:
 * 제네릭을 사용하여 런타임시에 결정되는 값의
 * 타입을 반환하는 함수로 재작성해주세요
 */
// function simple(data: any) {
function simple<T>(data: T):T {
  // let val:string = typeof data;
  // if(typeof data === 'string'){
  //   val = 'string';
  // }else if(typeof data === 'number'){
  //   val = 'number';
  // }else if(typeof data === 'boolean'){
  //   val = 'boolean';
  // }
  return typeof data;
  // return val;
}

/**
 * TODO:
 * 제네릭을 사용하여 sumAll 함수를 만들어주세요
 */
function sumAll<T>(data: T[]):T {
  return data.reduce((prev, curr) => prev + curr, 0);
}

/**
 * TODO:
 * 위의 sumAll 함수를 아래에 화살표 함수로 바꿔주세요
 */
// function sumAllArrow(data:any ) {
//   // TODO:
// }

let sumAllArrow:<T>(data:T[]) => T= sumAll;
/**
 * TODO:
 * 유니온 타입과 extends를 사용하여 제네릭을 함께 사용해주세요
 */
function strConcatNum<T extends string | number>(str: T, num: T):T {
  return str+num;
}

export {
  simple,
  sumAll,
  sumAllArrow,
  strConcatNum,
}