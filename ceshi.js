// const cor = {
//     title: [ '哈工大是一所怎样的学校', '什么是哈工大' ],
//     famous: [
//       '爱迪生{{said}}，天才是百分之一的勤奋加百分之九十九的汗水。{{conclude}}',
//       '查尔斯·史{{said}}，一个人几乎可以在任何他怀有无限热忱的事情上成功。{{conclude}}',
//       '培根说过，深窥自己的心，而后发觉一切的奇迹在你自己。{{conclude}}'
//     ],
//     bosh_before: [ '既然如此，', '那么，', '我认为，' ],
//     bosh: [
//       '{{title}}的发生，到底需要如何做到，不{{title}}的发生，又会如何产生。 ',
//       '而这些并不是完全重要，更加重要的问题是，',
//       '{{title}}，到底应该如何实现。 '
//     ],
//     conclude: [ '这不禁令我深思。 ', '带着这句话，我们还要更加慎重的审视这个问题: ', '这启发了我。' ],
//     said: [ '曾经说过', '在不经意间这样说过', '说过一句著名的话' ]
//   };
// function xx({cor}={})
// {
//     console.log(cor.title);
// }
// xx({cor});
function test(person){
  person.age = 26;
  person = {
    name:'yyy',
    age:30
  }
  return person;
}
const p1 = {
  name:'yck',
  age:25
}
const p2 = test(p1);
console.log(p1);
console.log(p2);