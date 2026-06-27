import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI の基礎 | Yuma Fujita",
  description:
    "AIの基礎知識を体系的にまとめたページ。機械学習・ディープラーニング・LLM・RAGなど主要トピックを解説。",
  openGraph: {
    title: "AI の基礎 | Yuma Fujita",
    description: "AIの基礎知識を体系的にまとめたページ。",
    type: "website",
  },
};

type Section = {
  id: string;
  number: string;
  title: string;
  color: string;
  intro: string;
  items: { term: string; desc: string }[];
};

const sections: Section[] = [
  {
    id: "what-is-ai",
    number: "01",
    title: "AI とは何か",
    color: "#00d4ff",
    intro:
      "人工知能（AI）は、人間の知的活動をコンピュータで再現しようとする技術領域の総称です。機械学習・深層学習はその中の手法群であり、階層関係があります。",
    items: [
      {
        term: "AI (人工知能)",
        desc: "人間の知的活動（推論・判断・学習）をコンピュータで模倣する技術の総称。ルールベースから統計的アプローチまで幅広い手法を含む。",
      },
      {
        term: "Machine Learning (機械学習)",
        desc: "明示的なルールを書く代わりに、データからパターンを自動的に学習するAIの一手法。AIのサブセット。",
      },
      {
        term: "Deep Learning (深層学習)",
        desc: "多層ニューラルネットワークを用いる機械学習の一種。大量データと計算資源で高精度を実現。機械学習のサブセット。",
      },
      {
        term: "AI / ML / DL の関係",
        desc: "AI ⊃ Machine Learning ⊃ Deep Learning という包含関係。「AIを使う」とは多くの場合MLまたはDL手法を指す。",
      },
    ],
  },
  {
    id: "ml-basics",
    number: "02",
    title: "機械学習の基礎",
    color: "#00ff9d",
    intro:
      "機械学習はデータの与え方と目的によって大きく3カテゴリに分類されます。問題設定に応じて適切な手法を選ぶことが重要です。",
    items: [
      {
        term: "教師あり学習 (Supervised)",
        desc: "入力と正解ラベルのペアで学習。分類（スパム判定・画像認識）と回帰（価格予測）が代表的タスク。アルゴリズム例: 線形回帰・SVM・ランダムフォレスト・NN。",
      },
      {
        term: "教師なし学習 (Unsupervised)",
        desc: "ラベルなしデータからパターンを発見。クラスタリング（k-means）・次元削減（PCA・t-SNE）・密度推定が主なタスク。",
      },
      {
        term: "強化学習 (Reinforcement)",
        desc: "エージェントが環境と相互作用しながら報酬を最大化する行動を学習。ゲームAI（AlphaGo）・ロボット制御・LLMのRLHFに活用。",
      },
      {
        term: "自己教師あり学習 (Self-Supervised)",
        desc: "データ自体から擬似ラベルを生成して学習。BERTのMasked LM・GPTのNext Token Prediction がその代表例。大規模事前学習の主流。",
      },
      {
        term: "過学習と汎化",
        desc: "訓練データに過剰適合（過学習）すると未知データに弱くなる。正則化（L1/L2）・ドロップアウト・早期停止・データ拡張で対処。",
      },
      {
        term: "バイアス–バリアンストレードオフ",
        desc: "モデルの複雑度を上げるとバリアンス↑・バイアス↓。単純すぎると逆。最適な複雑度（モデル選択）を検証データで探す。",
      },
    ],
  },
  {
    id: "deep-learning",
    number: "03",
    title: "ディープラーニング",
    color: "#a78bfa",
    intro:
      "多層のニューラルネットワークによって、画像・音声・テキストなど非構造化データの特徴を自動的に学習します。アーキテクチャの選択がタスク性能を大きく左右します。",
    items: [
      {
        term: "ニューラルネットワーク",
        desc: "入力層・隠れ層・出力層からなる層状グラフ。各ノードが重み付き線形変換＋活性化関数（ReLU・sigmoid）を適用。誤差逆伝播法（backprop）で学習。",
      },
      {
        term: "CNN (畳み込みNN)",
        desc: "局所的なパターンを検出する畳み込み層とプーリング層で構成。画像分類・物体検出・セグメンテーションに強い。ResNet・EfficientNet が代表。",
      },
      {
        term: "RNN / LSTM / GRU",
        desc: "系列データを扱うために前時刻の隠れ状態を保持する再帰構造。長期依存に弱い RNN を改良したのが LSTM・GRU。テキスト・時系列に使用。",
      },
      {
        term: "Transformer",
        desc: "自己注意機構（Self-Attention）で全トークン間の依存関係を並列計算。RNNより長距離依存を効率よく捉え、現代の基盤モデルの礎。2017年 Vaswani et al. 提案。",
      },
      {
        term: "Self-Attention",
        desc: "Q（Query）・K（Key）・V（Value）行列でトークン間の関連度を計算: Attention(Q,K,V) = softmax(QKᵀ/√d_k)V。位置によらず全トークンを参照できる。",
      },
      {
        term: "最適化アルゴリズム",
        desc: "SGD に加え、Adam（AdaGrad + RMSProp）が実務標準。学習率スケジューリング（Warmup + Cosine Decay）と組み合わせて安定学習を実現。",
      },
    ],
  },
  {
    id: "llm",
    number: "04",
    title: "大規模言語モデル (LLM)",
    color: "#f59e0b",
    intro:
      "数百億〜数兆パラメータを持つTransformerベースの言語モデル。大規模なWebテキストで事前学習し、少量のFine-tuningや指示チューニングで汎用的なタスクをこなします。",
    items: [
      {
        term: "事前学習 (Pre-training)",
        desc: "Next Token Prediction タスクで大規模コーパス（数百B〜数TトークンのWebデータ）を学習。言語の統計的構造・世界知識を内部表現に圧縮する。",
      },
      {
        term: "Tokenization",
        desc: "テキストをサブワード単位（BPE・SentencePiece）のトークン列に変換。日本語など形態素が多い言語はトークン効率が下がりやすい。",
      },
      {
        term: "Fine-tuning / SFT",
        desc: "事前学習済みモデルに対し、タスク固有データで追加学習。Supervised Fine-Tuning（SFT）は人間が書いた指示–応答ペアで指示追従能力を付与する。",
      },
      {
        term: "RLHF",
        desc: "Reinforcement Learning from Human Feedback。人間の好み評価から報酬モデルを作り、PPOで LLM を調整。ChatGPT・InstructGPT の中核技術。",
      },
      {
        term: "Zero-shot / Few-shot Learning",
        desc: "モデルの重みを更新せずにプロンプトだけで推論。Zero-shot は例なし、Few-shot は数例をプロンプトに含める。In-Context Learning とも呼ぶ。",
      },
      {
        term: "コンテキストウィンドウ",
        desc: "LLMが一度に処理できるトークン数の上限。GPT-4 は 128k、Gemini は 1M+ トークン。長文文書・会話履歴の取り扱いに直結する制約。",
      },
    ],
  },
  {
    id: "prompt-engineering",
    number: "05",
    title: "プロンプトエンジニアリング",
    color: "#f472b6",
    intro:
      "モデルの重みを変えずに、プロンプトの書き方だけで出力品質を改善する技術です。実装コストが低く、LLM活用の第一歩として重要なスキルです。",
    items: [
      {
        term: "System Prompt",
        desc: "会話全体に適用されるペルソナ・制約・出力フォーマットを定義するプロンプト。ユーザー入力より優先度が高い（多くの実装では）。",
      },
      {
        term: "Chain-of-Thought (CoT)",
        desc: "「ステップバイステップで考えてください」と促し、推論過程を中間出力させる。数学・論理問題で精度が大幅に向上。",
      },
      {
        term: "Few-shot Prompting",
        desc: "入力と期待出力の具体例をプロンプト内に複数含める。例の質と量がモデルの傾向を誘導する。タスク定義が難しい場合に有効。",
      },
      {
        term: "ReAct / Tool Use",
        desc: "Reasoning（思考）と Action（外部ツール呼び出し）を交互に繰り返すパターン。検索・計算・API呼び出しをLLMが自律的に組み合わせる。",
      },
      {
        term: "Temperature / Top-p",
        desc: "Temperature を下げると決定論的・保守的な出力に、上げると多様な出力に。Top-p はサンプリング候補を累積確率で絞る。創造性と一貫性のバランスを制御。",
      },
      {
        term: "ハルシネーション対策",
        desc: "LLMが事実でない内容を自信を持って生成する現象。RAGで外部知識を補完、CoTで根拠を明示、出力検証ステップを追加することで軽減。",
      },
    ],
  },
  {
    id: "rag",
    number: "06",
    title: "RAG (検索拡張生成)",
    color: "#00d4ff",
    intro:
      "Retrieval-Augmented Generation。LLMの知識をパラメータに限定せず、外部ドキュメントを動的に検索してコンテキストとして与えることで、最新・専門知識への対応とハルシネーション抑制を実現します。",
    items: [
      {
        term: "基本アーキテクチャ",
        desc: "① ドキュメントをチャンク分割 → ② Embedding モデルでベクトル化 → ③ ベクトルDBに格納 → ④ クエリを同様にベクトル化 → ⑤ 近傍検索 → ⑥ 取得チャンク＋質問をLLMに渡す。",
      },
      {
        term: "Embedding モデル",
        desc: "テキストを意味的な高次元ベクトルに変換。text-embedding-ada-002（OpenAI）・E5・BGEなど。コサイン類似度で意味的近傍を検索する。",
      },
      {
        term: "ベクトルDB",
        desc: "近似最近傍探索（ANN）に特化したDB。pgvector・Pinecone・Weaviate・Chroma・Qdrantなど。HNSW・IVFFlatなどのインデックス構造で高速化。",
      },
      {
        term: "ハイブリッド検索",
        desc: "Embedding の意味検索（Dense）と BM25 などのキーワード検索（Sparse）を組み合わせる。RRF（Reciprocal Rank Fusion）でランキングを統合する手法が一般的。",
      },
      {
        term: "チャンク戦略",
        desc: "固定長・文単位・段落単位・Semantic chunking など。チャンクサイズと重複（overlap）は検索精度と処理コストのトレードオフ。Parent Document Retriever も有効。",
      },
      {
        term: "Reranker",
        desc: "ベクトル検索の top-k 結果を Cross-Encoder（BERT系）で再スコアリングし精度を改善。検索速度と精度の二段階最適化。Cohere Rerank が代表的サービス。",
      },
    ],
  },
  {
    id: "evaluation",
    number: "07",
    title: "AI の評価と課題",
    color: "#00ff9d",
    intro:
      "AIシステムの品質を客観的に測定する指標と、現実の課題を理解しておくことはエンジニアリングの基本です。",
    items: [
      {
        term: "分類評価指標",
        desc: "Accuracy（正解率）・Precision（適合率）・Recall（再現率）・F1スコア・AUC-ROC。不均衡データでは Accuracy は意味を持ちにくく F1 や AUC が重視される。",
      },
      {
        term: "生成モデルの評価",
        desc: "BLEU・ROUGE（テキスト重複ベース）は参照文が必要。LLM-as-a-Judge（GPT-4等で自動評価）や人間評価が現実的。RAGaskなどのフレームワークも存在。",
      },
      {
        term: "ハルシネーション",
        desc: "LLMが根拠なく事実に反する内容を生成する現象。Faithfulness（提示ソースとの一致度）と Factuality（外部事実との一致度）で別々に評価する。",
      },
      {
        term: "バイアスと公平性",
        desc: "学習データの偏りがモデルに引き継がれ、性別・人種・地域などによる差別的出力を生む。Demographic Parity・Equalized Odds などの公平性指標で測定・緩和。",
      },
      {
        term: "AI セキュリティ",
        desc: "プロンプトインジェクション（敵対的指示の埋め込み）・ジェイルブレイク・データポイズニングなど。LLMアプリケーションは入出力の両方で検証が必要。",
      },
      {
        term: "持続可能性",
        desc: "大規模モデルの学習・推論には膨大な電力を消費。省エネモデル（量子化・蒸留・スパース化）の研究が活発。Carbon Footprint の透明性も問われている。",
      },
    ],
  },
];

