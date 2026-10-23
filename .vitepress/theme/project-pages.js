// Factual copy for the six project pages. Commands, examples, and claims
// are taken from each repository's README and docs. Do not add star counts.
// License lines appear only where that repository states one.

export const projects = {
  qc: {
    name: 'qc',
    kicker: 'Public repository',
    pitch: 'A deterministic checklist gate. It records answers with evidence tied to file hashes, and it will not pass until every applicable item is answered.',
    github: 'https://github.com/probelabs/qc',
    githubLabel: 'github.com/probelabs/qc',
    meta: ['Cosmopolitan APE', 'CLI'],
    visual: {
      scene: 'qc',
      label: 'Checklist rows drawn as points. Sealed rows end in an amber ring. Open rows break the column on the right.'
    },
    sections: [
      {
        id: 'what',
        kicker: '01 / What it is',
        title: 'A gate that stays closed',
        paragraphs: [
          [
            { text: 'Agents are non-deterministic. A content-addressed attestation is not. ' },
            { text: 'qc', href: 'https://github.com/probelabs/qc' },
            { text: ' records an evidenced answer bound to the bytes it covers, and it refuses to clear until every applicable item has one.' }
          ],
          [
            { text: 'That is the lab thesis, ' },
            { text: 'making agents trustworthy on real software', href: '/' },
            { text: ', as a gate you can run again. The committed tree is the record. Scratch that was never sealed does not count in CI.' }
          ]
        ],
        note: 'The README states that no LICENSE file is present.'
      },
      {
        id: 'how',
        kicker: '02 / How it works',
        title: 'Attestations bound to bytes',
        visual: {
          scene: 'qc-specimen',
          label: 'Five checklist rows. Four end in an amber ring. One digest is scattered and has no ring.',
          caption: 'Each row is an item. The cluster at the left is the digest of the bytes in scope. Change those bytes and the row opens again.'
        },
        paragraphs: [
          'An attestation is a claim about content. Its logical key is the item and a digest: a 16-hex SHA-256 prefix over the item identity plus the sorted, normalized hashes of files in that item’s scope. Rewording the question, or changing those bytes, forces the item again.'
        ],
        facts: [
          { term: 'qc/ vs .qc/', text: 'qc/ is committed: the vendored APE, checklists, config, and state. .qc/ is ignored scratch. Removing .qc/ is safe. Hand-editing qc/state/ or .qc/scratch.qcs is not.' },
          { term: 'Who writes state', text: 'mark, decide, and baseline write scratch only. seal appends a branch-owned segment. compact folds segments into base.qcs and runs on trunk only.' },
          { term: 'Verify', text: 'qc verify reads scratch plus committed state. --staged predicts CI from the index. --ci is the read-only gate of record. Unsealed scratch is invisible to the last two.' },
          { term: 'Exit codes', text: '0 all clear. 1 open items. 2 config or parse error. Help and errors name the next command. They never print a phrase that would satisfy the gate.' },
          { term: 'Evidence', text: 'pass, fail, and n/a need -m text with a falsifiable token: an existing path, a digit, a URL, or a backticked span. Applause such as lgtm, done, and ok is rejected. Common secret shapes are refused.' },
          { term: 'Provenance', text: 'QC_BY=agent, or --by agent, records who attested. Items tagged @human cannot be marked by an agent. @run items execute a command; a missing binary is a failure, not a skip.' }
        ]
      },
      {
        id: 'start',
        kicker: '03 / Quick start',
        title: 'Install the APE, then answer',
        paragraphs: [
          'qc is a Cosmopolitan APE universal binary. One release asset runs on Linux, macOS, and Windows from a shell. Do not open it from a GUI file manager. The installer needs no root.'
        ],
        commands: [
          {
            label: 'macOS / Linux, and Git Bash',
            code: 'curl -fsSL https://raw.githubusercontent.com/probelabs/qc/main/scripts/install.sh | sh\nqc help'
          },
          {
            label: 'Windows PowerShell',
            code: 'irm https://raw.githubusercontent.com/probelabs/qc/main/scripts/install.ps1 | iex'
          },
          {
            label: '60-second quickstart, from a git repo',
            code: 'qc init\nqc template list\nqc add docs\nqc plan'
          },
          {
            label: 'Decide, mark, seal, verify',
            code: 'export QC_BY=agent\nqc decide docs --yes -m "README.md documents the public install and usage surface for this change"\nqc mark docs/accuracy --pass -m "checked README.md section headings against the files present in the worktree"\nqc mark docs/stale --pass -m "README.md is new; no prior install steps to retire"\nqc verify\ngit add qc/\nqc seal --staged\nqc verify --staged\nqc report --md'
          }
        ]
      },
      {
        id: 'example',
        kicker: '04 / Example',
        title: 'What the CLI prints',
        paragraphs: [
          'Comments below are the sample output in the README, not a run from this site.'
        ],
        examples: [
          {
            caption: 'README · qc plan',
            code: 'qc plan\n# 1  docs/@applies   FORCED (never)\n#    Q: The change is documentation\n#    NEXT: qc decide docs --yes|--no -m "…"'
          },
          {
            caption: 'README · evidence rejected',
            code: 'qc mark docs/accuracy --pass -m "lgtm"\n# REJECTED — evidence must point at something falsifiable (a path, a number, a command, a link),\n# not restate that checking happened.\n# NEXT: qc mark <ref> --pass -m "…"'
          },
          {
            caption: 'README · qc report --md',
            code: 'qc report --md\n# | item | status | by | age | digest | evidence |\n# |---|---|---|---|---|---|\n# | docs/accuracy | CLEAR | agent | | b1a1bbdb28626343 | checked README.md section headings… |'
          }
        ]
      }
    ],
    docs: [
      { label: 'Agentic guide', href: 'https://github.com/probelabs/qc/blob/main/docs/agentic-guide.md', note: 'Claude Code, Cursor, CI, and the fail-then-pass loop' },
      { label: 'SPEC.md', href: 'https://github.com/probelabs/qc/blob/main/SPEC.md', note: 'Specification v0.4' },
      { label: 'SKILL.md', href: 'https://github.com/probelabs/qc/blob/main/SKILL.md', note: 'Short contract for an agent' }
    ],
    related: [
      { name: 'ste', href: '/ste', line: 'Another deterministic checker: Simplified Technical English, with JSON a machine can re-read.' },
      { name: 'Fuzzers', href: '/fuzzers', line: 'Correctness gates for parsers, the same idea as a failing check you can run again.' },
      { name: 'Proof', href: 'https://reqproof.com', line: 'The flagship assurance product these instruments sit beside.' }
    ]
  },

  ste: {
    name: 'ste',
    kicker: 'Open source',
    pitch: 'An ASD-STE100 Simplified Technical English validator, with a Go CLI and a Node CLI that emit JSON.',
    github: 'https://github.com/probelabs/ste',
    githubLabel: 'github.com/probelabs/ste',
    meta: ['Go', 'Node.js', 'MIT'],
    visual: {
      scene: 'ste',
      label: 'Two copies of the same lines of points. A few words are lifted off the baseline in amber.'
    },
    sections: [
      {
        id: 'what',
        kicker: '01 / What it is',
        title: 'A checker for controlled English',
        paragraphs: [
          [
            { text: 'ste validates text against ASD-STE100 Simplified Technical English. Two forms ship from one spec: a Go CLI and library, and a Node.js CLI and library with no dependencies. Both can emit JSON. Exit codes stay put. Errors name the next action.' }
          ],
          [
            { text: 'Procedure text is part of the software agents now write. ' },
            { text: 'Making agents trustworthy on real software', href: '/' },
            { text: ' includes a check on that prose you can run again, with the same messages in both languages. An Issue 9 dictionary ships with each CLI. The project has no affiliation with ASD.' }
          ]
        ]
      },
      {
        id: 'how',
        kicker: '02 / How it works',
        title: 'Two CLIs, one rule catalog',
        visual: {
          scene: 'ste-lexicon',
          label: 'A lattice of point clusters. Three amber points sit outside empty cells, each with a line back.',
          caption: 'Approved words sit in the lattice. A word that is not approved is a point off the cell, with a line to the alternative.'
        },
        paragraphs: [
          'The Node form is a ReqProof mirror of the Go source. The README reports the release gate as proof audit --no-cache: 209 checks, zero errors, zero warnings, and mirror_complete, so a Node target that drops a case the Go source holds fails the gate.'
        ],
        facts: [
          { term: 'Output', text: 'Pretty text with source lines, ste-diagnostics/v1 JSON, SARIF 2.1.0, or one line per finding. When a rule knows an approved alternative, pretty shows it under the line and JSON carries it as suggestion.' },
          { term: 'Exit codes', text: '0 no findings. 1 findings. 2 execution error. Errors on stderr include a hint: line that names the next action.' },
          { term: 'Markdown', text: 'Markdown files are parsed as markdown. Code fences, inline code, comments, and tables are ignored. List items count as procedure steps. --plain or --markdown overrides detection.' },
          { term: 'Rules', text: 'ste rules lists the catalog. Each rule names its ASD-STE100 section. Dictionary decisions are errors. Heuristic rules are warnings.' },
          { term: 'Config', text: 'The CLI reads ste.yaml from the working directory upward. --config sets a path. --no-config disables discovery. --dictionary or STE_DICTIONARY supplies a file. --no-dictionary turns dictionary rules off.' },
          { term: 'Dictionary', text: 'THIRD_PARTY_NOTICES.md names the source and the terms for the Issue 9 data. A sample dictionary remains for demos: --sample-dictionary.' }
        ]
      },
      {
        id: 'start',
        kicker: '03 / Quick start',
        title: 'Install and check a file',
        paragraphs: [
          'The Node CLI needs Node.js 18 or newer. It has no dependencies. npx @probelabs/ste and node node/bin/ste.js run the same commands as the Go binary.'
        ],
        commands: [
          {
            label: 'Go CLI',
            code: 'go install github.com/probelabs/ste/cmd/ste@latest'
          },
          {
            label: 'Node.js CLI',
            code: 'npm install -g @probelabs/ste\n# or from GitHub:\nnpm install -g github:probelabs/ste'
          },
          {
            label: 'Use',
            code: 'ste check manual.md\nste check --format json docs/*.md\nste check --format sarif docs/*.md\nste check --format text docs/*.md\ncat procedure.txt | ste check -\nste rules\nste dictionary inspect my-dictionary.json'
          }
        ]
      },
      {
        id: 'example',
        kicker: '04 / Example',
        title: 'The dictionary the CLI reads',
        paragraphs: [
          'The README does not include a sample finding. This is the ste-dictionary/v1 file it does include, and the project config beside it. A finding that knows an approved alternative puts that word in suggestion.'
        ],
        examples: [
          {
            caption: 'README · ste-dictionary/v1',
            code: '{\n  "schema": "ste-dictionary/v1",\n  "entries": [\n    {"word": "use", "part_of_speech": "verb", "approved": true,\n     "forms": ["uses", "used"]},\n    {"word": "utilize", "part_of_speech": "verb", "approved": false,\n     "alternatives": ["use"]}\n  ]\n}'
          },
          {
            caption: 'README · ste.yaml',
            code: 'technical_names: [ReqProof, SARIF]\nlimits:\n  instruction_words: 20\n  descriptive_words: 25\nrules:\n  disable: [passive-voice]\n  severity:\n    noun-cluster: info'
          }
        ]
      }
    ],
    docs: [
      { label: 'Architecture', href: 'https://github.com/probelabs/ste/blob/main/docs/architecture.md', note: 'How the two forms share one spec' },
      { label: 'README', href: 'https://github.com/probelabs/ste/blob/main/README.md', note: 'Install, rules, and the dictionary format' },
      { label: 'Third-party notices', href: 'https://github.com/probelabs/ste/blob/main/THIRD_PARTY_NOTICES.md', note: 'Source and terms for the Issue 9 dictionary data' }
    ],
    related: [
      { name: 'qc', href: '/qc', line: 'A checklist gate that will not clear without falsifiable evidence.' },
      { name: 'Proof', href: 'https://reqproof.com', line: 'ste uses ReqProof as the spec, the mirror, and the release gate.' },
      { name: 'docs-mcp', href: '/docs-mcp', line: 'Search a documentation repo from an assistant, instead of guessing at it.' }
    ]
  },

  aeo: {
    name: 'aeo',
    kicker: 'In private development',
    pitch: 'Measures whether Claude Code, Codex, and Grok mention your product, once with search off and once with search on.',
    meta: ['Python 3.11+', 'Private development'],
    visual: {
      scene: 'aeo',
      label: 'Three columns of points, split into a quiet half and a half with one amber search ray.'
    },
    sections: [
      {
        id: 'what',
        kicker: '01 / What it is',
        title: 'Two arms, one question',
        paragraphs: [
          'aeo asks Claude Code, Codex, and Grok the same realistic questions twice: once with search forced off, once with search allowed. It records the mention, whether they actually searched, the literal strings they typed into the search box, and which competitor names were already in those strings.',
          [
            { text: 'A mention from weights and a mention after a web search are different facts. ' },
            { text: 'Making agents trustworthy on real software', href: '/' },
            { text: ' starts with a measurement you can run again, not a screenshot of one chat. This is not Gemini grounding, and it is not a login to claude.ai.' }
          ]
        ]
      },
      {
        id: 'how',
        kicker: '02 / How it works',
        title: 'What a run keeps',
        visual: {
          scene: 'aeo-arms',
          label: 'Two fields of points. The right field sends amber rays outward.',
          caption: 'The quiet disk is what the model already believes. The rays are a search.'
        },
        paragraphs: [
          'Each cell runs in a fresh empty directory under /tmp/aeo-isolate-* so Grok cannot read a local playbook and “discover” the brand. Google AI Overviews, rankings, and Search Console can be attached as separate layers. The README says those layers never change the board scores.'
        ],
        facts: [
          { term: 'Knowledge', text: 'What the model already believes, with search forced off. The README’s advice: a new brand almost never wins this path in year one. Measure it anyway.' },
          { term: 'Search', text: 'Whether the engine searched, and the verbatim query. Most “search” is confirmation of an incumbent already named in the query, not discovery of you.' },
          { term: 'Board', text: 'aeo board writes win, gap, search-blind, or trap, plus markdown and agent JSON. The raw evidence file is the source of truth.' },
          { term: 'Canary', text: 'Before answers, each engine is asked what it knows about the operator. Exit code 3 stops the run if the answer contains the user’s name, handle, company, or product.' },
          { term: 'Frozen questions', text: 'measurement_set stores a question hash. aeo run exits 2 if the questions no longer hash to it. Reworded questions belong in the exploratory group and stay out of the totals.' },
          { term: 'Where it runs', text: 'Python 3.11+, standard library only. You need claude, codex, and/or grok on your machine. The README says not to run those CLIs from a VPS or datacenter.' }
        ]
      },
      {
        id: 'start',
        kicker: '03 / Quick start',
        title: 'Init, run, read the board',
        paragraphs: [
          'Never put the brand, a stack word, or an incumbent into a core prompt. If the model injects those into its own search call, that is a finding. --dry-run prints the exact claude, codex, or grok command and exits.'
        ],
        commands: [
          {
            label: 'Install',
            code: 'pip install -e .\n# or, without installing:\nPYTHONPATH=src python3 -m aeo --help'
          },
          {
            label: 'Quick start',
            code: 'python3 -m aeo init --brand Acme --domain acme.example --out aeo.config.json\n# or copy the XERJ example roster:\npython3 -m aeo init --from-example xerj --out aeo.config.json\n\npython3 -m aeo run --config aeo.config.json --engine all --arm both\npython3 -m aeo board aeo-data/runs/<run_id>.json\npython3 -m aeo report --html --out report.html aeo-data/runs/<run_id>.json'
          }
        ]
      },
      {
        id: 'example',
        kicker: '04 / Example',
        title: 'A board from the repo',
        paragraphs: [
          'examples/xerj is a real workspace in the project, not a hard-coded only-brand. This is the top of examples/xerj/aeo-data/boards/example-xerj-folder-search.md. The query cell is truncated in that file. Methodology walks the same question: “What’s the best way to search through a folder of files by content?” Nobody mentioned the brand. Codex searched, and the query already named ripgrep, Recoll, and DocFetcher. The call is trap, a watch query with no brand mention.'
        ],
        examples: [
          {
            caption: 'examples/xerj · example-xerj-folder-search.md',
            code: '# Board · example-xerj-folder-search\n\nFocus mention rate (search arm): 0.00\nFocus search rate: 0.00\nWatch mention rate: 0.00\nPrebelief searches (⚠): 1\n\n## Watch\nstill the incumbent (usually ripgrep)? keep measuring, do not invest yet\n\n| Query | Claude K | Claude S | Claude 🔍 | Codex K | Codex S | Codex 🔍 | Grok K | Grok S | Grok 🔍 | Prebelief | Call |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| What\'s the best way to search through a folder of f… | ✗ | ✗ | ✗ | ✗ | ✗ | ⚠ | ✗ | ✗ | ✗ | ripgrep, recoll, docfetcher | trap |\n\n✓ mention · ✗ miss · — not run · 🔍 searched · ⚠ confirmation search (not discovery) · call: win | gap | trap | search-blind'
          }
        ]
      }
    ],
    related: [
      { name: 'docs-mcp', href: '/docs-mcp', line: 'If they cannot retrieve the page, make the repo itself searchable.' },
      { name: 'Probe', href: '/probe', line: 'Semantic code search. aeo’s example board is about folder search, and ripgrep is the incumbent it records.' },
      { name: 'qc', href: '/qc', line: 'A different kind of evidence: attestations bound to file hashes.' }
    ]
  },

  fuzzers: {
    name: 'Fuzzers',
    kicker: 'Open source',
    pitch: 'Structure-aware fuzzers for JSON, GraphQL, and XML. Grammar generators, format-aware mutations, and correctness gates.',
    github: 'https://github.com/probelabs/json-fuzz',
    githubLabel: 'github.com/probelabs/json-fuzz',
    repos: [
      { label: 'github.com/probelabs/json-fuzz', href: 'https://github.com/probelabs/json-fuzz' },
      { label: 'github.com/probelabs/graphql-fuzz', href: 'https://github.com/probelabs/graphql-fuzz' },
      { label: 'github.com/probelabs/xml-fuzz', href: 'https://github.com/probelabs/xml-fuzz' }
    ],
    meta: ['json-fuzz', 'graphql-fuzz', 'xml-fuzz'],
    visual: {
      scene: 'fuzzers',
      label: 'Three point structures: a nested form, a small graph, and nested marks. Each one is fractured.'
    },
    sections: [
      {
        id: 'what',
        kicker: '01 / What it is',
        title: 'Structure, then a break',
        paragraphs: [
          'Blind mutation reaches the dangerous edges of a parser only after a huge number of trials: a cut just after a colon, a truncated escape, a brace with no closer. These three libraries do the opposite. A grammar emits structure first. Format-aware mutations then break that structure where the parser has to change state.',
          [
            { text: 'Parsers sit under agents, audits, and everything those agents edit. ' },
            { text: 'Making agents trustworthy on real software', href: '/' },
            { text: ' needs instruments that fail in a way you can re-run. json-fuzz, graphql-fuzz, and xml-fuzz are those instruments. Proof plans to release a separate quality-engineering harness. That release is not these libraries.' }
          ]
        ]
      },
      {
        id: 'how',
        kicker: '02 / How it works',
        title: 'Generate, mutate, gate',
        visual: {
          scene: 'fuzzers-strip',
          frame: 'strip',
          label: 'Six stages of the same point structure, from intact to scattered.',
          caption: 'One structure, then format-aware noise. The grammar is there before the break.'
        },
        paragraphs: [
          'Each fuzzer is a library you wire into your own harness in a few calls. They are not a single CLI with one output format. The shape is the same in Go and Rust.'
        ],
        facts: [
          { term: 'Generate', text: 'A grammar-based generator emits valid structure, or, for XML, well-formed documents plus controlled malformed ones. The fuzzer is not waiting on random bytes to invent a token.' },
          { term: 'Mutate', text: 'Format-aware operators return a new buffer. They truncate at structural boundaries, inject bad UTF-8, and unbalance delimiters. They do not flip bytes at random and hope.' },
          { term: 'Gate', text: 'Assertions turn a panic, invalid output, a failed round trip, or non-determinism into a finding. A crash with no assertion is not the whole test.' },
          { term: 'Corpus', text: 'Seed inputs cover known bug classes so the first iterations are already at the edges, before the random loop starts.' }
        ]
      },
      {
        id: 'json-fuzz',
        kicker: '03 / json-fuzz',
        title: 'JSON, in Go',
        paragraphs: [
          'github.com/probelabs/json-fuzz is a reusable fuzzer for Go JSON parsers: a generator that always emits valid JSON (RFC 8259), JSON-aware mutations, adversarial key paths, a seed corpus, and a Gates helper. It was extracted from the fuzz infrastructure that found real bugs in buger/jsonparser. The README lists empty-key panics at eight sites, lone-surrogate synthesis, a trailing comma left by Delete, cross-type Set corruption, scalar-array data loss, and a spurious ArrayEach callback on a non-array root.',
          'A second package, github.com/probelabs/json-fuzz/encodingjson, probes the standard library’s encoding/json for internal consistency: no panic, Valid agreeing with Unmarshal, round trip, deep nesting that must error cleanly, and streaming and transform checks. The README states the license as MIT. There is no LICENSE file in the repository root.'
        ],
        commands: [
          {
            label: 'README · run',
            code: 'go test ./... -count=1 -race\ngo test -fuzz=FuzzMyParser -fuzztime=60s\ngo test -fuzz=FuzzEncodingJSON -fuzztime=60s'
          }
        ],
        examples: [
          {
            caption: 'README · wire ParserTarget',
            code: 'func FuzzMyParser(f *testing.F) {\n    jsonfuzz.AddCorpus(f) // seeds all dangerous inputs\n    f.Fuzz(func(t *testing.T, data []byte, path []byte) {\n        jsonfuzz.RunStructureAware(t, data, path, &myTargetAdapter{})\n    })\n}'
          }
        ]
      },
      {
        id: 'graphql-fuzz',
        kicker: '04 / graphql-fuzz',
        title: 'GraphQL, in Rust',
        paragraphs: [
          'graphql-fuzz is the GraphQL counterpart: grammar-based generators for operations, schemas, values, and Apollo Federation directives, plus GraphQL-aware mutations and correctness gates. It was extracted from proptest infrastructure that probes hive/router’s graphql-tools parser, query planner, and validator. The README describes bug classes it targets, including UTF-8 and surrogates, deep nesting, fragment cycles, and typeless inline fragments. It does not claim a list of bugs already found. The package layout lists 16 mutation operators and six gates: no-panic, output-valid, round-trip, determinism, deep-nesting-safe, and federation-valid. The README states the license as MIT. There is no LICENSE file in the repository root.'
        ],
        commands: [
          {
            label: 'README · Cargo.toml',
            code: '[dev-dependencies]\ngraphql_fuzz = "0.1"\nrand = "0.8"'
          },
          {
            label: 'README · how to run the suite',
            code: 'cargo build\ncargo test\nPROPTEST_CASES=2048 cargo test'
          }
        ],
        examples: [
          {
            caption: 'README · one fuzz iteration',
            code: 'fn fuzz_one(seed: u64) {\n    let mut rng = StdRng::seed_from_u64(seed);\n    let op = gfuzz::gen_operation(&mut rng, 5);\n    let mutated = gfuzz::apply_mutation(&mut rng, op.as_bytes());\n    let input = String::from_utf8_lossy(&mutated);\n    gfuzz::gates::no_panic("parse_operation", || {\n        let _ = my_parser::parse_operation(&input);\n    }).unwrap();\n}'
          }
        ]
      },
      {
        id: 'xml-fuzz',
        kicker: '05 / xml-fuzz',
        title: 'XML, in Rust',
        paragraphs: [
          'xml-fuzz is the XML counterpart, for libxml2, expat, quick-xml, and any parser that implements XmlParseTarget. It is not tied to libxml2. Optional C harnesses under harness/ exercise libxml2. The README counts 28 XML-aware mutation operators, asserted in tests, and gates for no-panic, clean-fail, determinism, deep-nesting, round-trip, and output-valid. The repository includes an MIT license.'
        ],
        commands: [
          {
            label: 'README · dev dependency',
            code: '[dev-dependencies]\nxml_fuzz = { git = "https://github.com/probelabs/xml-fuzz" }\n# crates.io: xml_fuzz = "0.1"\nrand = "0.8"'
          },
          {
            label: 'README · libxml2 ASan harness',
            code: 'cd xml-fuzz\nbash harness/build_asan.sh\nexport XML_FUZZ_LIBXML2_ALL=$PWD/harness/libxml2_all_apis\ncargo run --example fuzz_all_libxml2\necho \'<r/>\' | ./harness/libxml2_all_apis --api=xml-reader'
          }
        ],
        examples: [
          {
            caption: 'README · structure-aware loop',
            code: 'use xml_fuzz::{run_structure_aware, stub_parser::StubXmlParser};\n\nlet mut target = StubXmlParser;\nrun_structure_aware(b"<seed/>", &mut target).unwrap();'
          }
        ]
      }
    ],
    docs: [
      { label: 'json-fuzz', href: 'https://github.com/probelabs/json-fuzz', note: 'Go library, generator, mutations, gates, encoding/json package' },
      { label: 'graphql-fuzz', href: 'https://github.com/probelabs/graphql-fuzz', note: 'Rust library, Federation generators, hive differential tests' },
      { label: 'xml-fuzz', href: 'https://github.com/probelabs/xml-fuzz', note: 'Rust library and the libxml2 harness notes' }
    ],
    related: [
      { name: 'qc', href: '/qc', line: 'A gate with exit codes, for checklists rather than parser bytes.' },
      { name: 'proof-action', href: 'https://github.com/probelabs/proof-action', line: 'The GitHub Action that runs a ReqProof audit and writes the job summary.' },
      { name: 'Proof', href: 'https://reqproof.com', line: 'The instruments behind an audit, and the product they serve.' }
    ]
  },

  'docs-mcp': {
    name: 'docs-mcp',
    kicker: 'Open source',
    pitch: 'Turns any GitHub repository into an MCP server, so an assistant can search its code or its docs.',
    github: 'https://github.com/probelabs/docs-mcp',
    githubLabel: 'github.com/probelabs/docs-mcp',
    meta: ['MCP', 'npm', 'MIT'],
    visual: {
      scene: 'docs',
      label: 'Lines of points for files, an amber conduit, and a cluster where a point arrives.'
    },
    sections: [
      {
        id: 'what',
        kicker: '01 / What it is',
        title: 'A repository as a tool',
        paragraphs: [
          [
            { text: 'docs-mcp is a Model Context Protocol server powered by ' },
            { text: 'Probe', href: '/probe' },
            { text: '. Point it at a git repository or a folder and an assistant can search that tree. The same package can ship with content pre-built, or pick the source when it starts.' }
          ],
          [
            { text: 'An assistant is only as trustworthy as the corpus it was allowed to read. ' },
            { text: 'Making agents trustworthy on real software', href: '/' },
            { text: ' means the search hits this repo, not a guess about it. Probe does the search. This server exposes that search as one MCP tool.' }
          ]
        ]
      },
      {
        id: 'how',
        kicker: '02 / How it works',
        title: 'Archive, clone, or a baked-in tree',
        visual: {
          scene: 'docs-hits',
          label: 'Stacked lines of points. A few lines are amber, and a point travels across them.',
          caption: 'A query moves across the archive. The amber lines are the pages that match.'
        },
        paragraphs: [
          'By default, a gitUrl with updates disabled downloads a GitHub .tar.gz, which starts faster. A full git clone is used only when autoUpdateInterval is greater than 0. The configuration list gives that field a default of 0.'
        ],
        facts: [
          { term: 'Tool', text: 'The exposed tool defaults to the name search_docs. Arguments are query (required) and page (optional, default 1). toolName and toolDescription change what the assistant sees.' },
          { term: 'Sources', text: 'includeDir is a local directory. gitUrl is a repository. gitRef defaults to main. If both are set in the same configuration source, gitUrl wins.' },
          { term: 'Precedence', text: 'CLI arguments override environment variables. Both override docs-mcp.config.json. That file is also the build-time default. dataDir at runtime points at a tree without a rebuild.' },
          { term: 'Updates', text: 'autoUpdateInterval is in minutes. Above 0, the server clones and pulls, and git must be on PATH. At 0, it uses the archive and does not pull.' },
          { term: 'Package', text: 'Published as @probelabs/docs-mcp. Fork it, set the config, npm run build, and npm publish to ship a server with one corpus baked in. The repository license is MIT.' }
        ]
      },
      {
        id: 'start',
        kicker: '03 / Quick start',
        title: 'Point npx at a repo',
        paragraphs: [
          'The README’s first command searches the Probe repository. A Claude Desktop config uses the same arguments. Smithery can install it for Claude Desktop as well.'
        ],
        commands: [
          {
            label: 'README · any GitHub repo',
            code: 'npx -y @probelabs/docs-mcp@latest --gitUrl https://github.com/probelabs/probe'
          },
          {
            label: 'README · Claude Desktop config',
            code: '{\n  "mcpServers": {\n    "docs-search": {\n      "command": "npx",\n      "args": [\n        "-y",\n        "@probelabs/docs-mcp@latest",\n        "--gitUrl",\n        "https://github.com/your-org/your-repo",\n        "--toolName",\n        "search_docs",\n        "--toolDescription",\n        "Search documentation"\n      ]\n    }\n  }\n}'
          },
          {
            label: 'README · Smithery',
            code: 'npx -y @smithery/cli install @probelabs/docs-mcp --client claude'
          }
        ]
      },
      {
        id: 'example',
        kicker: '04 / Example',
        title: 'The call the assistant makes',
        paragraphs: [
          'The README shows the tool call, not a sample hit list. query is the natural-language search. page selects a later page of matches.'
        ],
        examples: [
          {
            caption: 'README · example tool call',
            code: '{\n  "tool_name": "search_tyk_docs",\n  "arguments": {\n    "query": "gateway rate limiting",\n    "page": 1\n  }\n}'
          },
          {
            caption: 'README · docs-mcp.config.json for a local tree',
            code: '{\n  "includeDir": "/Users/username/projects/my-project/docs",\n  "toolName": "search_my_project_docs",\n  "toolDescription": "Search the documentation for My Project.",\n  "ignorePatterns": ["node_modules", ".git", "build", "*.log"]\n}'
          }
        ]
      }
    ],
    docs: [
      { label: 'README', href: 'https://github.com/probelabs/docs-mcp/blob/main/README.md', note: 'Configuration, pre-built packages, and the release workflow' },
      { label: 'Probe', href: '/probe', note: 'The search engine this server runs' },
      { label: 'Smithery', href: 'https://smithery.ai/server/@probelabs/docs-mcp', note: 'Install listing for Claude Desktop' }
    ],
    related: [
      { name: 'Probe', href: '/probe', line: 'Semantic code search over large trees. docs-mcp is a thin MCP server on top of it.' },
      { name: 'Big Brain', href: '/big-brain', line: 'Another MCP server from the lab, for handing a stuck problem to a stronger model.' },
      { name: 'aeo', href: '/aeo', line: 'Measures whether coding agents mention you. This server is how an agent can read the repo itself.' }
    ]
  },

  recs: {
    name: 'recs',
    kicker: 'Open source',
    pitch: 'A file-based CRM for agents. Records are Markdown, dashboards are YAML, and the local UI is a projection.',
    github: 'https://github.com/buger/recs',
    githubLabel: 'github.com/buger/recs',
    meta: ['Go', 'MIT'],
    visual: {
      scene: 'recs',
      label: 'Columns of point-cards over faint file lines, with one amber card moving between columns.'
    },
    sections: [
      {
        id: 'what',
        kicker: '01 / What it is',
        title: 'The files are the database',
        paragraphs: [
          'recs is a file-native CRM for agents. People, companies, deals, notes, and next actions live in Markdown with YAML frontmatter. The CLI is how an agent reads and writes them. Dashboards and boards are YAML views over those files, as many as you want.',
          [
            { text: 'Hosted dashboards are someone else’s quota. recs ships no model, no login, and no cloud sync. ' },
            { text: 'Making agents trustworthy on real software', href: '/' },
            { text: ' includes memory you can diff. The workspace marker is crm.yaml. Cache lives in .crm/. Git is optional. The UI at localhost is a projection, not the system of record.' }
          ]
        ]
      },
      {
        id: 'how',
        kicker: '02 / How it works',
        title: 'Records, boards, dashboards',
        visual: {
          scene: 'recs-links',
          label: 'Horizontal lines of points with arcs joining them. One arc is amber.',
          caption: 'Records are files. A link is an arc between them. The board is only a view.'
        },
        paragraphs: [
          'State lives in fields, not in the directory name. Boards are matcher views: dragging a card runs on_drop, which writes frontmatter, the same engine as recs move. Each dashboard widget is a query, not a copy of the data. Add a file, get another dashboard. The agent learns commands from recs --help. There is no skill file and no SDK. Failed writes return ok: false plus the error, the field, and the allowed values.'
        ],
        facts: [
          { term: 'Records', text: 'init, create, show, list, set, patch, edit, delete, link.' },
          { term: 'Find', text: 'search, query, context, inbox. query takes a matcher such as type=deal status=talking and can print JSON.' },
          { term: 'Views', text: 'board, dashboard, move, next, triage.' },
          { term: 'Exchange and git', text: 'ingest, export, import. diff, changed, history. validate and index for hygiene. serve for the local UI.' },
          { term: 'Workspaces', text: 'testdata/sample is the small fictional client CRM in the screenshots. examples/studio is a fuller practice: retainers, hiring, and the week. recs init starts empty.' },
          { term: 'UI', text: 'recs serve listens on http://localhost:7777. Light and dark come from a toggle in the UI. The README states the license as MIT.' }
        ]
      },
      {
        id: 'start',
        kicker: '03 / Quick start',
        title: 'Install, init, serve',
        paragraphs: [
          'The install blurb in the README serves testdata/sample, which is a directory in the repository. After a plain go install, that path exists only in a checkout. recs init creates a workspace in the current directory. From source, the README also says go build -o recs ./cmd/recs.'
        ],
        commands: [
          {
            label: 'README · install',
            code: 'go install github.com/buger/recs/cmd/recs@latest\nrecs serve --root testdata/sample'
          },
          {
            label: 'README · 60 seconds',
            code: 'recs init\nrecs create person --id person_maya --name "Maya Chen"\nrecs create deal --title "Harbor Press catalog" --set status=talking\nrecs query \'type=deal status=talking\' --json\nrecs board pipeline\nrecs dashboard\nrecs serve'
          }
        ]
      },
      {
        id: 'example',
        kicker: '04 / Example',
        title: 'A record, and the UI over it',
        paragraphs: [
          'The record and the board YAML are from the README. The screenshots are docs/images/gallery-dashboards.png and docs/images/board-pipeline.png in the repository.'
        ],
        examples: [
          {
            caption: 'README · a deal record',
            code: '---\nid: deal_harbor\ntype: deal\ntitle: Harbor Press catalog\nstatus: talking\nowner: demo\n---\n\nTalked with [[Maya Chen]] about the catalog refresh.'
          },
          {
            caption: 'README · a board',
            code: 'name: Pipeline\nmatch:\n  type: deal\ncolumn:\n  field: status\ncolumns:\n  - id: talking\n    title: Talking\n  - id: proposal\n    title: Proposal\n    on_drop:\n      set:\n        status: proposal\n        proposed_at: $now'
          }
        ],
        figures: [
          {
            src: '/images/projects/recs-gallery.png',
            width: 2880,
            height: 1694,
            alt: 'recs dashboard gallery in a dark theme: Pipeline metrics, a Revenue line chart, an Open tasks list, and a Week calendar.',
            caption: 'Repository screenshot · docs/images/gallery-dashboards.png'
          },
          {
            src: '/images/projects/recs-board.png',
            width: 2880,
            height: 704,
            alt: 'recs pipeline board with columns Inbox, Talking, Proposal, and Won, including a Harbor Press catalog card.',
            caption: 'Repository screenshot · docs/images/board-pipeline.png'
          }
        ]
      }
    ],
    docs: [
      { label: 'Dashboards', href: 'https://github.com/buger/recs/blob/main/docs/dashboards.md', note: 'YAML widgets and layouts' },
      { label: 'Distribution', href: 'https://github.com/buger/recs/blob/main/docs/distribution.md', note: 'How a workspace is packaged' },
      { label: 'Contributing', href: 'https://github.com/buger/recs/blob/main/CONTRIBUTING.md', note: 'Issues for bugs and ideas. The README says unsolicited pull requests are not accepted.' }
    ],
    related: [
      { name: 'Memaris', href: '/memaris', line: 'Turns past Claude Code sessions into persistent memory.' },
      { name: 'qc', href: '/qc', line: 'If an agent updates the CRM, a checklist can still demand evidence before the change clears.' },
      { name: 'Vow', href: '/vow', line: 'Accountability gates before an agent commits or acts.' }
    ]
  }
}

export function projectBySlug(slug) {
  return projects[slug] || null
}
