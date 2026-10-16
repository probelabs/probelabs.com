<script setup>
import { computed, onMounted, ref } from 'vue'
import ProbeChrome from '../ProbeChrome.vue'
import { copyText } from '../copyText.js'

const url = ref('https://github.com/probelabs/probe')
const copied = ref(false)
const open = ref('')
const reduce = ref(false)

const config = computed(() => JSON.stringify({
  mcpServers: {
    'docs-search': {
      command: 'npx',
      args: [
        '-y',
        '@probelabs/docs-mcp@latest',
        '--gitUrl',
        url.value || 'https://github.com/org/repo',
        '--toolName',
        'search_docs',
        '--toolDescription',
        'Search documentation'
      ]
    }
  }
}, null, 2))

const npx = computed(() => `npx -y @probelabs/docs-mcp@latest --gitUrl ${url.value || 'https://github.com/org/repo'}`)

const questions = [
  {
    id: 'rank',
    q: 'Where is ranking defined?',
    slips: [
      {
        call: 'src/ranking.rs · 1–6',
        href: 'https://github.com/probelabs/probe/blob/main/src/ranking.rs#L1-L6',
        text: 'use crate::simd_ranking::{SimdBm25Params, SparseDocumentMatrix};\nuse probe_code::search::elastic_query::Expr;\nuse rust_stemmers::{Algorithm, Stemmer};'
      },
      {
        call: 'src/ranking.rs · 13–14',
        href: 'https://github.com/probelabs/probe/blob/main/src/ranking.rs#L13-L14',
        text: '/// Maps unique query tokens (Strings) to unique u8 indices\npub type QueryTokenMap = HashMap<String, u8>;'
      },
      {
        call: 'src/ranking.rs · 17–23',
        href: 'https://github.com/probelabs/probe/blob/main/src/ranking.rs#L17-L23',
        text: 'pub struct TfDfResult {\n    pub term_frequencies: Vec<HashMap<u8, usize>>,\n    pub document_frequencies: HashMap<String, usize>,\n    pub document_lengths: Vec<usize>,\n}'
      }
    ]
  },
  {
    id: 'query',
    q: 'Where does a query match live?',
    slips: [
      {
        call: 'src/query.rs · 6–8',
        href: 'https://github.com/probelabs/probe/blob/main/src/query.rs#L6-L8',
        text: 'use ast_grep_core::language::{Language, TSLanguage};\nuse ast_grep_core::AstGrep;\nuse ast_grep_language::SupportLang;'
      },
      {
        call: 'src/query.rs · 19–25',
        href: 'https://github.com/probelabs/probe/blob/main/src/query.rs#L19-L25',
        text: 'pub struct AstMatch {\n    pub file_path: PathBuf,\n    pub byte_start: usize,\n    pub byte_end: usize,\n    pub line_start: usize,\n    pub line_end: usize,'
      },
      {
        call: 'src/query.rs · 10–12',
        href: 'https://github.com/probelabs/probe/blob/main/src/query.rs#L10-L12',
        text: 'use ignore::WalkBuilder;\nuse probe_code::file_guard;\nuse probe_code::path_resolver::resolve_path;'
      }
    ]
  },
  {
    id: 'config',
    q: 'Where is search configuration?',
    slips: [
      {
        call: 'src/config.rs · 10–12',
        href: 'https://github.com/probelabs/probe/blob/main/src/config.rs#L10-L12',
        text: '/// Global configuration for probe\n/// All fields are optional to support partial configurations and merging\n#[derive(Debug, Clone, Serialize, Deserialize, Default)]'
      },
      {
        call: 'src/config.rs · 13–18',
        href: 'https://github.com/probelabs/probe/blob/main/src/config.rs#L13-L18',
        text: 'pub struct ProbeConfig {\n    pub defaults: Option<DefaultsConfig>,\n    pub search: Option<SearchConfig>,\n    pub extract: Option<ExtractConfig>,'
      },
      {
        call: 'src/config.rs · 21–23',
        href: 'https://github.com/probelabs/probe/blob/main/src/config.rs#L21-L23',
        text: 'pub query: Option<QueryConfig>,\n    pub lsp: Option<LspConfig>,\n    pub performance: Option<PerformanceConfig>,'
      }
    ]
  },
  {
    id: 'mods',
    q: 'Which modules does search include?',
    slips: [
      {
        call: 'src/search/mod.rs · 1–6',
        href: 'https://github.com/probelabs/probe/blob/main/src/search/mod.rs#L1-L6',
        text: 'pub mod file_processing;\npub mod query;\nmod result_ranking;\npub mod block_merging;\npub mod cache;\npub mod early_ranker;'
      },
      {
        call: 'src/search/mod.rs · 8–12',
        href: 'https://github.com/probelabs/probe/blob/main/src/search/mod.rs#L8-L12',
        text: 'pub mod elastic_query;\npub mod file_list_cache;\npub mod filters;\npub mod lsp_enrichment;\npub mod ripgrep_searcher;'
      },
      {
        call: 'src/search/mod.rs · 16–20',
        href: 'https://github.com/probelabs/probe/blob/main/src/search/mod.rs#L16-L20',
        text: 'pub mod search_runner;\npub mod search_tokens;\npub mod simd_pattern_matching;\npub mod simd_tokenization;\npub mod term_exceptions;'
      }
    ]
  }
]

