/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MongoDB 연결 설정
const url = 'mongodb+srv://bob:makeit123@fine.mngnqv4.mongodb.net/post?retryWrites=true&w=majority';
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('DB 연결 성공');
}).catch((err) => {
  console.log('DB 연결 실패:', err);
});

// Mongoose 모델 정의
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model('Post', postSchema);

// CRUD 라우팅
// 게시물 생성
app.post('/posts', async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).send(post);
  } catch (err) {
    res.status(400).send(err);
  }
});

// 모든 게시물 조회
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send(err);
  }
});

// 특정 게시물 조회
app.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send();
    }
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
});

// 게시물 수정
app.patch('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!post) {
      return res.status(404).send();
    }
    res.status(200).send(post);
  } catch (err) {
    res.status(400).send(err);
  }
});

// 게시물 삭제
app.delete('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).send();
    }
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
});

// 서버 시작
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
*/
/*
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// MongoDB 연결 설정
const url = 'mongodb+srv://bob:makeit123@fine.mngnqv4.mongodb.net/post?retryWrites=true&w=majority';
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('DB 연결 성공');
}).catch((err) => {
  console.log('DB 연결 실패:', err);
});

// 정적 파일 제공 설정 (public 폴더 내 HTML, CSS, JS 파일 제공)
app.use(express.static(path.join(__dirname, 'public')));

// Mongoose 모델 정의
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model('Post', postSchema);

// 기본 루트 엔드포인트
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// CRUD 라우팅
// 게시물 생성
app.post('/posts', async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).send(post);
  } catch (err) {
    res.status(400).send(err);
  }
});

// 모든 게시물 조회
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send(err);
  }
});

// 특정 게시물 조회
app.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send();
    }
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
});

// 게시물 수정
app.patch('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!post) {
      return res.status(404).send();
    }
    res.status(200).send(post);
  } catch (err) {
    res.status(400).send(err);
  }
});

// 게시물 삭제
app.delete('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).send();
    }
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
});

// 서버 시작
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
*/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// MongoDB 연결 설정
const url = 'mongodb+srv://bob:makeit123@fine.mngnqv4.mongodb.net/post?retryWrites=true&w=majority';
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('DB 연결 성공');
}).catch((err) => {
  console.log('DB 연결 실패:', err);
});

// 정적 파일 제공 설정 (public 폴더 내 HTML, CSS, JS 파일 제공)
app.use(express.static(path.join(__dirname, 'public')));

// Mongoose 모델 정의
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model('Post', postSchema);

// 기본 루트 엔드포인트
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// CRUD 라우팅
// 게시물 생성
app.post('/posts', async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).send(post);
  } catch (err) {
    res.status(400).send(err);
  }
});

// 모든 게시물 조회
app.get('/posts', async (req, res) => {
  console.log('GET /posts 요청 수신');
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send(err);
  }
});

// 특정 게시물 조회
app.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send();
    }
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
});

// 게시물 수정
app.patch('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!post) {
      return res.status(404).send();
    }
    res.status(200).send(post);
  } catch (err) {
    res.status(400).send(err);
  }
});

// 게시물 삭제
app.delete('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).send();
    }
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
});

// 서버 시작
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
