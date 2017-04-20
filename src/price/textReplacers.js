import $ from 'jquery';
import _ from 'lodash';

export function replacerWithBold(string) {
  return _.replace(string, /(\d+)\b/g, replacer => {
    return `<b>${replacer}</b>`
  });
};

// export function ReplaceWithTable(string) {
//   return _.replace(string, //)
// }

export function decreaseAtPercent(string, percents){
  return _.replace(string, /(\d+)\b/, replacer => {
    const number = +replacer;
    return Math.ceil(number * 0.7);
  });
};

export function decreaseAndWrapWithBold(string){
  return replacerWithBold(decreaseAtPercent(string));
};
