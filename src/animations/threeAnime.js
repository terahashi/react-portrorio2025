import * as THREE from 'three'; //Three.js 本体を読み込みます。
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; //.glbや.gltf「形式の3Dモデルを読み込むための専用ツール（ローダー）を読み込みます。」
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//Reactで「Three.js」を使用する。
//HTML + Three.jsのコードと「大差はない。」
const initThree = (container) => {
  // ⬆︎引数(container)は「#cat-area」
  // containerは「3d.jsxから渡ってきた initThree(containerRef.current); 」 = #cat-areaに設定したref
  //「 getBoundingClientRect で「#cat-areaの表示されている幅・高さ」を取得するもの。」
  const rect = container.getBoundingClientRect(); //containerは「#cat-area」

  // ================
  // ①基本セットアップ
  // ================
  // シーン(3Dの舞台を作成する)
  const scene = new THREE.Scene();

  // カメラ(cat-areaに合わせる)
  const camera = new THREE.PerspectiveCamera(
    60,
    rect.width / rect.height, //rectで「cat-area」のサイズ取得
    0.1,
    1000
  );
  camera.position.set(0, 1, 3);

  // レンダラー(cat-areaに合わせる)
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // WebGLRendererはブラウザを3Dで表現するための関数。「antialias:true=ギザギザを減らす」「alpha:true=背景を透明にできる」
  renderer.setSize(rect.width, rect.height); // setSizeで描画サイズを「rect「cat-area」の表示サイズにする」
  renderer.setPixelRatio(window.devicePixelRatio); //「setPixelRatio = 画質を端末に合わせる（高画質になる）」
  container.appendChild(renderer.domElement); //「cat-area」にレンダラーのDOM要素を追加

  // OrbitControls(マウスで触れる)カメラコントローラーを作成
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // マウス操作を滑らかにする
  controls.dampingFactor = 0.04;
  controls.enableZoom = false; //  ズーム可能になる(必要なければ false)
  controls.enablePan = false; // 横移動禁止

  // ======================
  // ②ライト (3Dモデルは「光」が無いと黒い影のように見えるので、ライトを設置します)
  // 下記全てをコメントアウトすると「犬が真っ黒になります」
  // ======================
  const light = new THREE.DirectionalLight(0xffffff, 2.5); //DirectionalLight = 太陽のように一方向から照らす光
  light.position.set(2, 2, 2); // 光の位置を設定
  scene.add(light); // シーンに光を追加
  scene.add(new THREE.AmbientLight(0xffffff, 3.5)); // AmbientLight = 部屋全体を明るくする光

  // ======================
  // ③犬モデルの読み込み
  // ======================
  let cat; // cat変数を宣言（後で3Dモデルを入れるために let で用意）
  const loader = new GLTFLoader(); // 3Dモデルを読み込む準備！GLTFLoaderのインスタンスを作成

  //3Dモデルファイルを読み込む(.glbファイル)
  //loader.loadは「3Dモデルファイルを読み込む処理」であり、loader.load()は非同期処理
  loader.load(
    '/models/cat_robo.glb', // 「/publicを書かなくて良し」➡︎publicディレクトリは ルートとして扱われる。だから/public/◯◯◯と書いてはいけない

    (gltf) => {
      cat = gltf.scene; // 読み込んだ3Dモデルを let cat; に代入
      cat.scale.set(0.5, 0.5, 0.5); // ⭕️(ここ大事)3Dモデルの大きさを調整
      scene.add(cat); // シーン(scene)に3Dモデルを追加

      // ⬇︎OrbitControlsを使用するとズレるので「3Dモデル中央を、中心に移動」
      // モデルのサイズ・中心を計算できるのは「読み込み後＝loader.load内」だけ。故に loader.load の中で中心の位置調整をする必要がある。
      const box = new THREE.Box3().setFromObject(cat); // モデル全体の大きさを取得。Box3=見えない四角い箱。setFromObject(cat) = cat（犬の3Dモデル）をすっぽり囲む箱を作る
      const center = box.getCenter(new THREE.Vector3()); // boxの中心座標（モデルの重心）を取得
      cat.position.x -= center.x; // x軸=3Dモデルを中心に合わせる
      cat.position.y -= center.y * 1; // y軸=3Dモデルの中心より"下に1移動"させる。(1にすると中心より上に移動する)
      cat.position.z -= center.z; // z軸=3Dモデルを正面の中心に合わせる
    },

    undefined, // ロード中の処理（今回は特に何もしないので undefined）
    (e) => console.error(e) // エラーがあった場合にコンソールに表示
  );

  // ======================
  // ④アニメーション
  // 犬を少しずつ回転させている
  // requestAnimationFrame()メソッドは「ブラウザにアニメーションを行いたいことを知らせ、指定した関数を呼び出して次の再描画の前にアニメーションを更新することを要求します。」
  // ======================
  let stop = false; //stop

  function animate() {
    if (stop) return; //もしも「stopにtrueが渡ってきた場合」3dアニメーションの処理を中断する

    requestAnimationFrame(animate); //ブラウザにアニメーションを行いたいとリクエストする

    //// ⬇︎もしも「③犬モデルの読み込み」のlet catに【3Dモデルが入っている場合に回転させる。】
    if (cat) cat.rotation.y -= 0.015; // y軸がゆっくり回転する。-＝で左回転、+=で右回転

    controls.update(); // マウス操作に「必要なupdate()関数」
    renderer.render(scene, camera); // シーンとカメラを使って「描画を行う」
  }
  animate();

  // ======================
  // ⑤リサイズ対応(画面サイズ変更への対応)
  // ウィンドウのサイズが変わったときに、「レンダラーとカメラのアスペクト比を調整します。」
  // ======================
  const handleResize = () => {
    const rect = container.getBoundingClientRect(); //'resize'でウィンドウのサイズが変わったときに「"getBoundingClientRect"で、container(#cat-Area)の「表示されている幅・高さ」を取得するもの。」
    renderer.setSize(rect.width, rect.height); // setSizeで描画サイズを「rect「cat-area」の表示サイズにする」
    camera.aspect = rect.width / rect.height; ////カメラの「rect「cat-area」アスペクト比を更新」
    camera.updateProjectionMatrix(); //カメラの投影行列を更新
  };
  window.addEventListener('resize', handleResize); //addEventListener

  // ======================
  // ⑥cleanup処理
  // ・「3d.jsxの「useEffectで “アンマウント(他ページへ遷移する、つまりコンポーネントが消える時)”」が起きると「cleanup()が実行される。」
  // ・cleanupが使用される時➡︎“アンマウント”する時に、3d.jsxの「 useEffectに記載した3d.jsxのcleanup() 」が発動し、
  //animate(); ➡︎ アニメーションの「メモリリークを防ぐためです。」
  // ======================
  return () => {
    stop = true; //「3d.jsxのcleanup()」が呼ばれた時、アニメーションループ（animate関数のif (stop) return;）が止まる
    window.removeEventListener('resize', handleResize); //ブラウザの「resizeイベントを解除」する
    renderer.dispose(); // 「GPUメモリ」にアップロードしたデータを破棄する
    controls.dispose(); // controls(OrbitControls内部) のイベントリスナーやメモリを破棄
    container.innerHTML = ''; //DOM（canvas）を完全に消す
  };
};

export default initThree;