function highlight(text) {
  return text.split(/(ranking|query|search|config|AstMatch|ProbeConfig)/g)
}

async function copyConfig() {
  copied.value = await copyText(config.value)
}

function ask(id) {
  open.value = open.value === id ? '' : id
}

onMounted(() => {
  reduce.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
</script>

<template>
  <ProbeChrome
    class="room"
    slug="docs-mcp"
    bg="#043f2e"
    github="https://github.com/probelabs/docs-mcp"
    repo-label="github.com/probelabs/docs-mcp"
    license="MIT"
    :style="{ '--bg': '#043f2e', '--ink': '#fcfcfc', '--focus': '#c8f169', colorScheme: 'dark' }"
  >
    <header class="hero">
      <div>
        <p class="call">MCP · Probe-powered · Docs + code</p>
        <h1>Point it at a repo. Your assistant can read it.</h1>
        <p class="lede">Chat with code or your docs by simply pointing to a git repo or folder.</p>
        <a href="https://github.com/probelabs/docs-mcp">GitHub →</a>
      </div>
      <form class="paper" @submit.prevent="copyConfig">
        <label for="repo-url">Repository URL</label>
        <input id="repo-url" v-model="url" type="url" spellcheck="false" autocomplete="off">
        <pre>{{ config }}</pre>
        <pre>{{ npx }}</pre>
        <button class="lime" type="submit">Copy config</button>
        <p v-if="copied" role="status">Copied</p>
      </form>
    </header>

    <section class="stack" aria-labelledby="shelf">
      <p class="call">Ask the shelf</p>
      <h2 id="shelf">Recorded results</h2>
      <p>Canned excerpts from the probe repository. Each slip links to the file on GitHub. Not a live Probe call.</p>
      <div class="ask">
        <button
          v-for="item in questions"
          :key="item.id"
          type="button"
          :aria-expanded="open === item.id ? 'true' : 'false'"
          @click="ask(item.id)"
        >{{ item.q }}</button>
      </div>
      <div v-if="open" class="drawer">
        <a
          v-for="slip in questions.find((item) => item.id === open).slips"
          :key="slip.href"
          class="slip"
          :href="slip.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p class="call">{{ slip.call }}</p>
          <pre><template v-for="(bit, index) in highlight(slip.text)" :key="index"><mark v-if="/^(ranking|query|search|config|AstMatch|ProbeConfig)$/.test(bit)" class="hit">{{ bit }}</mark><template v-else>{{ bit }}</template></template></pre>
        </a>
      </div>
    </section>

    <section class="stack" aria-labelledby="reads">
      <h2 id="reads">How it reads</h2>
      <ol class="flow">
        <li>repo</li><span aria-hidden="true">→</span>
        <li>.tar.gz or clone</li><span aria-hidden="true">→</span>
        <li>Probe index</li><span aria-hidden="true">→</span>
        <li>MCP tool</li><span aria-hidden="true">→</span>
        <li>assistant</li>
      </ol>
      <p>With <code>autoUpdateInterval</code> at 0, a <code>gitUrl</code> downloads a GitHub .tar.gz. A full git clone runs only when <code>autoUpdateInterval</code> is greater than 0. In <code>src/config.js</code> that field defaults to 0.</p>
      <p>CLI flags read by minimist: <code>--gitUrl</code>, <code>--gitRef</code>, <code>--includeDir</code>, <code>--dataDir</code>, <code>--toolName</code>, <code>--toolDescription</code>, <code>--autoUpdateInterval</code>, <code>--ignorePatterns</code>, <code>--enableBuildCleanup</code>, <code>--config</code>.</p>
    </section>

    <section class="stack" aria-labelledby="shelve">
      <h2 id="shelve">Three ways to shelve</h2>
      <dl>
        <dt>Local directory</dt>
        <dd><code>--includeDir /path/to/docs</code></dd>
        <dt>Git repo</dt>
        <dd><code>--gitUrl https://github.com/org/repo</code></dd>
        <dt>Pre-built into the package</dt>
        <dd><code>docs-mcp.config.json</code>, then <code>npm run build</code> and <code>npm publish</code>.</dd>
      </dl>
    </section>

    <section class="stack" aria-labelledby="yours">
      <h2 id="yours">Make it yours</h2>
      <p>The tool name and description are yours. Use the package as a template for an official docs MCP.</p>
      <div class="snippet">
        <pre>{
  "toolName": "search_docs",
  "toolDescription": "Search documentation using the probe search engine."
}</pre>
      </div>
      <p>Those two strings are the defaults in <code>src/config.js</code>.</p>
    </section>

    <section class="stack" aria-labelledby="install">
      <h2 id="install">Install</h2>
      <p class="mono">npx -y @probelabs/docs-mcp@latest --gitUrl https://github.com/probelabs/probe</p>
      <p>Claude Desktop on macOS reads <span class="mono">~/Library/Application Support/Claude/claude_desktop_config.json</span>.</p>
      <p><a href="https://github.com/probelabs/docs-mcp">GitHub →</a></p>
    </section>
  </ProbeChrome>
</template>

<style src="./docs-mcp.css"></style>
