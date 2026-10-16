# ASD-STE100 / Issue 9 / Validator

```
ste check manual.md → 1 finding · suggestion: use
go install github.com/probelabs/ste/cmd/ste@latest
npm install -g @probelabs/ste
```

## Check 01

| id | part | text |
| --- | --- | --- |
| approved-words | 1 | Use only dictionary-approved words with their approved meaning. |
| approved-form | 1 | Use only the approved forms of an approved word. |
| abbreviation | 1 | Use only approved abbreviations. |
| numbers | 1 | Do not start a sentence with a numeral. Put a space before a unit. Use approved units. |
| noun-cluster | 2 | Do not use a cluster of more than 3 nouns. |
| passive-voice | 3 | Use the active voice. This heuristic checks for a be-verb with an -ed form. |
| sentence-length | 4 | Keep sentences short: 20 words for an instruction, 25 for a descriptive sentence. |
| procedure-step | 5 | Start each procedure step with an approved verb in the imperative form. |

Operate `ste rules`.

Each item shows its part of ASD-STE100.

A decision from the `dictionary` be an error.

An item with a `heuristic` be a precaution.

## Output 02

```
error[approved-words]: "utilize" is not an approved word
 --> manual.md:1:1
  = help: use "use"
{ "schema": "ste-diagnostics/v1", "rule": "approved-words", "suggestion": "use \"use\"" }
{ "version": "2.1.0", "$schema": "https://json.schemastore.org/sarif-2.1.0.json" }
```

Read the shape of the output in `internal/report`.

This copy shows the shape of the output.

It be not the output of `ste check` on this sheet.

You can get `pretty`, `JSON`, and `SARIF` 2.1.0.

## Exit code 03

| code | meaning |
| --- | --- |
| 0 | No findings. |
| 1 | Findings. |
| 2 | Execution error. |

The tool writes a `hint` on `stderr` when `--format` be not `pretty`, `text`, `json`, or `sarif`.

## Go shape and Node.js shape 04

The `Go` shape be a `CLI`.

Install the `Go` shape from the copy above.

The `Node.js` shape be a `ReqProof` copy of the `Go` source.

The `README` shows `proof audit --no-cache`.

The count be 209 check, 0 error, and 0 precaution.

The `README` also shows `mirror_complete`.

The `Node.js` shape contains no `dependencies`.

A count of 18 or more be necessary for `Node.js`.

The tool be not a part of `ASD`.

## Example 05

Write an instruction.

This example holds 22 entry from Issue 9.

This example be not `ste check`.

## Install 06

Install the tool from the copy above.

Read the source on `GitHub`.
