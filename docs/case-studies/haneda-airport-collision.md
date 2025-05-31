---
description: 2024年1月2日に発生した羽田空港地上衝突事故における状況認識と意思決定の問題要因を詳細に分析。JCG機・JAL機・管制官それぞれの認識ミスや判断の背景を明らかにし、今後の安全対策に向けた議論を行います。
---
# 羽田空港地上衝突事故での状況認識と意思決定

!!! info "このページについて"
    ここでは、羽田空港地上衝突事故（2024年1月2日）における状況認識と意思決定の問題要因を詳細に分析します。  
    分析は、提供されたウェブ検索結果および関連情報を基に行い、2025年6月1日現在の状況を反映します。

## 背景  
2024年1月2日に発生した羽田空港地上衝突事故では、日本航空（JAL）516便（エアバスA350-941）が着陸中に、海上保安庁（JCG）のボンバルディアDHC-8-315（JA722A）が滑走路上に誤って進入し衝突しました。JAL機の乗客・乗員379人は全員脱出しましたが、JCG機の5人が死亡し、1人が重傷を負いました。（[Wikipedia](https://en.wikipedia.org/wiki/2024_Haneda_Airport_runway_collision)）

前日の能登半島地震の影響でJCG機は救援任務中であり、年明けの忙しい時期であったことが背景にあります。

## 問題定義

本件は、状況認識と意思決定に問題があったのか？

- **状況認識の問題**:  
    - 海上保安庁機の乗員は管制官の指示を誤解し、滑走路進入許可があると認識しました。
    - 日本航空機の乗員は滑走路上の海上保安庁機を衝突直前まで認識せず、管制官も進入に気づきませんでした。  
- **意思決定の問題**:  
これらの誤認識に基づき、海上保安庁機は滑走路に入る決定を下し、日本航空機は着陸を続け、管制官は介入しませんでした。  

## 分析  

### 方法論  
分析には、ウェブ検索結果から得られた情報（例：運輸安全委員会の経過報告、ニュース記事）を用いました。状況認識と意思決定の各要因を、関係者（JCG機乗員、JAL機乗員、管制官）ごとに評価しました。

### 状況認識の問題要因  
状況認識は、環境要素の知覚、意味の理解、未来の状態予測から成ります。この事故では、以下の要因が状況認識に問題を引き起こしました。

=== "JCG機（A機）の状況認識"
    #### JCG機（A機）の状況認識
    |要因|説明|
    |---|---|
    |**誤解した指示**|JCG機の機長と副操縦士は、管制官からの「ナンバーワン、タキシング・トゥ・ホールディング・ポイントC5」という指示を、<br>滑走路進入許可と誤解しました（[産経ニュース](https://www.sankei.com/article/20241225-R4KFNVOAMBKUNO76LKG5XSTM4Q/)）。これは、地震救援任務の優先感から生じた可能性があります（[運輸安全委員会](https://www.yomiuri.co.jp/national/20241225-OYT1T50101/)）|
    |**通信の混乱**|JCG機はB機（JAL機）の着陸許可が発行された17:44:56以前に周波数を変更しており、B機の状況を知覚できませんでした（[運輸安全委員会](https://jtsb.mlit.go.jp/aircraft/rep-acci/keika20241225-JA722A_JA13XJ.pdf)）|
    |**環境要因**|停止線灯が作動しておらず、視覚的合図が不足していました（[運輸安全委員会](https://jtsb.mlit.go.jp/aircraft/rep-acci/keika20241225-JA722A_JA13XJ.pdf)）|
    |**通信中の注意散漫**|衝突直前に通信官Aが小松空港の電源車について話しており、状況認識に影響を与えた可能性があります（[運輸安全委員会](https://jtsb.mlit.go.jp/aircraft/rep-acci/keika20241225-JA722A_JA13XJ.pdf)）|


=== "JAL機（B機）の状況認識"
    #### JAL機（B機）の状況認識
    |要因|説明|
    |---|---|
    |**滑走路上のA機の認識失敗**|B機の乗員は、衝突直前までA機を認識せず、HUD（ヘッドアップディスプレイ）を「Declutter1」モードで使用していました（[運輸安全委員会](https://jtsb.mlit.go.jp/aircraft/rep-acci/keika20241225-JA722A_JA13XJ.pdf)）|
    |**視界条件**:|事故は日没後で月も出ていなく、A機の外部灯火（白ストロボ、下部尾灯位置灯、上部尾灯位置灯）が限定的に見えた可能性があります（[運輸安全委員会](https://jtsb.mlit.go.jp/aircraft/rep-acci/keika20241225-JA722A_JA13XJ.pdf)）|
    |**最終アプローチの集中**|風向変化に対応しながら着陸に集中しており、滑走路上の障害物を見逃した可能性があります（[運輸安全委員会](https://jtsb.mlit.go.jp/aircraft/rep-acci/keika20241225-JA722A_JA13XJ.pdf)|


=== "管制官（タワー東）の状況認識"
    #### 管制官（タワー東）の状況認識  
    |要因|説明|
    |---|---|
    |**A機の進入認識失敗**|管制官はA機が17:46:13に滑走路に入り停止したことを認識せず、複数の航空機（5機を管理）の交通管理に集中していました（[運輸安全委員会](https://jtsb.mlit.go.jp/aircraft/rep-acci/keika20241225-JA722A_JA13XJ.pdf)）|
    |**監視システムの警告見逃し**|滑走路占有監視支援機能が17:46:20から警報を発しましたが、音声警報がなく、視覚的警報を見逃しました（[運輸安全委員会](https://jtsb.mlit.go.jp/aircraft/rep-acci/keika20241225-JA722A_JA13XJ.pdf)） |
    |**高負荷状況**|1月1日の交通量は1,345機でピーク時（17:47）に達し、管制官の注意が分散していました（[運輸安全委員会](https://jtsb.mlit.go.jp/aircraft/rep-acci/keika20241225-JA722A_JA13XJ.pdf)）|

### 意思決定の問題要因  
意思決定は状況認識に基づく行動選択であり、この事故では以下の要因が問題を引き起こしました。

=== "JCG機（A機）の意思決定"
    #### JCG機（A機）の意思決定
    |要因|説明|
    |---|---|
    |**誤った認識に基づく行動**|A機は誤った状況認識（滑走路進入許可があると信じた）に基づき、滑走路に入る決定を下しました（[産経ニュース](https://www.sankei.com/article/20241225-R4KFNVOAMBKUNO76LKG5XSTM4Q/)） |
    |**時間的圧力**|遅延（17:25から17:32）や乗員の帰還考慮から、急いで離陸準備を進める決定をしました（[運輸安全委員会](https://jtsb.mlit.go.jp/aircraft/rep-acci/keika20241225-JA722A_JA13XJ.pdf)） |
    |**通信中の注意散漫**|衝突直前に通信官Aとの会話が意思決定に影響を与えた可能性があります（[運輸安全委員会](https://jtsb.mlit.go.jp/aircraft/rep-acci/keika20241225-JA722A_JA13XJ.pdf)）|

=== "JAL機（B機）の意思決定"
    #### JAL機（B機）の意思決定
    |要因|説明|
    |---|---|
    |**着陸継続**|B機はA機を認識せず、風向変化に対応しながら着陸を継続する決定をしました（[運輸安全委員会](https://jtsb.mlit.go.jp/aircraft/rep-acci/keika20241225-JA722A_JA13XJ.pdf)）|
    |**ゴーアラウンドの欠如**|状況が不安定である可能性（風変化）にもかかわらず、ゴーアラウンドを決定しませんでした（[運輸安全委員会](https://jtsb.mlit.go.jp/aircraft/rep-acci/keika20241225-JA722A_JA13XJ.pdf)） |
    |**衝突後の迅速な意思決定**|衝突後、乗員は即座に避難を決定し、L1、R1、L4の出口を使用しました（[運輸安全委員会](https://jtsb.mlit.go.jp/aircraft/rep-acci/keika20241225-JA722A_JA13XJ.pdf)）|

=== "管制官（タワー東）の意思決定"
    #### 管制官（タワー東）の意思決定

    |要因|説明|
    |---|---|
    |**介入の欠如**|A機の進入に気づかず、B機にゴーアラウンドを指示する決定をしませんでした（[運輸安全委員会](https://jtsb.mlit.go.jp/aircraft/rep-acci/keika20241225-JA722A_JA13XJ.pdf)）|
    |**交通管理の優先**|高負荷状況下でB機の着陸許可を優先し、A機の位置確認を怠りました（[運輸安全委員会](https://jtsb.mlit.go.jp/aircraft/rep-acci/keika20241225-JA722A_JA13XJ.pdf)）|
    |**警報対応の欠如**|滑走路占有監視システムの警報を見逃し、介入する意思決定をしませんでした（[運輸安全委員会](https://jtsb.mlit.go.jp/aircraft/rep-acci/keika20241225-JA722A_JA13XJ.pdf)）|

### 比較分析  
以下の表は、状況認識と意思決定の問題要因をまとめます。

| **関係者** | **状況認識の問題** | **意思決定の問題** |
|---|---|---|
| JCG機（A機） | 指示誤解、通信混乱、停止線灯未作動、注意散漫 | 誤認識に基づく滑走路進入、時間的圧力による急ぎ |
| JAL機（B機） | A機認識失敗、視界条件不良、着陸集中による見落とし | 着陸継続、ゴーアラウンド欠如、衝突後の迅速な避難決定 |
| 管制官（タワー東）| A機進入認識失敗、高負荷状況、警報見逃し | 介入欠如、交通管理優先、警報対応の欠如 |

### 分析結果
- **状況認識の失敗**:  
    - JCG機の乗員は「ナンバーワン、タキシング・トゥ・ホールディング・ポイントC5」という指示を滑走路進入許可と誤解しました（[産経ニュース](https://www.sankei.com/article/20241225-R4KFNVOAMBKUNO76LKG5XSTM4Q/)）
    - JAL機の乗員は滑走路上のJCG機を認識せず、管制官もレーダー画面上の進入に気づかず、監視システムの警告を見逃しました（[運輸安全委員会](https://www.yomiuri.co.jp/national/20241225-OYT1T50101/)）
- **意思決定の失敗**:  
JCG機は誤った認識に基づき滑走路に入り、JAL機は着陸を続け、管制官は介入せず、これが衝突に至りました（[ニューヨークタイムズ](https://www.nytimes.com/2024/12/25/business/tokyo-haneda-plane-crash.html)）

## 議論と限界

- **状況認識の複雑性**:  
この事故は、複数の要因（人間、技術、環境）が重なり合った結果であり、単一の要因に帰結することはできません。  
- **意思決定の時間的制約**:  
特に管制官は高負荷状況下で迅速な意思決定が求められ、警報の視覚的提示が認識されなかったことは重大な問題です。  
- **倫理的考慮**:  
JCG機の救援任務の優先感が誤った状況認識を助長した可能性があり、緊急時の意思決定プロトコルの見直しが必要です。  

## 結論  
この事故は、**状況認識と意思決定** の複数の失敗が重なり発生したと考えられます。  

羽田空港地上衝突事故では、状況認識と意思決定に複数の問題要因が見受けられました。JCG機の誤解、JAL機の認識失敗、管制官の警報見逃しが主な要因であり、これらの失敗が衝突に至りました。詳細な調査と対策が今後の安全確保に重要です。

詳細な調査は引き続き重要と思います。


## 主な引用文献
- [羽田空港航空機衝突事故対策検討委員会 - 国土交通省](https://www.mlit.go.jp/koku/koku_tk13_000045.html)
- [羽田空港地上衝突事故 - Wikipedia](https://ja.wikipedia.org/wiki/羽田空港地上衝突事故)
- [羽田衝突事故は「3つの要因」衝突15秒前、異変察知も回避できず 安全委が経過報告公表 - 産経ニュース](https://www.sankei.com/article/20241225-R4KFNVOAMBKUNO76LKG5XSTM4Q/)
- [羽田空港衝突事故、運輸安全委員会による経過報告書の要旨 - 読売新聞](https://www.yomiuri.co.jp/national/20241225-OYT1T50101/)
- [Human Error Cited for Collision of Two Planes at Tokyo Airport - The New York Times](https://www.nytimes.com/2024/12/25/business/tokyo-haneda-plane-crash.html)
- [2024 Haneda Airport runway collision - Wikipedia](https://en.wikipedia.org/wiki/2024_Haneda_Airport_runway_collision)
- [Root Cause Analysis: Haneda Airport Runway Collision 2024](https://www.prosolvr.tech/knowledgebase/haneda-airport-collision.html)
- [Details emerge about moments before deadly Haneda Airport collision - The Japan Times](https://www.japantimes.co.jp/news/2024/01/04/japan/haneda-airport-collision-causes/)
- [Human error caused JAL jet collision at Haneda Airport: safety board - The Japan Times](https://www.japantimes.co.jp/news/2024/12/25/japan/haneda-collision-report/)
- [Japan plane crash: a visual guide to the Tokyo airport collision - The Guardian](https://www.theguardian.com/world/2024/jan/02/japan-plane-crash-visual-guide-tokyo-airport-accident)