function SectionCard({ section }: { section: Section }) {
  return (
    <article id={section.id} className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: section.color }}>
          {section.number} /
        </span>
        <h2 className="text-xl font-bold text-[#e8f0fe]">{section.title}</h2>
        <div className="flex-1 h-px opacity-30" style={{ background: `linear-gradient(90deg, ${section.color}, transparent)` }} />
      </div>

      <p className="text-sm text-[#7a9cc4] leading-relaxed mb-6 max-w-3xl">{section.intro}</p>

      <div className="grid sm:grid-cols-2 gap-4">
        {section.items.map(({ term, desc }) => (
          <div
            key={term}
            className="tech-card rounded-xl p-5 hover:border-opacity-60"
            style={{ ["--hover-color" as string]: section.color }}
          >
            <p className="text-xs font-mono font-semibold mb-2" style={{ color: section.color }}>
              {term}
            </p>
            <p className="text-sm text-[#7a9cc4] leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

const tocItems = sections.map((s) => ({ id: s.id, number: s.number, title: s.title, color: s.color }));

export default function AiFundamentals() {
  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-[#080c14]/90 backdrop-blur-md border-b border-[#1e2d42]">
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-[#00d4ff] shadow-[0_0_8px_#00d4ff] group-hover:shadow-[0_0_14px_#00d4ff] transition-shadow" />
            <span className="text-sm font-mono font-medium text-[#e8f0fe] tracking-tight">
              YF<span className="text-[#00d4ff]">.dev</span>
            </span>
          </Link>
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className="text-xs font-mono px-3 py-1.5 text-[#7a9cc4] hover:text-[#00d4ff] hover:bg-[rgba(0,212,255,0.06)] rounded transition-all duration-200"
            >
              ← Home
            </Link>
            {tocItems.map(({ id, number, title }) => (
              <a
                key={id}
                href={`#${id}`}
                className="hidden lg:inline-block text-xs font-mono px-3 py-1.5 text-[#7a9cc4] hover:text-[#00d4ff] hover:bg-[rgba(0,212,255,0.06)] rounded transition-all duration-200"
              >
                {number}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-24 px-6 max-w-5xl mx-auto">
        {/* Page header */}
        <div className="mb-16 relative">
          <div
            className="absolute -top-10 left-0 w-[500px] h-[300px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(0,212,255,0.06) 0%, transparent 70%)" }}
          />
          <div className="relative">
            <p className="text-xs font-mono text-[#00d4ff] mb-4 tracking-[0.25em] uppercase flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-[#00d4ff]" />
              Knowledge Base
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#e8f0fe] leading-none mb-4">
              AI の<span className="gradient-text">基礎</span>
            </h1>
            <p className="text-sm text-[#7a9cc4] max-w-xl leading-relaxed font-mono">
              <span className="text-[#00ff9d]">$</span>{" "}
              機械学習・深層学習・LLM・RAGまで、AIを体系的に理解するための基礎知識。
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <nav aria-label="目次" className="tech-card rounded-2xl p-6 mb-16" style={{ borderColor: "rgba(0,212,255,0.2)" }}>
          <p className="text-xs font-mono text-[#00d4ff] tracking-[0.2em] uppercase mb-4">目次</p>
          <ol className="grid sm:grid-cols-2 gap-2">
            {tocItems.map(({ id, number, title, color }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="flex items-center gap-2 text-sm text-[#7a9cc4] hover:text-[#e8f0fe] transition-colors py-1 group"
                >
                  <span className="text-xs font-mono opacity-60 group-hover:opacity-100 transition-opacity" style={{ color }}>
                    {number}
                  </span>
                  <span>{title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-20">
          {sections.map((section) => (
            <SectionCard key={section.id} section={section} />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-20 pt-8 border-t border-[#1e2d42] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs font-mono text-[#3d5a7a]">
            最終更新: 2025年
          </p>
          <Link
            href="/"
            className="text-xs font-mono text-[#7a9cc4] hover:text-[#00d4ff] transition-colors flex items-center gap-1"
          >
            ← ポートフォリオへ戻る
          </Link>
        </div>
      </main>
    </>
  );
}
