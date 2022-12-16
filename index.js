// import fs from 'fs'
// import {dirname,resolve} from 'path'
// import { fileURLToPath } from 'url'
// import {randomInt,createRandomPicker} from './lib/random.js';

// const url = import.meta.url;
// // console.log(url,fileURLToPath(url));
// const realURL = resolve(dirname(fileURLToPath(url)),'corpus/data.json');
// const dataStr = fs.readFileSync(realURL,{encoding:"utf-8"});
// // const articleLength = randomInt(3000, 5000); //设置文章长度介于3000~5000字

// // const sectionLength = randomInt(200, 500); // 设置段落长度介于200到500字
// const corpus = JSON.parse(dataStr);
// // const famous = randomPick(corpus.famous);
// const title = createRandomPicker(corpus.title);
// function sentence(pick, replacer) {
//     let ret = pick(); // 返回一个句子文本
//     // console.log(pick);
//     // console.log(ret);
//     for(const key in replacer) { // replacer是一个对象，存放替换占位符的规则
//       // 如果 replacer[key] 是一个 pick 函数，那么执行它随机取一条替换占位符，否则将它直接替换占位符
//       ret = ret.replace(new RegExp(`{{${key}}}`, 'g'),
//         typeof replacer[key] === 'function' ? replacer[key]() : replacer[key]);
//     }
//     return ret;
//   }
//   const {famous, bosh_before, bosh, said, conclude} = corpus;

//     const [pickFamous, pickBoshBefore, pickBosh, pickSaid, pickConclude] = [famous, bosh_before, bosh, said, conclude].map((item) => {
//             return createRandomPicker(item);
//     });

// sentence(pickFamous, {said: pickSaid, conclude: pickConclude}); // 生成一条名人名言

// console.log(sentence(pickBosh, {title}));  // 生成一条废话
import {fstat, readFileSync,readFile} from 'fs';
import {fileURLToPath} from 'url';
import {dirname, resolve} from 'path';

import {generate} from './lib/generator.js';
import {randomInt,createRandomPicker} from './lib/random.js';

import bodyParser from "body-parser";

import create from './handle/user.js'

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
// app.use(express.urlencoded({extended:false}));
// let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/xx',create);
app.get('/xx/show',(req,resp)=>{
  const url = import.meta.url;
  const path = resolve(dirname(fileURLToPath(url)),'show.html');
  const dataShow = readFileSync(path,{encoding:"utf-8"})
  resp.send(dataShow);
})
app.listen(8345,()=>{
  console.log('app is running at http://localhost:8345/xx/show');
})